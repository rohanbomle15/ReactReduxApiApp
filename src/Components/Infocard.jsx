import React from 'react'

function Infocard(props) {
  return (
    <div
      className="col-lg-4 mb-3 d-flex align-items-stretch h-100"
      key={props.brewery.id}>
      <div className="card w-100">
        <div class="card-header">
            <h5>{props.brewery.name}</h5>
        </div>
        <div className="card-body">
          <p className="card-title">{props.brewery.address_1}, {props.brewery.city}</p>
        </div>
      </div>
      </div>
  )
}

export default Infocard
