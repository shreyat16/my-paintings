import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    const paintLinks = this.props.paintings.map(painting => (
      <li className='nav-item' key={painting.name}>
        <NavLink exact to={`/paintings/${painting.name}`} className='nav-link'>
          {painting.name}
        </NavLink>
      </li>
    ));
    return (
      <nav className='navbar navbar-expand-lg navbar-light style="background-color: #e3f2fd;'>
        <Link className='navbar-brand' to='/'>
          Shreya Takes on Painting!
        </Link>

        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon' />
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <NavLink exact to='/' className='nav-link'>
                Home
              </NavLink>
            </li>
            {paintLinks}
          </ul>
        </div>
      </nav>
    );
  }
}
export default Navbar;
