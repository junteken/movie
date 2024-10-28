import React, { useState, useEffect } from 'react';
import Movie from '../components/Movie'


function Home() {
  const url =
    "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year";
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const getMovies = async () => {
    const response = await (await fetch(url)).json();
    // const data = await response.json();
    setMovies(response.data.movies);
    setIsLoading(false);
  };

  useEffect(() => {
    // async function fetchMovies() {
    //   try {
    //     const response = await fetch(url);
    //     const data = await response.json();
    //     setMovies(data.data.movies);
    //     setIsLoading(false);
    //   } catch (error) {
    //     console.error("API 요청 중 오류 발생:", error);
    //     setIsLoading(false);
    //   }
    // }
    getMovies();
  }, []);
  return (
    <div className="App">
      {isLoading ? (
        <div>로딩 중...</div>
      ) : (
        <div className="movie-background">
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              title={movie.title}
              year={movie.year}
              summary={movie.summary}
              poster={movie.medium_cover_image}
              genres={movie.genres}
              id={movie.id}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
