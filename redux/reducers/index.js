import { combineReducers } from 'redux';

import CartReducer from "./CartReducer";

let reducer = combineReducers({
  CartReducer: CartReducer,
});

const rootReducer = (state, action) => {
  return reducer(state, action);
};

export default rootReducer;
