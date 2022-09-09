import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import VehiculesService from "../service/VehiculesService";
import VehiculeList from "./VehiculeList";

const vehiculesService = new VehiculesService();

const Vehicules = () => {
  const [data, setData] = useState([]);

  const getVehicules = async () => {
    const response = await vehiculesService.getVehicules();
    const vehicules = response.results;
    console.log('vehicules', vehicules);
    setData(
      vehicules);
  };

  useEffect(() => {
    getVehicules();
  }, []);



  return <VehiculeList vehicules={data} />;
};

export default Vehicules;
