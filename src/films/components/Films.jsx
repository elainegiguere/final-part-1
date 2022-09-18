import React from "react";
import FilmList from "../components/FilmList";
import useFetchFilms from "../hooks/useFetchFilms";



const Films = () => {
  const data = useFetchFilms();
  console.log (data);
  return <FilmList films={data}/>;

};

export default Films;
