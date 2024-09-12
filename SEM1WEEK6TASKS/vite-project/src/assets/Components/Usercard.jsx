import React, { Component } from 'react';

class UserCard extends Component {
  render() {
    const { name, location } = this.props;

    return (
      <div className="user-card">
        <h2>{name}</h2>
        <p>Location: {location}</p>
      </div>
    );
  }
}

export default UserCard;
