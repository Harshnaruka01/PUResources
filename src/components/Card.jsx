import React from 'react';  
import "../Card.css"
export default function Card(props) {
  return (
    <div className="card-container ">
      <div className="card git ">
        <div className="card-body ">
          <h4 style={{textAlign:"center"}}>{props.name}</h4>
          <hr />
          <h6>Previous question paper:</h6>
          <div className="links">
            <span className="fw-bold ">CIE-1</span>
            <a className="card-link text-white combined-effect-click-here hover-effect" href={props.cie}>Click here</a>
          </div>
          <div className="links">
            <span className="fw-bold">Mid sem</span>
            <a className="card-link text-white combined-effect-click-here hover-effect" href={props.mid}>Click here</a>
          </div>
          <div className="links">
            <span className="fw-bold">End sem</span>
            <a className="card-link text-white combined-effect-click-here hover-effect" href={props.end}>Click here</a>
          </div>
          <hr />
          <h6>Notes:</h6>
          <div className="links">
            <span className="fw-bold">Notes</span>
            <a className="card-link  text-white white combined-effect-click-here box" href={props.notes}>Click here</a>
          </div>
        </div>
      </div>
    </div>
  );
}
