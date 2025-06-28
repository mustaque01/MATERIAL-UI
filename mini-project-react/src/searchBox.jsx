import TextField from '@mui/material/TextField';

import Button from '@mui/material/Button';
import "./SearchBox.css";



export default function SearchBox({ searchTerm, setSearchTerm }) {
    let [city, setCity] = useState("");

    let handleSubmit = (e) => {
        e.preventDefault();
        setSearchTerm(city);
        setCity("");
    };




  return (
    <div className="search-box">
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