import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import useGetData from "../../useGetData";
import FilmsService from "../service/FilmsService";
import PeoplesService from "../../peoples/service/PeoplesService";
import PeopleList from "../../peoples/components/PeopleList";

import {useParams} from "react-router-dom"
import FilmCrawl from "./FilmCrawl";
import Card from "../../peoples/components/Card";
import BCard from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

const filmsService = new FilmsService();
const peoplesService = new PeoplesService();

    const IndividualFilm = () => {
    const [filmId, setFilmId] = useState(null); 
    const [peopleId, setPeopleId]=useState([]);
    const params = useParams();
   
 // Pour les films
    const getFilmById = async () => {
        if (params.id){
            setFilmId ( await filmsService.getFilmById (params.id));
        }   
    };

// Pour les peoples
    const Peoples = useGetData (PeoplesService.getPeoplesById.bind(PeoplesService),peopleId.peoples);

    useEffect(()=> {
        getFilmById();
    }, [params]);

    useEffect(()=> {
        setPeopleId();
    }, [params]);
 

 if (filmId){
    return(
 <>
    <Col className="my-3">
       <Card>
         <FilmCrawl/>
         <BCard.Body>
          <PeopleList/>
        </BCard.Body>
      </Card>
    </Col>
</>
    );
};
};

export default IndividualFilm;