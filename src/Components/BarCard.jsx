import React from "react";

function Barcard(props) {
  return (
    <div
      className="col-lg-4 mb-3 d-flex align-items-stretch h-100"
      key={props.brewery.id}
    >
      <div className="card w-100 border-info">
        <div className="card-body">
          <p className="card-title">
            <h5>{props.brewery.name}</h5>
          </p>
          <p className="card-text">
            Address: {props.brewery.street}, {props.brewery.city}
          </p>
          <a href="#" class="card-link">Book a Table</a>
        </div>
      </div>
    </div>
  );
}

export default Barcard;
