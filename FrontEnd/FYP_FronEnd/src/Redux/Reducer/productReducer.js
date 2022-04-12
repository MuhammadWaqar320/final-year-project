import ActionTypes from "../ActionType/action-type";
const initialState=
{
    product:[]
}

export const productReducer=(state=initialState,{type,payload})=>
{
    switch(type)
    {
        case ActionTypes.SET_PRODUCTS:
            return {...state,product: payload};

        default:
            return state;
    }

}