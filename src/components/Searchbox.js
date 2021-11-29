import React from "react";
 import "./Searchbox.style.css";

const Searchbox = props => {
  return (
    <div className="container">
        <div className="row">
          <div className="col-md-3">
            <input
              type="text"
              className="form-control"
              placeholder="City"
              name="city"
              autoComplete="off"
            />
          </div>
          <div className="col-md-3">
            <input
              type="text"
              className="form-control"
              placeholder="Country"
              name="country"
              autoComplete="off"
            />
          </div>
          <div className="col-md-3">
            <button className="button">Get Weather</button>
          </div>
        </div>
    </div>
  );
};


export default Searchbox;