import { createStore } from "react-redux";

import reducers from "./reducers/index";

export default function configureStore(initialState) {
  return createStore(reducers, initialState);
}
