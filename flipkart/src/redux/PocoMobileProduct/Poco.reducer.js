import {
  Poco_Loading,
  Poco_Error,
  GET_Poco,
  GET_Poco_By_Rating,
  GET_Poco_By_Price,
  GET_Poco_By_Min_Max_Price
} from "./Poco.action.Types";

const iniitialState = {
  loading: false,
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
  el.ratings>=payload
))

return{
  ...state,mobiles:data
}
}

case GET_Poco_By_Price:{
  let data = state.mobiles.filter((el)=>
   el.price>=payload
  )

  return{
    ...state,mobiles:data
  }
}

case GET_Poco_By_Min_Max_Price:{
  console.log(payload)
  let data = state.mobiles.filter((el)=>
  {
    if(el.price>=payload.min && el.price <=payload.max){
      return el;
    }
  }
 )

 return{
   ...state,mobiles:data
 }
  
}


    default: {
      return state;
    }
  }
};
