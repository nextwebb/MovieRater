const TOKEN = "a53382b391321ba72afc15cee5ab712239382438"
export class API {
    static updateMovie(movie_id, body) {
       return new Promise((resolve, reject)=> {
        fetch(` http://127.0.0.1:8000/api/movies/${movie_id}/`,
        {
           method:'PUT',
           headers: {
             'Content-Type': 'application/json',
             'Authorization': `Token ${TOKEN} `
           },
           body: JSON.stringify(body)
         })
         .then((resp)=>{
            resolve( resp.json())
         })
       }) 
    }

    static createMovie(body) {
        return new Promise((resolve, reject)=> {
         fetch(` http://127.0.0.1:8000/api/movies/`,
         {
            method:'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Token ${TOKEN} `
            },
            body: JSON.stringify(body)
          })
          .then((resp)=>{
             resolve( resp.json())
          })
        }) 
     }
   
    static deleteMovie(mov_id) {
      // returning a promise
      return fetch(` http://127.0.0.1:8000/api/movies/${mov_id}/`,
         {
            method:'DELETE',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Token ${TOKEN} `
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

}