import {
  FashionMens_Loading,
  FashionMens_Error,
  GET_MENS_FASHION,
  GET_Mens_By_Min_Price,
  GET_Mens_By_Min_Max_Price
} from "./fashionMens.action.Types";
import { GetActionFashionMensApi } from "./actionFashionMens.Api";

export const GetMensProduct = () => async (dispatch) => {
  dispatch({ type: FashionMens_Loading });
  // dispatch({type:GET_MENS_FASHION})
  let data = await GetActionFashionMensApi();

  dispatch({ type: GET_MENS_FASHION, payload: data });
};
export const getMensByPrice = (data) => (dispatch) => {
  dispatch(GetMensProduct())
  dispatch({ type:  GET_Mens_By_Min_Price,payload:data });
};
export const getMensByMinMaxPrice=(data)=>(dispatch)=>{
  console.log(data)
   dispatch( GetMensProduct())
dispatch({type:GET_Mens_By_Min_Max_Price,payload:{...data}})
}