import {
  FashionMens_Loading,
  FashionMens_Error,
  GET_MENS_FASHION,
  GET_Mens_By_Min_Price,
  GET_Mens_By_Min_Max_Price
} from "./fashionMens.action.Types";

const iniitialState = {
  loading: true,
  error: false,
  mens: [],
};

export const ActionMensFashionReducer = (state = iniitialState, { type, payload }) => {
  switch (type) {
    case FashionMens_Loading: {
      return {
        ...state,
        loading: true,
      };
    }

    case FashionMens_Error: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }

    case GET_MENS_FASHION: {
      return {
        ...state,
        loading: false,
        mens: payload,
      };
    }

    case GET_Mens_By_Min_Price:{
      let data = state.mens.filter((el)=>
       el.price>=payload
      )
    
      return{
        ...state,mobiles:data
      }
    }
    
    case GET_Mens_By_Min_Max_Price:{
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
