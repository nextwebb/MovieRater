import React from 'react'
import './App.css';
import { useState, useEffect } from 'react';
import MovieList from './components/movie-list';
import MovieDetails from './components/movie-details';
import MovieForm from './components/movie-forms'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilm, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import {useCookies} from 'react-cookie'
import {useFetch} from './hooks/useFetch'


function App() {
  //returns an array of all movies from the api
  const [movies, setMovies] = useState([]) // we expect an array
  const [selectedMovie, setSelectedMovie] = useState(null); // we expect an object
  const [editedMovie, setEditedMovie] = useState(null) // we expect an object
  const[token, setToken, deleteToken] = useCookies(['mr-token'])
  // data = movies
  const [data, loading, error] = useFetch();

  useEffect(()=> {
    
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

  const logoutUser = () => {
    deleteToken(['mr-token']);
  }

  return (
    <div className="App">

      <header className="App-header">
          <h1>
            <FontAwesomeIcon icon={faFilm}/>
            <span> MovieRater</span>
          </h1>
          <FontAwesomeIcon icon={faSignOutAlt} onClick= {logoutUser}/>
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
