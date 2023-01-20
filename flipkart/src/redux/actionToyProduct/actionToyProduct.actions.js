import {
  ToyProduct_Loading,
  ToyProduct_Error,
  GET_Toy_Product,
} from "./actionToyProduct.action.Types";
import { GetActionToyProductApi } from "./actionToyProduct.Api";

export const GetToys = () => async (dispatch) => {
  dispatch({ type: ToyProduct_Loading });
  let data = await GetActionToyProductApi();

  dispatch({ type: GET_Toy_Product, payload: data });
};
