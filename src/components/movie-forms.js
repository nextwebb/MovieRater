import React, {useState} from 'react'
import { API } from '../api-service';

function MovieForm(props) {

    const [title, setTitle] = useState(props.movie.title);
    const [description, setDescription] = useState(props.movie.description);

    const updateClicked = () => {
       API.updateMovie(props.movie.id, {title, description })
       .then(resp => props.updatedMovie(resp))
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
                        <button onClick={updateClicked}>Update</button>
                    </div>
                ) : null 
                }
            </React.Fragment>
    )
}

export default MovieForm;