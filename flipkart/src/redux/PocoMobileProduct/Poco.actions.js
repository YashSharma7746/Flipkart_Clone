import {
  Poco_Loading,
  Poco_Error,
  GET_Poco,
} from "./Poco.action.Types";

import { GetPocoProductApi } from "./Poco.api";

export const GetPoco = () => async (dispatch) => {
  dispatch({ type: Poco_Loading });
  let data = await GetPocoProductApi();
  dispatch({ type: GET_Poco, payload: data });
};
