import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from "react";


export default function SearchBox({ setSearchTerm }) {
    let [city, setCity] = useState("");

    const API_URL = "https://api.openweathermap.org/data/2.5/weather?";
    const API_KEY = "a5c4657799eaaedb30c770a11c159535";
    let getWeatherData = async (city) => {
      try {
        let response = await fetch(`${API_URL}q=${city}&appid=${API_KEY}`);
        let jsonResponse = await response.json();
        console.log(jsonResponse);
        let result = {
          temp: jsonResponse.main.temp,
          humidity: jsonResponse.main.humidity,
          pressure: jsonResponse.main.pressure,
          wind: jsonResponse.wind.speed,
          description: jsonResponse.weather[0].description,
          
        }
        if (jsonResponse.cod === 200) {
            console.log("Weather data fetched successfully");
        } else {
            console.error("Error fetching weather data:", jsonResponse.message);
        }
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    function handlechange(e) {
         setCity(e.target.value);
     }

    let handleSubmit = (e) => {
        e.preventDefault();
        if (typeof setSearchTerm === "function") {
            setSearchTerm(city);
        }
        setCity("");
        getWeatherData(city); 
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