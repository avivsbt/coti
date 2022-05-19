import { takeLatest } from "redux-saga/effects";
import { handleGetCountries } from "./handlers/countries";
import { ActionType } from "../action-types/countries";

export function* watcherSaga() {
    yield takeLatest(ActionType.GET_COUNTRIES, handleGetCountries);
}
