import React from 'react'
import './App.css';
import { useState, useEffect } from 'react';
import MovieList from './components/movie-list';
import MovieDetails from './components/movie-details';

function App() {
  const [movies, setMovie] = useState([])
  const [selectedMovie, setSelectedMovie] = useState(null)

  useEffect(()=> {
    fetch(' http://127.0.0.1:8000/api/movies/', {
      method:'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Token a53382b391321ba72afc15cee5ab712239382438'
      }
    }).then(response => response.json())
    .then(data => setMovie(data))
    .catch(error => console.log(error))
  }, [])

  const movieClickedme = movie => {
    setSelectedMovie(movie)
  }
  return (
    <div className="App">

      <header className="App-header">
          <h1>MovieRater</h1>
       </header>

       <div className="layout">
          <div>
            <MovieList Allmovies={movies} movieClicked={movieClickedme} />
          </div>
          <div>
            <MovieDetails movie={selectedMovie}/>
          </div>
       </div>
     
    </div>
  );
}

export default App;
