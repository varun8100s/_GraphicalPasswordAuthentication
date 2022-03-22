import React from 'react';
import Grid from './Components/Grid';
import './App.css';
import { type } from '@testing-library/user-event/dist/type';

function App() {
  const [gridSize, setGridSize] = React.useState(3);
  // console.log("grid:"+gridSize)

  function handleChange(event) {
    // console.log(gridSize,Number.isInteger(gridSize))
    const {value} = event.target;
    setGridSize(value);
  }

  return (
    <div className="form-group mx-auto">

      <input
        type="text"
        placeholder="Grid-Size"
        onChange={handleChange}
        name="lastName"
        value={gridSize}
      />
      <Grid size={gridSize} />
    </div>
  );
}

export default App;
