import React from "react";
import { useState, useEffect } from "react";
import classes from "./Banner.module.css";
import instance from "./axios";
import requests from "./Requests";
import movieTrailer from "movie-trailer";
import ReactPlayer from "react-player";

function Banner() {
  const [movie, setmovie] = useState([]);

  // const [trailerUrl, settrailerUrl] = useState("");

  // const handleclick = async (movie) => {
  //   console.log(movie);
  //   const res = await movieTrailer(
  //     movie.original_title || movie.title || movie.name || ""
  //   );

  //   if (trailerUrl === res) {
  //     settrailerUrl("");
  //   } else {
  //     settrailerUrl(res);
  //   }
  // };

  useEffect(() => {
    async function fetchData() {
      const request = await instance.get(requests.fetchNetflixOriginals);
      setmovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }
  return (
    <header
      className={classes.banner}
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className={classes.banner_contents}>
        <h1 className={classes.banner_title}>
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className={classes.banner_buttons}>
          <button className={classes.banner_button}>Play</button>
          <button className={classes.banner_button}>My List</button>
        </div>
        <h1 className={classes.banner_description}>
          {truncate(`${movie?.description || movie?.overview}`, 150)}
        </h1>
      </div>
      <div className={classes.banner_fadebottom} />
    </header>
  );
}
export default Banner;
