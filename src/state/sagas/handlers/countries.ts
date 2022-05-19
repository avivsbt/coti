import { AxiosResponse } from "axios";
import { call, put } from "redux-saga/effects";
import { ICountryState } from "../../models/countries";
import { setCountries } from "../../actions/countries";
import { requestGetCountries } from "../requests/countries";

export function* handleGetCountries() {
    try {
        const response: AxiosResponse<ICountryState[]> = yield call(requestGetCountries);
        const { data } = response;
        yield data.sort((a:any, b:any) => a.name.common.localeCompare(b.name.common));
        yield put(setCountries(data));
    } catch (error) {
        console.log(error);
    }
}
