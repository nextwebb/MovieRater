import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

function MovieDetails(props){

    const [ higlighted, setHiglighted] = useState(-1)
    // we dont change props from the child
    // send it back to the parents , let it update its state
    const movie = props.movie;

    const higlightRate = high => evt => {
        setHiglighted(high);
    }

    const rateClicked = rate => evt => {
        fetch(` http://127.0.0.1:8000/api/movies/${movie.id}/rate_movie/`,
         {
            method:'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Token a53382b391321ba72afc15cee5ab712239382438'
            },
            body: JSON.stringify({stars: (rate + 1)})
          })
          .then(response => response.json())
          .then(() => getdetails())
          .catch(error => console.log(error))
        }

        const getdetails = () => {
            fetch(` http://127.0.0.1:8000/api/movies/${movie.id}/`, {
            method:'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token a53382b391321ba72afc15cee5ab712239382438'
            }
            })
            .then(response => response.json())
            .then(data =>props.updateMovie(data))
            .catch(error => console.log(error))
        }
    
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
                                // we return 5 star fonts
                                // but we remember index is zero based 
                                // so each index is 0 - 4
                                //  and it is always greater than (--index)
                                return  <FontAwesomeIcon key={index} icon={faStar} className={higlighted > index -1 ? 'purple' : ''}
                                    onMouseEnter={higlightRate(index)}
                                    onMouseLeave={higlightRate(-1)}
                                    onClick={rateClicked( index)}
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