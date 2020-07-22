
export class API {
    static updateMovie(movie_id, body, token) {
       return new Promise((resolve, reject)=> {
        fetch(` http://127.0.0.1:8000/api/movies/${movie_id}/`,
        {
           method:'PUT',
           headers: {
             'Content-Type': 'application/json',
             'Authorization': `Token ${token} `
           },
           body: JSON.stringify(body)
         })
         .then((resp)=>{
            resolve( resp.json())
         })
       }) 
    }

    static createMovie(body, token) {
        return new Promise((resolve, reject)=> {
         fetch(` http://127.0.0.1:8000/api/movies/`,
         {
            method:'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Token ${token} `
            },
            body: JSON.stringify(body)
          })
          .then((resp)=>{
             resolve( resp.json())
          })
        }) 
     }
   
    static deleteMovie(mov_id, token) {
      // returning a promise
      return fetch(` http://127.0.0.1:8000/api/movies/${mov_id}/`,
         {
            method:'DELETE',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Token ${token} `
            }
          })
        
}

  static loginUser(body) {
    return new Promise((resolve, reject)=> {
    fetch(` http://127.0.0.1:8000/auth/`,
    {
        method:'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
      })
      .then((resp)=>{
        resolve( resp.json())
      })
    }) 
  }

  static registerUser(body) {
    return new Promise((resolve, reject)=> {
    fetch(` http://127.0.0.1:8000/api/users/`,
    {
        method:'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
      })
      .then((resp)=>{
        resolve( resp.json())
      })
    }) 
  }

}