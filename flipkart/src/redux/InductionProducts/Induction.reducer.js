import {
  Induction_Loading,
  Induction_Error,
  GET_Induction,
} from "./Induction.action.Types";

const iniitialState = {
  loading: true,
  error: false,
  Toys: [],
};

export const InductionReducer = (state = iniitialState, { type, payload }) => {
  switch (type) {
    case Induction_Loading: {
      return {
        ...state,
        loading: true,
      };
    }

    case Induction_Error: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }

    case GET_Induction: {
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
