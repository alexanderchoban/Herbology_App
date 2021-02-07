import React from "react";

function Cards(props) {
  return (
    <div className="term">
      <dt>
        <span>
          {props.name}
        </span>
      </dt>
      <span>{props.uses}</span>
      <dd>{props.preperation}</dd>
      <dd>{props.warning}</dd>
    </div>
  );
}

export default Cards;