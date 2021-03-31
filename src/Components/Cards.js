import React from "react";

function Cards({name, uses, preparation, warning}) {

  return (
    
    <div className="term">
      <dt>
        <span>
          {name}
        </span>
        </dt>
      <dd>{uses}</dd>
      <dd>{preparation}</dd>
      <dd>{warning}</dd>
    </div>
  );
}

export default Cards;