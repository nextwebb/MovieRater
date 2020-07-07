import React from 'react'

function MovieDetails(props){

    return (
        <div>
            {
                props.movie ? (
                    <div>
                        <h1>{props.movie.title}</h1>
                        <p>{props.movie.description}</p>
                    </div>
                ): null
            }
        </div>
                
    )
}
export default MovieDetails;