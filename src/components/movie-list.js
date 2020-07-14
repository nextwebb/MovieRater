import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'

function MovieList(props){
  
    const movieClicked = movie => evt => {
        // return a prop
        // and trigger this function
        props.movieClicked(movie)
    }

    const editClicked = movie => {
        props.editClicked(movie);
    }

    return (
        props.Allmovies && props.Allmovies.map((movie) => {
            return (
                <div key={movie.id} className="movie-item">
                    <h1 onClick={movieClicked(movie)}>{movie.title}</h1>
                    <FontAwesomeIcon icon={faEdit} onClick={()=> editClicked(movie)}/>
                    <FontAwesomeIcon icon={faTrash}/>
                </div>
            )
        })
     )
    }
export default MovieList;