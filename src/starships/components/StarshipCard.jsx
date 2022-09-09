import React from "react";
import Card from "../../components/Card";
import BCard from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import {Link} from "react-router-dom";
import getUrlId from "../../getUrlId";
const DEFAULT_IMAGE_POSITION = "top";

const StarshipCard = ({ starships }) => {
  return (
    <Col className="my-3">
      <Link to={`/starships/${getUrlId(starships.url)}`}>
      <Card>

        <BCard.Header as="small">Starship name : {starships.name}</BCard.Header>
         <BCard.Body>
          <BCard.Text>{starships.model}</BCard.Text>
          <BCard.Text>manufactured by:{starships.manufacturer}</BCard.Text>
        </BCard.Body>
      </Card>
      </Link>
    </Col>
  );
};

export default StarshipCard;