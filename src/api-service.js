
export class API {
    static updateMovie(movie_id, body, token) {
       return new Promise((resolve, reject)=> {
        fetch(` https://rate-movie-api.herokuapp.com/api/movies/${movie_id}/`,
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

    static getMovies(token) {
      return fetch(' https://rate-movie-api.herokuapp.com/api/movies/', {
        method:'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Token ${token['mr-token']}`
        }
      }).then(response => response.json())
    }

    static createMovie(body, token) {
        return new Promise((resolve, reject)=> {
         fetch(` https://rate-movie-api.herokuapp.com/api/movies/`,
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
      return fetch(` https://rate-movie-api.herokuapp.com/api/movies/${mov_id}/`,
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
    fetch(` https://rate-movie-api.herokuapp.com/auth/`,
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
    fetch(`https://rate-movie-api.herokuapp.com/api/users/`,
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