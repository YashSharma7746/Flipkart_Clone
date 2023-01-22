import {
  FashionWomens_Loading,
  FashionWomens_Error,
  GET_WOMENS_FASHION,
  GET_WOMens_By_Min_Price,
  GET_WOMens_By_Min_Max_Price,
} from "./fashionWomens.action.Types";
import { GetActionFashionWomensApi } from "./actionFashionWomens.Api";

export const GetWomensFashion = () => async (dispatch) => {
  dispatch({ type: FashionWomens_Loading});
  let data = await GetActionFashionWomensApi();

  dispatch({ type: GET_WOMENS_FASHION, payload: data });
};
export const getWoMensByPrice = (data) => (dispatch) => {
  dispatch(GetWomensFashion())
  dispatch({ type:  GET_WOMens_By_Min_Price,payload:data });
};
export const getWoMensByMinMaxPrice=(data)=>(dispatch)=>{
  console.log(data)
   dispatch(  GetWomensFashion())
dispatch({type:GET_WOMens_By_Min_Max_Price,payload:{...data}})
}