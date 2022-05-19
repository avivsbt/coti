import React from 'react'
import { useDispatch } from 'react-redux';
import { resetCurrent, setFilterCountries } from '../state/actions/countries';
import { ICountryState } from '../state/models/countries';

interface props {
    countries: ICountryState[];
}

const SideBar: React.FC<props> = ({ countries }) => {
    const dispatch = useDispatch();
    const alphabet: string[] = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "ALL"];

    const filterAlphabet = (letter: string): void => {
        dispatch(resetCurrent());
        if(letter === "ALL"){
            dispatch(setFilterCountries([]));
            return;
        }
        let filteredNames = countries.filter((word: ICountryState) => {
            return word.name.common.charAt(0).toLowerCase() === letter.toLowerCase();
        });
        dispatch(setFilterCountries(filteredNames));
    };

    return (
        <div className='cover-letters'>
            {alphabet.map((letter, i) => { return (<div onClick={() => filterAlphabet(letter)} className='letter' key={i}>{letter}</div>);})}
        </div>
    )
}

export default SideBar;