import React from 'react'
import './App.css';
import { useState, useEffect } from 'react';
import MovieList from './components/movie-list';
import MovieDetails from './components/movie-details';
import MovieForm from './components/movie-forms'

function App() {
  const [movies, setMovie] = useState([])
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [editedMovie, setEditedMovie] = useState(null)

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


  const loadMovie = movie => {
    setSelectedMovie(movie)
    setEditedMovie(null)
  }

  const editClicked = movie => {
    setEditedMovie(movie)
    setSelectedMovie(null)
  }

  return (
    <div className="App">

      <header className="App-header">
          <h1>MovieRater</h1>
       </header>

       <div className="layout">
          <div>
            <MovieList Allmovies={movies} movieClicked={loadMovie} editClicked={editClicked} />
          </div>
          <div>
            {/* update movie rating on cicked movies */}
            <MovieDetails movie={selectedMovie} updateMovie = {loadMovie}/>

            {/* edited option for Movie  */}
            <MovieForm movie={editedMovie}/>
          </div>
       </div>
     
    </div>
  );
}

export default App;
