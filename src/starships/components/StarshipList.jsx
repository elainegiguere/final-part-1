import React from "react";
import StarshipCard from "./StarshipCard";
import Row from "react-bootstrap/Row";

const StarshipList = ({ starships }) => {
  return (
    <Row>
      {starships.map((starships) => (
        <StarshipCard key={starships.id} starships={starships} />
      ))}
    </Row>
  );
};

export default StarshipList;