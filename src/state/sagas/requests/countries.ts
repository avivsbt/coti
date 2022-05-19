import axios from "axios";

export function requestGetCountries() {
    return axios.request({
        method: "get",
        url: "https://restcountries.com/v3.1/all"
    });
}
