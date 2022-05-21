import { takeLatest } from "redux-saga/effects";
import { handleGetCountries } from "./handlers/countries";
import { getCountries } from "../reducers/countriesSlice";

export function* watcherSaga() {
    yield takeLatest(getCountries.type, handleGetCountries);
}
