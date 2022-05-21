import { configureStore, combineReducers, getDefaultMiddleware } from "@reduxjs/toolkit";


//import { combineReducers, createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import countriesReducer from "./reducers/countries";
// import { composeWithDevTools } from 'redux-devtools-extension'
import { watcherSaga } from "./sagas/rootSaga";

const reducer = combineReducers({
    countries: countriesReducer
});

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer,
    middleware:[...getDefaultMiddleware({thunk: false}), sagaMiddleware],
    devTools: process.env.NODE_ENV !== 'production'
});
sagaMiddleware.run(watcherSaga);

// const middleware = [sagaMiddleware]; 
// const enhancers = [applyMiddleware(...middleware)]
// const composedEnhancers = composeWithDevTools(...enhancers)

// const store = createStore(reducers, {}, composedEnhancers);  
// sagaMiddleware.run(watcherSaga);

export default store;

export type RootState = ReturnType<typeof reducer>