import React from "react";

function Box({ imageUrl, title }) {
    return (
      <div className="bg-white p-4 shadow-lg rounded-md w-64 h-64 m-4">
        <img src={imageUrl} alt="Gambar" className="w-full h-44 mx-auto mb-4 border" />
        <h2 className="text-xl font-bold text-center">{title}</h2>
      </div>
    );
  }
export default Box