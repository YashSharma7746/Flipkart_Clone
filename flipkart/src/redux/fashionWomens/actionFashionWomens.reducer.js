import {
  FashionWomens_Loading,
  FashionWomens_Error,
  GET_WOMENS_FASHION,
  GET_WOMens_By_Min_Max_Price,
  GET_WOMens_By_Min_Price,
} from "./fashionWomens.action.Types";

const iniitialState = {
  loading: true,
  error: false,
  womens: [],
};

export const ActionWomensFashionReducer = (state = iniitialState, { type, payload }) => {
  switch (type) {
    case FashionWomens_Loading: {
      return {
        ...state,
        loading: true,
      };
    }

    case FashionWomens_Error: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }

    case GET_WOMENS_FASHION: {
      return {
        ...state,
        loading: false,
        womens: payload,
      };
    }
    case GET_WOMens_By_Min_Price:{
      let data = state.mens.filter((el)=>
       el.price>=payload
      )
    
      return{
        ...state,mobiles:data
      }
    }
    
    case GET_WOMens_By_Min_Max_Price:{
      console.log(payload)
      let data = state.mobiles.filter((el)=>
      {
        if(el.price>=payload.min && el.price <=payload.max){
          return el;
        }
      }
     )

   
  }
  default: {
    return state;
  }
}
};
