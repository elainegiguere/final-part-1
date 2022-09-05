import React from 'react'
import Col from "react-bootstrap/Col";

const FilmCrawl = ({films}) => {
  return (
    <Col  className="">
        <h1>{films.title}</h1>
        {films.opening_crawl}
    </Col>
  )
}

export default FilmCrawl