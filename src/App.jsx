import { Movies } from "../components/Movies";
import { useMovies } from "../hooks/useMovies";
import { useSearch } from "../hooks/useSearch";
import "./App.css";

function App() {
  
  const { search, updateSearch, error } = useSearch(); 
  const { movies, getMovies } = useMovies({search});

  const handleSubmit = (e) => {
    e.preventDefault();
    getMovies();
  };
  const handleChange = (e) => {
    updateSearch(e.target.value);
  };
  
  return (
    <div className="page">
      <header>
        <h1>Buscador de Peliculas </h1>
        <form className="form" onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            value={search}
            placeholder="Avangers Star Wars "
          />
          <button type="submit">Search</button>
        </form>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </header>
      <main>
        <Movies movies={movies} />
      </main>
    </div>
  );
}

export default App;
