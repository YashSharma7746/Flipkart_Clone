import {
  Poco_Loading,
  Poco_Error,
  GET_Poco,
  GET_Poco_By_Rating,
  GET_Poco_By_Price,
  GET_Poco_By_Min_Max_Price,
} from "./Poco.action.Types";

import { GetPocoProductApi } from "./Poco.api";

export const GetPoco = () => async (dispatch) => {
  dispatch({ type: Poco_Loading });
  let data = await GetPocoProductApi();
  dispatch({ type: GET_Poco, payload: data });
};
export const GetPocoByRating = (data) => (dispatch) => {
  dispatch(GetPoco())
  dispatch({ type: GET_Poco_By_Rating,payload:data });
  
};
export const getPocoByPrice = (data) => (dispatch) => {
  dispatch(GetPoco())
  dispatch({ type: GET_Poco_By_Price,payload:data });
};
export const getPocoByMinMaxPrice=(data)=>(dispatch)=>{
  console.log(data)
   dispatch(GetPoco())
dispatch({type: GET_Poco_By_Min_Max_Price,payload:{...data}})
}
