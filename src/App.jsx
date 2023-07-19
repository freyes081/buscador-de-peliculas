import responseMovies from '../mocks/with-results.json';
import "./App.css";
function App() {
  const movies = responseMovies.Search;
  const hasMovies = movies?.length > 0;
  return (
    <div>
      <header>
        <h1>Buscador de Peliculas </h1>
        <form className="form">
          <input type="text" placeholder="Avangers Star Wars " />
          <button>Search</button>
        </form>
      </header>
      <main>
        {
          hasMovies
          ? (
            <ul>
              {movies.map((movie) => (
                <li key={movie.imdbID}>
                  <h3>{movie.Title}</h3>
                  <p>{movie.Year}</p>
                  <img src={movie.Poster} alt={movie.Title} />
                </li>
              ))}
            </ul>
          ): (
            <h2>No Results</h2>
          )
        }
       
     
      </main>
    </div>
  );
}

export default App;
