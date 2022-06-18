import React, { useState, useEffect } from "react";
import styles from "./Banner.module.css";
import axios from "../../axios";
import request from "../../request";

const Banner = () => {
  const [movie, setMovie] = useState();

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get(request.fetchNetflixOriginals);
      setMovie(
        req.data.results[
          Math.floor(Math.random() * req.data.results.length - 1)
        ]
      );
      return req;
    }
    fetchData();
  }, []);

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  return (
    <div>
      <header
        className={styles.banner}
        style={{
          backgroundSize: "cover",
          backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
          backgroundPosition: "center-center",
        }}
      >
        <div className={`${styles["banner-contents"]}`}>
          <h1 className={styles["banner-title"]}>
            {movie?.title || movie?.name || movie?.original_name}
          </h1>
          <div className={`${styles["banner-buttons"]}`}>
            <button className={`${styles["banner-button"]}`}>Play</button>
            <button className={`${styles["banner-button"]}`}>My List</button>
          </div>

          <h1 className={`${styles["banner-description"]}`}>
            {truncate(movie?.overview, 150)}
          </h1>
        </div>

        <div className={`${styles["banner-fade"]}`} />
      </header>
    </div>
  );
};

export default Banner;
