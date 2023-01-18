import {
  CART_LOADING,
  CART_ERROR,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  GET_CART,
} from "./cart.actionTypes";
import { AddToCartApi, DelCartItemApi, GetCartDataApi } from "./cart.api";

export const addToCart = (el) => async (dispatch) => {
  dispatch({ type: CART_LOADING });
  let data = await AddToCartApi(el);
  dispatch({ type: ADD_TO_CART, payload: el });
};

export const removeToCart = (id) => async (dispatch) => {
  let data = await DelCartItemApi(id);
  dispatch({ type: REMOVE_FROM_CART, payload: id });
};

export const getCartItem = () => async (dispatch) => {
  dispatch({ type: CART_LOADING });
  let data = await GetCartDataApi();
  dispatch({ type: GET_CART, payload: data });
};
