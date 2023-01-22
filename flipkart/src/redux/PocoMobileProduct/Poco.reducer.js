import {
  Poco_Loading,
  Poco_Error,
  GET_Poco,
  GET_Poco_By_Rating,
  GET_Poco_By_Price,
  
} from "./Poco.action.Types";

const iniitialState = {
  loading: true,
  error: false,
  mobiles: [],
};

export const PocoReducer = (state = iniitialState, { type, payload }) => {
  switch (type) {
    case Poco_Loading: {
      return {
        ...state,
        loading: true,
      };
    }

    case Poco_Error: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }

    case GET_Poco: {
      return {
        ...state,
        loading: false,
        mobiles: [...payload],
      };
    }
case GET_Poco_By_Rating:{
let data = state.mobiles.filter((el)=>(
  el.ratings===payload
))

return{
  ...state,mobiles:data
}
}

case GET_Poco_By_Price:{
  // let data = state.mobiles.filter((el)=>(
  //  el.price>=payload
  // ))
  // console.log(data)
  return{
    ...state,mobiles:state.mobiles.filter((el)=>(el.price>=payload))
  }
}




    default: {
      return state;
    }
  }
};
