import { ActionType, getCountriesActionCreator, resetCurrentActionCreator, setCountriesActionCreator, setCurrentCountryActionCreator, setFilterCountriesActionCreator } from "../action-types/countries";
import { ICountryState } from "../models/countries";

export const getCountries: getCountriesActionCreator = () => ({
    type: ActionType.GET_COUNTRIES
});

export const setCountries: setCountriesActionCreator = (countries: ICountryState[]) => ({
    type: ActionType.SET_COUNTRIES,
    countries
});

export const setFilterCountries: setFilterCountriesActionCreator = (filterCountries: ICountryState[]) => ({
    type: ActionType.SET_FILTER_COUNTRIES,
    filterCountries
});

export const setCurrentCountry: setCurrentCountryActionCreator = (currentCountry: ICountryState) => ({
    type: ActionType.SET_CURRENT_COUNTRY,
    currentCountry
});

export const resetCurrent: resetCurrentActionCreator = () => ({
    type: ActionType.RESET_CURRENT
});

