import React from "react";
import PeopleList from "../components/PeopleList";
import useFetchPeoples from "../hooks/useFetchPeoples";



const Peoples = () => {
  const data = useFetchPeoples();
  console.log (data);
 return <PeopleList peoples={data} />;
};

export default Peoples;
