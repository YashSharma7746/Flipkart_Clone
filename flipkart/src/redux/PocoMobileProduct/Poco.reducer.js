import {
  Poco_Loading,
  Poco_Error,
  GET_Poco,
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

    default: {
      return state;
    }
  }
};
