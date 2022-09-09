import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import StarshipsService from "../service/StarshipsService";
import StarshipList from "../components/StarshipList";

const starshipsService = new StarshipsService();

const Starships = () => {
  const [data, setData] = useState([]);

  const getStarships = async () => {
    const response = await starshipsService.getStarships();
    const starships = response.results;
    console.log('starships', starships);
    setData(
      starships);
  };

  useEffect(() => {
    getStarships();
  }, []);



  return <StarshipList starships={data} />;
};

export default Starships;
