import React, {useState, useEffect} from 'react'
import { API } from '../api-service';
import {useCookies} from 'react-cookie';
function MovieForm(props) {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [token] = useCookies(['mr-token']);
        // this react hook will run whenever we change prop.movie
    useEffect(() => {
        setTitle(props.movie.title)
        setDescription(props.movie.description)
    }, [props.movie])
    
    const updateClicked = () => {
       API.updateMovie(props.movie.id, {title, description }, token['mr-token'])
       .then(resp => props.updatedMovie(resp))
       .catch(err => console.log(err))
    }
    const createClicked = () => {
        API.createMovie({title, description }, token['mr-token'])
        .then(resp => props.movieCreated(resp))
        .catch(err => console.log(err))
     }

    return (
            <React.Fragment>
                {   props.movie? (
                     <div>
                        <label htmlFor="title">Title</label><br/>
                        <input id="title" type="text" placeholder="title" value={title} 
                            onChange={ evt=> setTitle(evt.target.value)}
                            /><br/>
                        <label htmlFor="description">Description</label><br/>
                        <textarea id="description" type="text" placeholder="Description" value={description} 
                            onChange={ evt=> setDescription(evt.target.value)}
                        ></textarea><br/>
                         {/* the onclick property expects a reference to a function or an anonymous function,  for it to execute when the element is clicked.  */}
                          {
                             props.movie.id ? 
                             <button onClick={updateClicked}>Update</button> :
                             <button onClick={createClicked}>Create</button>
                         }
                        
                    </div>
                ) : null 
                }
            </React.Fragment>
    )
}

export default MovieForm;