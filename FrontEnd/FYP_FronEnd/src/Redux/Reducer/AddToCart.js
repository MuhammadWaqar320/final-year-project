import ActionTypes from "../ActionType/action-type";
const initialState=
{
    addToCart:[]
}

export const AddToCartReducer=(state=initialState,{type,payload})=>
{
    switch(type)
    {
        case ActionTypes.SET_ADD_To_CART:
            return {...state,addToCart: payload};

        default:
            return state;
    }

}
