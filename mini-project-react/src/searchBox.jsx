import TextField from '@mui/material/TextField';



export default function SearchBox({ searchTerm, setSearchTerm }) {
  return (
    <div className="search-box">
      <h3>Search for the weather</h3>
      <form>
        <TextField id="outlined-basic" label="search" variant="outlined" />
      </form>
    </div>
  );
}