import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import FilmService from "../service/FilmsService";
import FilmList from "./FilmList";


const filmService = new FilmService();
   const Component = () => {
    const film = useGetData
    (filmService.getFilmById.bind(filmService),data?.film);
return (
    
)
}