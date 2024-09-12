import React from 'react';

function UserProfile({ name, age, location='Unknown' }) {
  return (
    <div className="card">
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Location: {location}</p>
    </div>
  );
}

export default UserProfile;
