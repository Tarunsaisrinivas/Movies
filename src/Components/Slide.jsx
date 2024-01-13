import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import cards from "../data/cards";
import '../Scss/Card.scss'
function BasicExample() {
  return (
    <div className="movies" >
      <div className="text-light">
        <p>Latest Movies</p>
      </div>
      <div style={{ display: "flex",flexWrap:'wrap', gap: 30, margin: 10 }}>
        {cards.map((card) => (
          <Card
            key={card.id}
            style={{
              width: "15rem",
              height:'fit-content ',
              border: "1px solid black",
              backgroundColor: "#73C8F0",
              color: "black",


            }}
          >
            {/* Replace the placeholder image with the actual image source */}
            <Card.Img
              variant="top"
              style={{ maxWidth: "18rem   ",maxHeight:'16rem' }}
              src={card.image}
            />
            <Card.Body>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Card.Title>{card.name}</Card.Title>
                <span>{card.year}</span>
              </div>
              {/* <Card.Text>{card.description}</Card.Text> */}
              <Button variant="primary" href={card.link} target="_blank">
                Get Movie
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>

      {/* watched */}
      <div className="text-light">
        <p>Latest Movies</p>
      </div>
      <div style={{ display: "flex",flexWrap:'wrap', gap: 30, margin: 10 }}>
        {cards.map((card) => (
          <Card
            key={card.id}
            style={{
              width: "15rem",
              height:'fit-content ',
              border: "1px solid black",
              backgroundColor: "#73C8F0",
              color: "black",


            }}
          >
            {/* Replace the placeholder image with the actual image source */}
            <Card.Img
              variant="top"
              style={{ maxWidth: "18rem   ",maxHeight:'16rem' }}
              src={card.image}
            />
            <Card.Body>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Card.Title>{card.name}</Card.Title>
                <span>{card.year}</span>
              </div>
              {/* <Card.Text>{card.description}</Card.Text> */}
              <Button variant="primary" href={card.link} target="_blank">
                Get Movie
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default BasicExample;
