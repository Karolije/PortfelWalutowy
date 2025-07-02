import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { portfolioReducer } from "./portfolioReducer";
import { ratesReducer } from "./ratesReducer";

const rootReducer = combineReducers({
  portfolio: portfolioReducer,
  rates: ratesReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
