import React from 'react'
import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [movies, setMovie] = useState([])

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
  return (
    <div className="App">
      <header className="App-header">
       <h1>MovieRater</h1>
       <div className="layout">
         <div>
           { movies.map(movie => {
             return <h2>{movie.title}</h2>
           })}
         </div>
         <div>Movie details</div>
         
         
       </div>
      </header>
    </div>
  );
}

export default App;
