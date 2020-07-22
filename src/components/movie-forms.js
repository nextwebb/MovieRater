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

     // return true if empty for one or both
    //  return false if filled for on
    // conditional variable assignment
    //  isDisabled will be true if one of the conditions is true
    // const isDisable = true + false = true
    // const isDisable = false + true  = true
    // const isDisable = false + false  = false
    // const isDisable = true + true  = false
     const isDisabled = title.length === 0 || description.length === 0
   

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
                            //  setting the disabled attribute based on a state in ReactJs
                            // You can set disabled property through boolean value, like this
                             <button onClick={updateClicked} disabled={isDisabled}>Update</button> :
                             <button onClick={createClicked}disabled={isDisabled}>Create</button>
                         }
                        
                    </div>
                ) : null 
                }
            </React.Fragment>
    )
}

export default MovieForm;