import ActionTypes from "../ActionType/action-type";
const initialState=
{
    shipper:[]
}

export const shipperReducer=(state=initialState,{type,payload})=>
{
    switch(type)
    {
        case ActionTypes.SET_SHIPPER:
            return {...state,shipper: payload};

        default:
            return state;
    }

}