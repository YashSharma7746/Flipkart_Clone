import {
  Induction_Loading,
  Induction_Error,
  GET_Induction,
} from "./Induction.action.Types";

import { GetInductionProductApi } from "./Induction.Api";

export const GetToys = () => async (dispatch) => {
  dispatch({ type: Induction_Loading });
  let data = await GetInductionProductApi();

  dispatch({ type: GET_Induction, payload: data });
};
