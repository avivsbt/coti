import { ICountryState } from "../models/countries";

export enum ActionType {
    GET_COUNTRIES = "get_countries",
    SET_COUNTRIES = "set_countries",
    SET_FILTER_COUNTRIES = "set_filter_countries",
    SET_CURRENT_COUNTRY = "set_current_country",
    RESET_CURRENT = "reset_current"
}

export interface IGetCountriesAction {
	type: ActionType.GET_COUNTRIES;
}

export interface ISetCountriesAction {
	type: ActionType.SET_COUNTRIES;
    countries: ICountryState[]
}

export interface ISetFilterCountriesAction {
	type: ActionType.SET_FILTER_COUNTRIES;
    filterCountries: ICountryState[]
}

export interface ISetCurrentCountryAction {
	type: ActionType.SET_CURRENT_COUNTRY;
    currentCountry: ICountryState
}

export interface IResetCurrentAction {
	type: ActionType.RESET_CURRENT;
}

export type getCountriesActionCreator = () => IGetCountriesAction;
export type setCountriesActionCreator = (countries: ICountryState[]) => ISetCountriesAction;
export type setFilterCountriesActionCreator = (filterCountries: ICountryState[]) => ISetFilterCountriesAction;
export type setCurrentCountryActionCreator = (currentCountry: ICountryState) => ISetCurrentCountryAction;
export type resetCurrentActionCreator = () => IResetCurrentAction;

export type ActionsCountries = getCountriesActionCreator 
| setCountriesActionCreator 
| setFilterCountriesActionCreator 
| setCurrentCountryActionCreator 
| resetCurrentActionCreator;
