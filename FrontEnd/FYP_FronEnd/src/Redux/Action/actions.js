import { ActionTypes } from "../ActionType/action-type";

import axios from 'axios';
export const setCategory= (categories)=>
{
    return {
        type: ActionTypes.SET_CATEGORIES,
        payload: categories,

    }
}
export const setSubCategory=(subcategory)=>
{
    return {
        type : ActionTypes.SET_SUB_CATEGORIES,
        payload : subcategory,
    };
};
export const setCustomer=(cus)=>
{
    return {
        type : ActionTypes.SET_CUSTOMERS,
        payload : cus,
    };
};
export const setRating=(rate)=>
{
    return {
        type : ActionTypes.SET_RATING,
        payload : rate,
    };
};
export const setShipper=(ship)=>
{
    return {
        type : ActionTypes.SET_SHIPPER,
        payload : ship,
    };
};
export const setProduct=(pro)=>
{
    return {
        type : ActionTypes.SET_PRODUCTS,
        payload : pro,
    };
};
export const setAddToCart=(pro)=>
{
    console.warn(pro)
    return {
        type : ActionTypes.SET_ADD_To_CART,
        payload : pro,
    };
};

