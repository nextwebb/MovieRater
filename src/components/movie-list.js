import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import { API } from '../api-service'
import {useCookies} from 'react-cookie';

function MovieList(props){
    const [token] = useCookies(['mr-token']);

    const movieClicked = movie => evt => {
        // return a prop
        // and trigger this function
        props.movieClicked(movie)
    }

    const editClicked = movie => {
        props.editClicked(movie);
    }


    const removeClicked = movie => {
        API.deleteMovie(movie.id, token['mr-token'])
        .then(() => props.removeClicked(movie))
        .catch(error =>console.log(error));
    }

    return (
        props.Allmovies && props.Allmovies.map((movie) => {
            return (
                <div key={movie.id} className="movie-item">
                    <h1 onClick={movieClicked(movie)}>{movie.title}</h1>
                    <FontAwesomeIcon icon={faEdit} onClick={()=> editClicked(movie)}/>
                    <FontAwesomeIcon icon={faTrash}
                    onClick={()=> removeClicked(movie)}/>
                </div>
            )
        })
     )
    }
export default MovieList;