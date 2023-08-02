import React, { useState, useEffect } from "react";
import MoviesItems from "./MoviesItems";

const MoviesStore = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=8bf2fd9ef6bf4517b0b3dfa7f05d7141')
      .then(response => response.json())
      .then(data => setMovies(data.articles)) // Assuming the 'articles' key contains the movie data in the API response
      .catch(err => console.log(err))
  }, []);

  return (
    <>
      <div className="MovieTitle">
        <h3 className="MTitle">Movie Zone</h3>
        <div className="container my-3">
          <div className="row">
            {Array.isArray(movies) && movies.map((movie) => (
              <div className="col-md-4" key={movie.url}>
                <MoviesItems
                  title={movie.title ? movie.title.slice(0, 45) : ''}
                  description={movie.description ? movie.description.slice(0, 90) : '....'}
                  urlToImage={movie.urlToImage}
                  urlWeb={movie.url}
                  publishedAt={movie.publishedAt}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MoviesStore;
