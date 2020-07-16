import React from 'react'
import './App.css';
import { useState, useEffect } from 'react';
import MovieList from './components/movie-list';
import MovieDetails from './components/movie-details';
import MovieForm from './components/movie-forms'

function App() {
  //returns an array of all movies from the api
  const [movies, setMovies] = useState([])
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
    .then(data => setMovies(data))
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

  const updatedMovie = movie => {
      const newMovies = movies.map(mov => {
          if (mov.id === movie.id){
            console.log(movie)
            return movie; // if the condition is true mutate that particular index (child scope)
          }
        return mov; // if the condtion is false return initial movie (global scope)
      })
      // console.log(newMovies)
    setMovies(newMovies)

  }

  const newMovie = () => {
    setEditedMovie({})
    setSelectedMovie(null)
  }

  const movieCreated = movie => {
    const newMovies = [...movies, movie];
    setMovies(newMovies);
  }

  return (
    <div className="App">

      <header className="App-header">
          <h1>MovieRater</h1>
       </header>

       <div className="layout">
          <div>
            <MovieList Allmovies={movies} movieClicked={loadMovie} editClicked={editClicked} />
            <button onClick={newMovie}>New Movie</button>
          </div>
          <div>
            {/* update movie rating on cicked movies */}
            <MovieDetails movie={selectedMovie} updateMovie = {loadMovie}/>

            {/* edited option for Movie  */}
            { editedMovie ?  
            <MovieForm movie={editedMovie} updatedMovie={updatedMovie} movieCreated ={movieCreated}/> : null }
           
          </div>
       </div>
     
    </div>
  );
}

export default App;
