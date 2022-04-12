import { combineReducers } from "redux";
import { categoryReducer } from "./CategoryReducer";
import { SubcategoryReducer } from "./subCategoryReducer";
import { productReducer } from "./productReducer";
import {shipperReducer} from "./shipperReducer";
import { ratingReducer } from "./ratingReducer";
import { customerReducer } from "./customerReducer";
import { AddToCartReducer } from './AddToCart';
 const reducers= combineReducers({
allCategory:categoryReducer,
allSubCategory:SubcategoryReducer,
allProducts: productReducer,
allShipper : shipperReducer,
allRating : ratingReducer,
allCustomer : customerReducer,
allAddToCart: AddToCartReducer,
});

export default reducers