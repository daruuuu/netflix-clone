import React, { useState, useEffect } from "react";
import styles from "./Row.module.css";
import axios from "../../axios";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const Row = (props) => {
  const [movies, setMovies] = useState([]);

  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(props.fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [props.fetchUrl]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const trailerHandler = (movie) => {
    if (movie.video) {
      setTrailerUrl(movie.video.youtubeId);
    } else {
      movieTrailer(movie.title || movie.name || movie.original_name)
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className={styles.row}>
      <h2>{props.title}</h2>
      <div className={styles.posters}>
        {movies.map((movie) => (
          <img
            key={movie.id}
            onClick={() => trailerHandler(movie)}
            className={`${styles.poster} && ${
              props.isLargeRow && styles.posterLarge
            }`}
            src={`https://image.tmdb.org/t/p/w500${
              props.isLargeRow ? movie.poster_path : movie?.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
};

export default Row;
