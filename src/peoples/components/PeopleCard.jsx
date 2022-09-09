import React from "react";
import Card from "./Card";
import BCard from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import {Link} from "react-router-dom";
import getUrlId from "../../getUrlId";
const DEFAULT_IMAGE_POSITION = "top";

const PeopleCard = ({ peoples }) => {
  return (
    <Col className="my-3">
      <Link to={`/people/${getUrlId(peoples.url)}`}>
      <Card>
        <BCard.Header as="small">Character name: {peoples.name}</BCard.Header>
         <BCard.Body>
          <BCard.Title><p>Birth: {peoples.birth_year}</p></BCard.Title>
        </BCard.Body>
      </Card>
      </Link>
    </Col>
  );
};

export default  PeopleCard;