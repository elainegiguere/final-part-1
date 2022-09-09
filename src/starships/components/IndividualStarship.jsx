import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import useGetData from "../../useGetData";
import FilmsService from "../../films/service/FilmsService";
import FilmList from "../../films/components/FilmList";
import PeoplesService from "../../peoples/service/PeoplesService";

import StarshipsService from "../../starships/service/StarshipsService";
import VehiculesService from "../../vehicules/service/VehiculesService";


import {useParams} from "react-router-dom"
import Card from "../../peoples/components/Card";
import BCard from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

const starshipsService = new StarshipsService();
const filmsService = new FilmsService();
const peoplesService = new PeoplesService();
const vehiculesService = new VehiculesService();

    const IndividualStarship = () => {
    const [starshipId, setStarshipId] = useState(null); 
    const params = useParams();
   
 // Pour les starships
    const getStarshipById = async () => {
        if (params.id){
            setStarshipId ( await starshipsService.getStarshipById (params.id));
        }   
    };

// Pour les films
    const films = useGetData (filmsService.getFilmById.bind(filmsService),starshipId?.episode_id);
    console.log(films); 



    useEffect(()=> {
        getStarshipById();
    }, [params]);
 

 if (starshipId){
    return(
 <>
    <Col className="my-3">
       <Card>
         <BCard.Body>
          <FilmList films={films}/>
        </BCard.Body>
      </Card>
    </Col>
</>
    );
};
};

export default IndividualStarship;
