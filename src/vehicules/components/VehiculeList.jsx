import React from "react";
import VehiculeCard from "./VehiculeCard";
import Row from "react-bootstrap/Row";

const VehiculeList = ({ vehicules }) => {
  return (
    <Row>
      {vehicules.map((vehicules) => (
        <VehiculeCard key={vehicules.id} vehicules={vehicules} />
      ))}
    </Row>
  );
};

export default VehiculeList;