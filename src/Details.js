import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Details.css";

class Details extends Component {
  render() {
    let { painting } = this.props;
    return (
      <div className='Details row justify-content-center mt-5'>
        <div className='col-11 col-lg-5'>
          <div className='Details-card card'>
            <img className='card-img-top' src={painting.src} alt={painting.name}/>
            <div className='card-body'>
              <h1 className='card-title'>{painting.name}</h1>
              <h4 className='card-subtitle text-muted'>Paint time: {painting.time} hour(s)</h4>
            </div>
            <ul className='list-group list-group-flush'>
              {painting.facts.map((fact, i) => (
                <h4 className='list-group-item' key={i}>
                  {fact}
                </h4>
              ))}
            </ul>
            <div className='card-body'>
              <Link to='/paintings' className='btn btn-dark'>
                Go Back
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Details;
