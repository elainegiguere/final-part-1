import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import useGetData from "../../useGetData";
import FilmsService from "../../films/service/FilmsService";
import FilmList from "../../films/components/FilmList";
import VehiculesService from "../../vehicules/service/VehiculesService";

import {useParams} from "react-router-dom"
import Card from "../../peoples/components/Card";
import BCard from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import VehiculeCard from "./VehiculeCard";

const vehiculesService = new VehiculesService();
const filmsService = new FilmsService();



    const IndividualVehicule = () => {
    const [vehiculeId, setVehiculeId] = useState(null); 
    const params = useParams();
   
 // Pour les vehicules
    const getVehiculeById = async () => {
        if (params.id){
            setVehiculeId ( await vehiculesService.getVehiculeById (params.id));
        }   
    };

// Pour les films
const films = useGetData (filmsService.getFilmById.bind(filmsService),vehiculeId?.episode_id);
console.log(films); 

    useEffect(()=> {
        getVehiculeById();
    }, [params]);
 

 if (vehiculeId){
    return(
 <>
    <Col className="my-3">
       <Card>
        <VehiculeCard/>
         <BCard.Body>    
          <FilmList films={films}/>
        </BCard.Body>
      </Card>
    </Col>
</>
    );
};
};

export default IndividualVehicule;
