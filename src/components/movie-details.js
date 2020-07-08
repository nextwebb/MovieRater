import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

function MovieDetails(props){

    const [ higlighted, setHiglighted] = useState(-1)

    const movie = props.movie;
    return (
        <div>
            {
               movie ? (
                    <React.Fragment>
                        <h1>{movie.title}</h1>
                        <p>{movie.description}</p>
                        <FontAwesomeIcon icon={faStar} className={movie.avg_rating > 0? 'orange' : ''}/>
                        <FontAwesomeIcon icon={faStar} className={movie.avg_rating > 1? 'orange' : ''} />
                        <FontAwesomeIcon icon={faStar} className={movie.avg_rating > 2? 'orange' : ''} />
                        <FontAwesomeIcon icon={faStar} className={movie.avg_rating > 3? 'orange' : ''} />
                        <FontAwesomeIcon icon={faStar} className={movie.avg_rating > 4? 'orange' : ''}/> 
                        ({movie.no_of_ratings})
                        <div className="rate-container">
                            <h2>Rate it</h2>
                            {[...Array(5)].map((elem, index ) => {
                                return  <FontAwesomeIcon key={index} icon={faStar} className={higlighted > index - 1? 'purple' : ''}
                                    onMouseEnter={setHiglighted(index)}
                                    onMouseLeave={setHiglighted(-1)}
                                />
                            } )}
                        </div>
                    </React.Fragment>
                   
                ): null
            }
        </div>
                
    )
}
export default MovieDetails;