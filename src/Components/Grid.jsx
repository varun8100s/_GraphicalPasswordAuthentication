import React from "react";
import { useState } from "react";
import { useEffect } from "react";

import Tile from "./Tile";

export default function Grid(props) {
  //Array for maintaining meta data of file for hashing
  //Currently meta data is some unique key which is associated
  const [imgdata, setimgdata] = useState([]);
  const [maxrange, setmaxrange] = useState(0);
  let gridMax = 8,
    gridMin = 3,
    rows = 4,
    cols = props.size;

  let gridElement = [];
  let gridIsValid = props.size <= gridMax && props.size >= gridMin;

  //To handle image selection at laster stages
  const UnselectImageHandler = (data, elekey, i, j) => {
    alert("Unselect Image handler called");
  };

  const SelectedAnImage = (data) => {
    setmaxrange(maxrange + 1);
    setimgdata((prev) => [...prev, data]);
  };

  for (let j = 1; j <= rows; j++) {
    for (let i = 1; i <= cols; i++) {
      gridElement.push(<Tile ImgHandler={SelectedAnImage} />);
    }
    gridElement.push(<br />); //for demarcating rows
  }

  //currently, rows is fixed to 4 to avoid the grid from appearing incomplete
  //need some alternative way to make the grid look complete
  useEffect(() => {}, [maxrange]);
  return (
    <>
      {gridIsValid ? (
        <div className="img-container">{gridElement}</div>
      ) : (
        <h1>
          Grid can be a minimum of {gridMin} and a max of {gridMax}
        </h1>
      )}
    </>
  );
}
