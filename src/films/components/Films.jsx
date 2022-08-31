import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import FilmService from "../service/FilmsService";
import FilmList from "./FilmList";

const filmsService = new FilmService();

const Films = () => {
  const [data, setData] = useState([]);

  const getFilms = async () => {
    const response = await filmsService.getFilms();
    const films = response.results;
    console.log('films', films);
    setData(
      films);
  };

  useEffect(() => {
    getFilms();
  }, []);



  return <FilmList films={data} />;
};

export default Films;
