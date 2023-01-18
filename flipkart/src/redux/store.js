import {
  legacy_createStore,
  combineReducers,
  compose,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";
import { ActionToysReducer } from "./actionToyProduct/actionToyProduct.reducer";
import { CartReducer } from "./Cart/cart.reducer";
import { InductionReducer } from "./InductionProducts/Induction.reducer";

const rootReducer = combineReducers({
  CartManager: CartReducer,
  actionToyManager:ActionToysReducer,
  inductionProductManager:InductionReducer
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(thunk))
);
