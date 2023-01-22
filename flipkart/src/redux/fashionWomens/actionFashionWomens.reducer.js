import {
  FashionWomens_Loading,
  FashionWomens_Error,
  GET_WOMENS_FASHION,
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

    default: {
      return state;
    }
  }
};
