import { configureStore, combineReducers, getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import countriesReducer from "./reducers/countriesSlice";
import { watcherSaga } from "./sagas/rootSaga";

const reducer = combineReducers({
    countries: countriesReducer
});
const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer,
    middleware: [...getDefaultMiddleware({ thunk: false }), sagaMiddleware],
    devTools: process.env.NODE_ENV !== 'production'
});

sagaMiddleware.run(watcherSaga);

export default store;

export type RootState = ReturnType<typeof reducer>