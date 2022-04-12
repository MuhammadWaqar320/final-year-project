import ActionTypes from "../ActionType/action-type";
const initialState=
{
    customer:[]
}

export const customerReducer=(state=initialState,{type,payload})=>
{
    switch(type)
    {
        case ActionTypes.SET_CUSTOMERS:
            return {...state,customer: payload};

        default:
            return state;
    }

}