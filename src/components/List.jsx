import React, { useEffect, useState } from "react";

export const List = ({ genres }) => {
  const [movies, setMovies] = useState([]);
  console.log(movies);
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "84d716def9mshfda12e4c205103ep172fcejsncd20c7a2ef26",
        "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
      },
    };
    const fetchMovies = async () => {
      await fetch(
        `https://moviesdatabase.p.rapidapi.com/titles?genre=${genre}&year=2020`,
        options
      )
        .then((response) => response.json())
        .then((response) => setMovies(response.results.splice(4, 4)))
        .catch((err) => console.error(err));
    };
    fetchMovies();
  }, []);
  return <></>;
};
