import React from "react";

const AddFavorites = () => {
  return (
    <div className="add-favorite">
      <svg
        width="0.8em"
        height="0.8em"
        viewBox="0 0 16 16"
        className="bi bi-heart-fill"
        fill="#f77408"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
        />
      </svg>
      <span className="add-favorite-title">Add Favorites</span>
    </div>
  );
};

export default AddFavorites;
