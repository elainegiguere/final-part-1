import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import useGetData from "../../useGetData";
import FilmsService from "../../films/service/FilmsService";
import PeoplesService from "../../peoples/service/PeoplesService";
import StarshipsService from "../../starships/service/StarshipsService";
import StarshipList from "../../starships/components/StarshipList";
import VehiculesService from "../../vehicules/service/VehiculesService";
import VehiculeList from "../../vehicules/components/VehiculeList";
import FilmList from "../../films/components/FilmList";
import {useParams} from "react-router-dom"
import Card from "../../peoples/components/Card";
import BCard from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";


const filmsService = new FilmsService();
const peoplesService = new PeoplesService();
const starshipsService = new StarshipsService();
const vehiculesService = new VehiculesService();

    const IndividualPeople = () => {
    const [peopleId, setPeopleId] = useState(null); 
    const params = useParams();
   
 // Pour les peoples
    const getPeopleById = async () => {
        if (params.id){
            setPeopleId ( await peoplesService.getPeopleById (params.id));
        }   
    };

// Pour les films
    const films = useGetData (filmsService.getFilmById.bind(filmsService),peopleId?.episode_id);
    console.log(films); 

// Pour les starships
    const starships = useGetData (starshipsService.getStarshipById.bind(starshipsService),peopleId?.starships);
    console.log(starships); 

// Pour les vehicules
    const vehicules = useGetData (vehiculesService.getVehiculesById.bind(vehiculesService),peopleId?.vehicules);
    console.log(vehicules); 

    useEffect(()=> {
        getPeopleById();
    }, [params]);
 

 if (peopleId){
    return(
 <>
    <Col className="my-3">
       <Card>
         <BCard.Body>
          <FilmList films={films}/>
          <StarshipList starships={starships}/>
          <VehiculeList vehicules={vehicules}/>
        </BCard.Body>
      </Card>
    </Col>
</>
    );
};
};

export default IndividualPeople;
