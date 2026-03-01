import React from "react";

const Card = (props) => {
  return (
    <div className="card">
      <h1>{props.name}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere,
        voluptates!
      </p>
    </div>
  );
};

export default Card;
