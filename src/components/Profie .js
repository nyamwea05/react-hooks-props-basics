import React from "react";

function Profile(props) {
  const { name, age, occupation, bio } = props;

  return (
    <div>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Occupation: {occupation}</p>
      <p>Bio: {bio}</p>
    </div>
  );
}

