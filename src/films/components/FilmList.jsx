import React from "react";
import FilmCard from "./FilmCard";
import Row from "react-bootstrap/Row";

const FilmList = ({ films }) => {
  return (
    <Row>
      {films.map((films) => (
        <FilmCard key={films.id} films={films} />
      ))}
    </Row>
  );
};

export default FilmList;