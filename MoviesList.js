import {Movies} from "./Movies"
import { useHistory } from "react-router-dom";
import { useState, useEffect } from 'react';

export function MoviesList() {
  const history = useHistory();

  const [movies, SetMovies] = useState([]); 

  const getMovies = () =>{
    fetch("https://616bc2b216c3fa00171717bf.mockapi.io/movies", {method: "GET"})
      // for reading the data method is already default "GET" it is not necessary to specify
      .then((data)=> data.json())
      .then((mvs)=> SetMovies(mvs));
  }

  // FETCHING DATA FROM API:
  useEffect(getMovies, [])
    // calling the call backfunction only one time when the component is Mounted
    // FLOW IS LIKE:
      // app is mounted => useeffect called => fetch happens => setMovies is called => Movies gets updated => movies list component is mounted on the DOM
      
  const deleteMovie = (id) => {
    fetch(`https://616bc2b216c3fa00171717bf.mockapi.io/movies/${id}`, {method: "DELETE"})
    .then(()=>getMovies())  
      // to refres the movies list
      // reason for calling the function inside ".the" not as seperate function is because the "delete" method that we are doing on the mock api may take some time delay
      // to make sure that the 'getMovies' is only called after the delete is completed we are doing ".the" on it

  }
  
  return (
    <div className="wholeContent">
      {movies.map(({ name, poster, rating, summary, id }, index) => (        
        <Movies
          key={index}
          name={name}
          poster={poster}
          rating={rating}
          summary={summary}
          id={id}
          deleteButton={
            <button
              onClick={() => {
                deleteMovie(id)
              }              
            }
            >
              Delete
            </button>
          }
          // TO EDIT MOVIES
          editButton={
            <button onClick={() => history.push("/movies/edit/" + index)}>
              Edit
            </button>
          }
        />
      ))}
    </div>
  );
}


