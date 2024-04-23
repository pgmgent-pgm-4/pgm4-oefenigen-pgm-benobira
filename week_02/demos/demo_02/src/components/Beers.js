import React, {useEffect, useState} from 'react'
import Beer from './Beer';
import SelectCountry from './SelectCountry';
import styles from './beers.module.css';

export default function Beers() {
    const [country, setCountry] = useState('belgium');
    const [beers, setBeers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const countries = [
        {value: 'belgium', name: 'Belgium'},
        {value: 'denmark', name: 'Denmark'},
        {value: 'italy', name: 'Italy'},
    ];

    // If the country changes, fetch the beers again
    useEffect(() => {
        setIsLoading(true);
        setBeers([]);
        const url = 'https://beers-list.p.rapidapi.com/beers/' + country;
        const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
            'X-RapidAPI-Host': 'beers-list.p.rapidapi.com'
        }
        };
        fetch(url, options)
            .then(response => response.json())
            .then(data => {
                setBeers(data);
                setIsLoading(false);
            });
    }, [country]);
  return (
    <div>
        <SelectCountry
            countries={countries}
            setCountry={setCountry}
            country={country}
        />
        <h1 className={styles.error}>Beers from {country}</h1>
        {isLoading && <p>... Loading beers</p>}
        {!isLoading && (
            <>
                {beers.map((beer, index) => (
                    <Beer key={index} beer={beer} />
                ))}
            </>
        )}
    </div>
  )
}
