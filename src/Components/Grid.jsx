import React from 'react';
import Tile from './Tile';

export default function Grid(props){

    console.log(`props.size: ${props.size}`)
    // const [gridState, setGridState] = React.useState({
    //     "size"=3,

    // })

    let gridMax = 9, gridMin = 3;
    let gridElement = [];
    let gridIsValid = props.size <= gridMax && props.size >= gridMin;

    
    for(let i =1; i<=props.size*props.size; i++)
    {
        gridElement.push(<Tile/>)
    }
    // document.getElementsByClassName('img-container').style.gridTemplateColumns = `repeat(${props.size},1fr)`
    
    console.log(gridElement);

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