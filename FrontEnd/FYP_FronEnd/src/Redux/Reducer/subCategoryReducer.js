import ActionTypes from "../ActionType/action-type";
const initialState=
{
    subcategories:[]
}

export const SubcategoryReducer=(state=initialState,{type,payload})=>
{
    switch(type)
    {
        case ActionTypes.SET_SUB_CATEGORIES:
            return {...state,subcategories: payload};

        default:
            return state;
    }

}