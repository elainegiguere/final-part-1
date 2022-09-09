import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import useGetData from "../../useGetData";
import FilmsService from "../service/FilmsService";
import PeoplesService from "../../peoples/service/PeoplesService";
import PeopleList from "../../peoples/components/PeopleList";
import StarshipsService from "../../starships/service/StarshipsService";
import StarshipList from "../../starships/components/StarshipList";
import VehiculesService from "../../vehicules/service/VehiculesService";
import VehiculeList from "../../vehicules/components/VehiculeList";

import {useParams} from "react-router-dom"
import FilmCrawl from "./FilmCrawl";
import Card from "../../peoples/components/Card";
import BCard from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

const filmsService = new FilmsService();
const peoplesService = new PeoplesService();
const starshipsService = new StarshipsService();
const vehiculesService = new VehiculesService();

    const IndividualFilm = () => {
    const [filmId, setFilmId] = useState(null); 
    const params = useParams();
   
 // Pour les films
    const getFilmById = async () => {
        if (params.id){
            setFilmId ( await filmsService.getFilmById (params.id));
        }   
    };

// Pour les peoples
    const peoples = useGetData (peoplesService.getPeopleById.bind(peoplesService),filmId?.characters);
    console.log(peoples); 

// Pour les starships
    const starships = useGetData (starshipsService.getStarshipById.bind(starshipsService),filmId?.starships);
    console.log(starships); 

// Pour les vehicules
    const vehicules = useGetData (vehiculesService.getVehiculesById.bind(vehiculesService),filmId?.vehicules);
    console.log(vehicules); 

    useEffect(()=> {
        getFilmById();
    }, [params]);
 

 if (filmId){
    return(
 <>
    <Col className="my-3">
       <Card>
         <FilmCrawl films={filmId} />
         <BCard.Body>
          <PeopleList peoples={peoples}/>
          <StarshipList starships={starships}/>
          <VehiculeList vehicules={vehicules}/>
        </BCard.Body>
      </Card>
    </Col>
</>
    );
};
};

export default IndividualFilm;
