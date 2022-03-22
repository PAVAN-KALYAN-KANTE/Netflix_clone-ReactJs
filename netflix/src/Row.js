import React from "react";
import classes from "./Row.module.css";
import { useState, useEffect } from "react";
import axios from "./axios";
import cx from "classnames";
import ReactPlayer from "react-player";
import movieTrailer from "movie-trailer";

function Row({ title, fetchUrl, isLargeRow = false }) {
  const [movies, setmovies] = useState([]);
  const [trailerUrl, settrailerUrl] = useState("");

  const base_url = "https://image.tmdb.org/t/p/original/";
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setmovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  //   function handleclick(movie) {
  //     console.log(movie);
  //     if (trailerUrl) {
  //       settrailerUrl("");
  //     } else {
  //       const mid = movie.id;
  //       movieTrailer(movie.name || "")
  //         .then((url) => {
  //           const urlParams = new URLSearchParams(new URL(url).search);
  //           console.log(urlParams);
  //           settrailerUrl(urlParams.get("v"));
  //           console.log(trailerUrl);
  //         })
  //         .catch((error) => console.error(error));
  //     }
  //   }

  const handleclick = async (movie) => {
    console.log(movie);
    const res = await movieTrailer(
      movie.original_title || movie.title || movie.name || ""
    );
    console.log(res);
    if (res === null || res === undefined) {
      const abc = `https://www.youtube.com/results?search_query=${movie.name}`;
      console.log(abc);
    }

    if (trailerUrl === res) {
      settrailerUrl("");
    } else {
      settrailerUrl(res);
    }
  };

  return (
    <div className={classes.row}>
      <h2>{title}</h2>
      <div className={classes.row_posters}>
        {movies.map(
          (movie) =>
            ((isLargeRow && movie.poster_path) ||
              (!isLargeRow && movie.backdrop_path)) && (
              <img
                className={cx(
                  classes.row_poster,
                  `${isLargeRow && classes.row_posterLarge}`
                )}
                key={movie.id}
                onClick={() => handleclick(movie)}
                src={`${base_url}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
              />
            )
        )}
      </div>
      {trailerUrl && <ReactPlayer url={trailerUrl} controls={true} />}
    </div>
  );
}
export default Row;
