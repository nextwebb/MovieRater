import React from 'react'
import './App.css';
import { useState, useEffect } from 'react';
import MovieList from './components/movie-list';
import MovieDetails from './components/movie-details';
import MovieForm from './components/movie-forms'
import {useCookies} from 'react-cookie'

function App() {
  //returns an array of all movies from the api
  const [movies, setMovies] = useState([]) // we expect an array
  const [selectedMovie, setSelectedMovie] = useState(null); // we expect an object
  const [editedMovie, setEditedMovie] = useState(null) // we expect an object
  const[token] = useCookies(['mr-token'])

  useEffect(()=> {
    fetch(' http://127.0.0.1:8000/api/movies/', {
      method:'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token ${token['mr-token']}`
      }
    }).then(response => response.json())
    .then(data => setMovies(data))
    .catch(error => console.log(error))
  }, [])

   // check if we have token
   useEffect(() => {
    console.log(token['mr-token']);
    if(!token['mr-token']) window.location.href = "/";
},[token])


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
    setEditedMovie({title:'', description:''})
    setSelectedMovie(null)
  }

  const movieCreated = movie => {
    // console.log("hello")
    const newMovies = [...movies, movie]; //array spread operator
    setMovies(newMovies);
  }

  const removeClicked = movie => {
    const newMovies = movies.filter(mov => mov.id !== movie.id);
    setMovies(newMovies);
  }

  return (
    <div className="App">

      <header className="App-header">
          <h1>MovieRater</h1>
       </header>

       <div className="layout">
          <div>
            <MovieList 
              Allmovies={movies}
              movieClicked={loadMovie} 
              editClicked={editClicked} 
              removeClicked={removeClicked}
            />
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
