import React, { Component }from 'react';
import ProfileImage from './ProfileImage';

export default class Profile extends Component {
  render () {
    return (
      <div>
        <ProfileImage/>

        <div className="dropdown">
          <button className="btn btn-secondary dropdown-toggle"
            type="button" id="dropdownMenuButton" data-toggle="dropdown"
            aria-haspopup="true" aria-expanded="false">
              John Doe
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a className="dropdown-item" >View Profile</a>
            <a className="dropdown-item" href="#">Sign Out</a>
          </div>
        </div>
      </div>
    )
  }
}

