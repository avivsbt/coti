export interface ICountriesState {
    countries: ICountryState[];
    filterCountries: ICountryState[];
    currentCountry: ICountryState | null;
    loading: boolean;
}

export interface ICountryState {
    capital: string[];
    population: number;
    flags: ICountryFlags;
    name: ICountryName;
    cca2: string;
}

export interface ICountryFlags {
    png: string;
    svg: string;
}

export interface ICountryName {
    common: string;
    official: string;
}