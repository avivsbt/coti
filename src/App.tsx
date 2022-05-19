import React, { useEffect } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './state/configureStore';
import { getCountries, setCurrentCountry } from './state/actions/countries';
import SideBar from './components/SideBar';
import Header from './components/Header';
import { ICountryState } from './state/models/countries';
import CountryCard from './components/CountryCard';
import ScrollToTop from './components/ScrollToTop';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(getCountries());
    }, 15000);
    return () => clearInterval(interval);
  }, []);

  const countries = useSelector((state: RootState) => state.countries.countries);
  const filterCountries = useSelector((state: RootState) => state.countries.filterCountries);
  const currentCountry = useSelector((state: RootState) => state.countries.currentCountry);
  const loading = useSelector((state: RootState) => state.countries.loading);

  const renderCountries = (countries: ICountryState[]) => {
    const items = countries.map((country: ICountryState, i: number) => {
      return (<li onClick={() => { dispatch(setCurrentCountry(country)); goToTop(); }} className='country' key={i}>{country.name.common}</li>);
    });
    return items;
  }

  const goToTop = (): void => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="container">
      <Header />
      <div className='content'>
        {loading && (<div>loading...</div>)}
        {countries ? <ul className='countries-card'>{filterCountries.length > 0 ? renderCountries(filterCountries) : renderCountries(countries)}</ul> : null}
        <div className='cover-country-card'>{currentCountry ? <CountryCard country={currentCountry} /> : null}</div>
      </div>
      <div className='sidebar'>
        {countries.length > 0 && (<SideBar countries={countries} />)}
      </div>
      <ScrollToTop />
    </div>
  );
}

export default App;
