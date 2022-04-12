import ActionTypes from "../ActionType/action-type";
const initialState=
{
    rating:[]
}

export const ratingReducer=(state=initialState,{type,payload})=>
{
    switch(type)
    {
        case ActionTypes.SET_RATING:
            return {...state,rating: payload};

        default:
            return state;
    }

}