import React from 'react';
import Tile from './Tile'

export default function Grid(props){

    let gridMax = 8, gridMin = 3, rows = 4, cols = props.size;
    let gridElement = [];
    let gridIsValid = props.size <= gridMax && props.size >= gridMin;

    //currently, rows is fixed to 4 to avoid the grid from appearing incomplete
    //need some alternative way to make the grid look complete
    for(let j =1; j<=rows;j++)
    {    
        for(let i =1; i<=cols; i++)
        {
            gridElement.push(<Tile/>)
        }
        gridElement.push(<br/>)//for demarcating rows
    }
    

    return(
        <>
            {
                gridIsValid?
                <div className='img-container'>
                    {gridElement}
                </div>
                :
                <h1 >Grid can be a minimum of {gridMin} and a max of {gridMax}</h1>
             
            }
        </>

    );
}