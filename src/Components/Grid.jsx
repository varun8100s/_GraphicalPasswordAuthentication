import React from 'react';
import Tile from './Tile';

export default function Grid(props){

    let gridElement = [];

    if(props.size>6 || props.size< 3){   
        gridElement = <h1>
            Grid can have a max of 6 tiles and a minimum of 3.
        </h1>
    }
    else 
    {
        for(let i =1; i<=props.size*props.size; i++)
        {
            gridElement.push(<Tile/>)
        }
    }
   

    return(
        <div className='img-container'>
            {gridElement}
        </div>
    );
}