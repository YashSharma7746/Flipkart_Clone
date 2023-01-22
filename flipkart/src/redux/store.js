import {
  legacy_createStore,
  combineReducers,
  compose,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";
import { ActionToysReducer } from "./actionToyProduct/actionToyProduct.reducer";
import { CartReducer } from "./Cart/cart.reducer";
import { ActionMensFashionReducer } from "./fashionMens/actionFashionMens.reducer";
import { ActionWomensFashionReducer } from "./fashionWomens/actionFashionWomens.reducer";
import { InductionReducer } from "./InductionProducts/Induction.reducer";
import { PocoReducer } from "./PocoMobileProduct/Poco.reducer";

const rootReducer = combineReducers({
  CartManager: CartReducer,
  actionToyManager:ActionToysReducer,
  inductionProductManager:InductionReducer,
  pocoManager:PocoReducer,
  MensFashion: ActionMensFashionReducer,
  WomensFashion: ActionWomensFashionReducer
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(thunk))
);
