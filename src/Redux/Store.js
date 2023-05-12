import { legacy_createStore, applyMiddleware, compose } from "redux";
import { rootReducer } from "./Reducers/RootReducer";
import thunk from "redux-thunk";
// import logger from "redux-logger";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";

const persistConfig = { key: "persist-root", storage: storage };

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = legacy_createStore(
  persistedReducer,
  compose(
    compose(
      applyMiddleware(thunk),
      window.__REDUX_DEVTOOLS_EXTENSION__
        ? window.__REDUX_DEVTOOLS_EXTENSION__()
        : (a) => a
    )
  )
);

export const persistedStore = persistStore(store);
