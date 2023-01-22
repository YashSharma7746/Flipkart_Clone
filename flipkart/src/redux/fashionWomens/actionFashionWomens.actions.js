import {
  FashionWomens_Loading,
  FashionWomens_Error,
  GET_WOMENS_FASHION,
} from "./fashionWomens.action.Types";
import { GetActionFashionWomensApi } from "./actionFashionWomens.Api";

export const GetWomensFashion = () => async (dispatch) => {
  dispatch({ type: FashionWomens_Loading});
  let data = await GetActionFashionWomensApi();

  dispatch({ type: GET_WOMENS_FASHION, payload: data });
};
