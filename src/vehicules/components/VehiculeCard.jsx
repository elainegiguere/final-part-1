import React from "react";
import Card from "../../components/Card";
import BCard from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import {Link} from "react-router-dom";
import getUrlId from "../../getUrlId";
const DEFAULT_IMAGE_POSITION = "top";

const VehiculeCard = ({ vehicules }) => {
  return (
    <Col className="my-3">
      <Link to={`/vehicules/${getUrlId(vehicules.id)}`}>
      <Card>
        <BCard.Header as="small">Vehicule name : {vehicules.name}</BCard.Header>
         <BCard.Body>
          <BCard.Text>{vehicules.model}</BCard.Text>
          <BCard.Text>{vehicules.manufacturer}</BCard.Text>
        </BCard.Body>
      </Card>
      </Link>
    </Col>
  );
};

export default VehiculeCard;