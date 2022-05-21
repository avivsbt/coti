import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ICountriesState, ICountryState } from '../models/countries';

const initialState: ICountriesState = {
    countries: [],
    filterCountries: [],
    currentCountry: null,
    loading: true
};

const countriesSlice = createSlice({
    name: 'countries',
    initialState: initialState,
    reducers: {
        getCountries() { },
        setCountries(state: ICountriesState, action: PayloadAction<ICountryState[]>) {
            if (state.countries.length > 0) return state;
            const countries = action.payload;
            const loading = false;
            return { ...state, countries, loading };
        },
        setFilterCountries(state: ICountriesState, action: PayloadAction<ICountryState[]>) {
            const filterCountries = action.payload;
            return { ...state, filterCountries }
        },
        setCurrentCountry(state: ICountriesState, action: PayloadAction<ICountryState | null>) {
            const currentCountry = action.payload;
            return { ...state, currentCountry }
        }
    }
});

export const { getCountries, setCountries, setFilterCountries, setCurrentCountry } = countriesSlice.actions;

export default countriesSlice.reducer