import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./PaintList.css";

class PaintList extends Component {
  render() {
    return (
      <div className='PaintList'>
        <div className='row'>
          {this.props.paintings.map(p => (
            <div className='Painting col-lg-4 text-center' key={p.name}>
              <h3 className='mt-3'>
                <Link className='underline' to={`/paintings/${p.name}`}>
                  <div>{p.name}</div>
                  <div><img src={p.src} alt={p.name} /></div>
                </Link>
              </h3>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default PaintList;
