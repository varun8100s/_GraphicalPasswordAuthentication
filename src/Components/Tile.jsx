import React from "react";

export default function Tile({ ImgHandler }) {
  let query = "dog"; // change this with incoming props
  let imgPath = "https://source.unsplash.com/100x100/?" + query;
  return (
    <img
      src={imgPath}
      className="image"
      onClick={() => {
        ImgHandler(Math.floor(Math.random() * 1000000));
      }}
    ></img>
  );
}
