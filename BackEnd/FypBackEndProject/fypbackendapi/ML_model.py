import numpy as np
import pandas as pd
from sklearn.metrics.pairwise import cosine_similarity
from sklearn.metrics import mean_squared_error
from sklearn.model_selection import train_test_split
from sklearn.feature_extraction.text import TfidfVectorizer, CountVectorizer
from sklearn.metrics.pairwise import cosine_similarity
from sklearn.metrics.pairwise import linear_kernel
from .models import Product

def recommend_product_based_on_plot(Searched_product):
    products_qs=Product.objects.all()
    products_numpy_array=list(products_qs.values())
    tfidf=CountVectorizer(stop_words='english')
    ProductDS_IN_Pandas_DataFrame=pd.DataFrame(products_numpy_array)
    ProductDS_IN_Pandas_DataFrame['product_name'].fillna('')
    tfidf_matrix=tfidf.fit_transform(ProductDS_IN_Pandas_DataFrame['product_brand'])
    # print(tfidf_matrix)
    similarity_matrix=cosine_similarity(tfidf_matrix,tfidf_matrix)
    # print(similarity_matrix)
    mapping = pd.Series(ProductDS_IN_Pandas_DataFrame.index,index =  ProductDS_IN_Pandas_DataFrame['product_name'])
    product_index = mapping[Searched_product]
    #get similarity values with other movies
    #similarity_score is the list of index and similarity matrix
    similarity_score = list(enumerate(similarity_matrix[product_index]))
    # print(similarity_score)
    #sort in descending order the similarity score of movie inputted with all the other movies`
    similarity_score = sorted(similarity_score, key=lambda x: x[1], reverse=True)
    # Get the scores of the 10 most similar product. Ignore the first movie.
    similarity_score = similarity_score[1:10]
    #return movie names using the mapping series
    product_indices = [i[0] for i in similarity_score]
    # print(product_indices)
    print(ProductDS_IN_Pandas_DataFrame['product_name'].iloc[product_indices])
    print(type(ProductDS_IN_Pandas_DataFrame.iloc[product_indices].to_json(orient='index')))
    # print(Searched_product)
    # return ( ProductDS_IN_Pandas_DataFrame.iloc[product_indices])
    Return_RecommendedProducts=ProductDS_IN_Pandas_DataFrame.iloc[product_indices].to_json(orient='records')
    return (Return_RecommendedProducts)













