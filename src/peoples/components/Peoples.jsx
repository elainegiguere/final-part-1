import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import PeoplesService from "../service/PeoplesService";
import PeopleList from "../components/PeopleList";

const peoplesService = new PeoplesService();

const Peoples = () => {
  const [data, setData] = useState([]);

  const getPeoples = async () => {
    const response = await peoplesService.getPeoples();
    const peoples = response.results;
    console.log('peoples', peoples);
    setData(
      peoples);
  };

  useEffect(() => {
    getPeoples();
  }, []);



  return <PeopleList peoples={data} />;
};

export default Peoples;
