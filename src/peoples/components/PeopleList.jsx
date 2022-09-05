import React from "react";
import PeopleCard from "./PeopleCard";
import Row from "react-bootstrap/Row";

const PeopleList = ({ peoples }) => {
  return (
    <Row>
      {peoples.map((peoples) => (
        <PeopleCard key={peoples.id} peoples={peoples} />
      ))}
    </Row>
  );
};

export default PeopleList;