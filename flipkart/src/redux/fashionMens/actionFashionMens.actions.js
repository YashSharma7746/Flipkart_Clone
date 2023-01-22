import {
  FashionMens_Loading,
  FashionMens_Error,
  GET_MENS_FASHION,
} from "./fashionMens.action.Types";
import { GetActionFashionMensApi } from "./actionFashionMens.Api";

export const GetToys = () => async (dispatch) => {
  dispatch({ type: FashionMens_Loading });
  let data = await GetActionFashionMensApi();

  dispatch({ type: GET_MENS_FASHION, payload: data });
};
