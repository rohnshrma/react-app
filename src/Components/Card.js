import React from "react";

const Card = (props) => {
  console.log("props =>", props);

  return (
    <div className="card">
      <div className="img-bx">
        <img src={props.imgUrl} alt={props.name} />
      </div>
      <div className="card-body">
        <h2>{props.name}</h2>
        <h3>{props.description}</h3>
      </div>
    </div>
  );
};

export default Card;
