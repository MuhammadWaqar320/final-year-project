import ActionTypes from "../ActionType/action-type";
const initialState=
{
    categories:[]
}

export const categoryReducer=(state=initialState,{type,payload})=>
{
    switch(type)
    {
        case ActionTypes.SET_CATEGORIES:
            return {...state,categories: payload};

        default:
            return state;
    }

}
