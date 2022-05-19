import { ActionType } from "../action-types/countries"
import { ICountriesState } from "../models/countries";

const initialState: ICountriesState = {
    countries: [],
    filterCountries: [],
    currentCountry: null
};

const reducer = (state = initialState, action: any) => {
    switch (action.type) {

        case ActionType.SET_COUNTRIES:

            if (state.countries.length > 0) return state;
            const { countries } = action;
            return { ...state, countries };

        case ActionType.SET_FILTER_COUNTRIES:

            const { filterCountries } = action;
            return { ...state, filterCountries };

        case ActionType.SET_CURRENT_COUNTRY:

            const { currentCountry } = action;
            return { ...state, currentCountry };

        case ActionType.RESET_CURRENT:
            state.currentCountry = null;
            return state;
            
        default:
            return state
    }
}

export default reducer
