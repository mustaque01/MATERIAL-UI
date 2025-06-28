import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from "react";


export default function SearchBox({ setSearchTerm }) {
    let [city, setCity] = useState("");

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "a5c4657799eaaedb30c770a11c159535";
    async function fetchWeatherData(city) {
            let data = await (await fetch(`${API_URL}?q=${city}&appid=${API_KEY}`)).json();
        return data;
    };
    

    let handleSubmit = (e) => {
        e.preventDefault();
        if (typeof setSearchTerm === "function") {
            setSearchTerm(city);
        }
        setCity("");
    };


    return (
        <div className='Search-Box'>
            <h3>Search for the weather</h3>
            <form onSubmit={handleSubmit}>
          <TextField id="City" label="City Name" variant="outlined" required value={city} onChange={(e) => setCity(e.target.value)} />
          <br></br>
        <Button variant="contained" type="submit">
          Search
        </Button>
        </form>
      </div>
    );
}