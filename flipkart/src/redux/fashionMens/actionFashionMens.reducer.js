import {
  FashionMens_Loading,
  FashionMens_Error,
  GET_MENS_FASHION,
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

    default: {
      return state;
    }
  }
};
