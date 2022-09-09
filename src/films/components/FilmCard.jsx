import React from "react";
import Card from "../../components/Card";
import BCard from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import getUrlId from "../../getUrlId";
import {Link} from "react-router-dom";

const DEFAULT_IMAGE_POSITION = "top";

const FilmCard = ({ films }) => {
  return (
    <Col className="my-3">
      <Link to={`/films/${getUrlId(films.url)}`}>
      <Card>

        <BCard.Header as="small">{films.title}</BCard.Header>
         <BCard.Body>
          <BCard.Title>{films.episode_id}</BCard.Title>
          <BCard.Title><p>date released: {films.release_date}</p></BCard.Title>
          <BCard.Title>directed by: {films.director}</BCard.Title>
        </BCard.Body>
      </Card>
      </Link>
    </Col>
  );
};

export default FilmCard;