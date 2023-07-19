import { Movies } from '../components/Movies';
import responseMovies from '../mocks/with-results.json';
import "./App.css";
function App() {
  const movies = responseMovies.Search;
 
  return (
    <div className="page">
      <header>
        <h1>Buscador de Peliculas </h1>
        <form className="form">
          <input type="text" placeholder="Avangers Star Wars " />
          <button>Search</button>
        </form>
      </header>
      <main>
        <Movies movies={movies} />
       
     
      </main>
    </div>
  );
}

export default App;
