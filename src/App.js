import React from 'react';
import Grid from './Components/Grid';
import './App.css';
import { type } from '@testing-library/user-event/dist/type';

function App() {
  const [gridSize, setGridSize] = React.useState(4);
  // console.log("grid:"+gridSize)
  
  function handleChange(event) {
    console.log("gridmax"+Grid.gridMax)
    // console.log(gridSize,Number.isInteger(gridSize))
    const {value} = event.target;
    setGridSize(value);
  }

  return (
    <div >
      <input
        type="text"
        placeholder="Grid-Size"
        onChange={handleChange}
        value={gridSize}
        className="input"
      />  
        {/* change input to range slider later */}


    <Grid size={gridSize} />
    

    </div>
  );
}

export default App;
