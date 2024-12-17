import { legacy_createStore as createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
// import logger from "redux-logger";
import rootReducer, { RootState } from "./reducers/rootReducer";
import { rootSaga } from "./sagas/rootSaga";
import { configureStore, Tuple } from '@reduxjs/toolkit';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({ reducer: rootReducer, middleware: () => new Tuple(sagaMiddleware) })
sagaMiddleware.run(rootSaga);

export default store;
