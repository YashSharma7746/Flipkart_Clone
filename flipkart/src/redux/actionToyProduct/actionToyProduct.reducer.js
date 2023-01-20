import {
  ToyProduct_Loading,
  ToyProduct_Error,
  GET_Toy_Product,
} from "./actionToyProduct.action.Types";

const iniitialState = {
  loading: true,
  error: false,
  Toys: [],
};

export const ActionToysReducer = (state = iniitialState, { type, payload }) => {
  switch (type) {
    case ToyProduct_Loading: {
      return {
        ...state,
        loading: true,
      };
    }

    case ToyProduct_Error: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }

    case GET_Toy_Product: {
      return {
        ...state,
        loading: false,
        Toys: payload,
      };
    }

    default: {
      return state;
    }
  }
};
