import React from 'react'
import { ICountryState } from '../state/models/countries';

interface props {
    country: ICountryState;
}

const CountryCard: React.FC<props> = ({ country }) => {
    return (
        <div className='cover-country'>
            
            <h3> {country.name.common}</h3>
            <div>Capital: { country.capital?.join() }</div>
            <div>Population: {country.population}</div>
            <div>Country: {country.cca2}</div>
            <div className='cover-country-img'><img src={country.flags.png} alt={country.name.common} /></div>
        </div>
    )
}

export default CountryCard;