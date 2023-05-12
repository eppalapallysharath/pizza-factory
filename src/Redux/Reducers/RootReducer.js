import { combineReducers } from "redux";
import { productReducer } from "./ProductReducer";
import { userReducer } from "./UsersReducer";

export const rootReducer = combineReducers({
  productR: productReducer,
  userR: userReducer,
});
