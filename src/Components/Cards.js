import React from "react";

function Cards({name, uses, preperation, warning}) {
  return (
    <div className="term">
      <dt>
        <span>
          {name}
        </span>
      </dt>
      <span>{uses}</span>
      <dd>{preperation}</dd>
      <dd>{warning}</dd>
    </div>
  );
}

export default Cards;