import React from 'react';

function DateTime() {
  const date = new Date();
  const formattedDate = date.toLocaleString();

  return (
    <div>
      <h2>Current Date and Time:</h2>
      <p>{formattedDate}</p>
    </div>
  );
}

export default DateTime;
