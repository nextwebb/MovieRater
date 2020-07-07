import React from 'react'

function MovieList(props){
  
    const movieClicked = movie => evt => {
        // return a prop
        // and trigger this function
        props.movieClicked(movie)
    }

    return (
        props.Allmovies && props.Allmovies.map((movie) => {
            return (
                <div key={movie.id}>
                    <h1 onClick={movieClicked(movie)}>{movie.title}</h1>
                </div>
            )
        })
     )
    }
export default MovieList;