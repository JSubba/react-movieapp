import React from "react";

const MovieTitle = ({ title }) => {
  return (
    <div className="favorites-section">
      <h1 className="favorites-title">{title}</h1>
      <hr />
    </div>
  );
};

export default MovieTitle;
