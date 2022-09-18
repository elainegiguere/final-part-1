import { useEffect, useState } from "react";
import FilmsService from "../service/FilmsService";

const filmsService = new FilmsService();

const useFetchFilms = () => {
    const [data, setData] = useState([]);

    const getFilms = async ()=> {
        const data = await filmsService.getFilms();
        setData(data.films);
    }

    useEffect(()=> {
        getFilms();
    }, []);

    return data;
}

export default useFetchFilms;