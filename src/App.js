import React from 'react'
import './App.css';
import { useState } from 'react';

function App() {
  const [movies, setMovie] = useState(['Movie 1', 'Movie 2'])
  return (
    <div className="App">
      <header className="App-header">
       <h1>MovieRater</h1>
       <div className="layout">
         <div>
           { movies.map(movie => {
             return <h2>{movie}</h2>
           })}
         </div>
         <div>Movie details</div>
         
         
       </div>
      </header>
    </div>
  );
}

export default App;
