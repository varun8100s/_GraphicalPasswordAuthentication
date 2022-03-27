import React from 'react';

function Tile(){

    let query = "dog";
    let imgPath = "https://source.unsplash.com/100x100/?"+query;
    return(
            <img src={imgPath} className='image' onClick={()=>console.log('1')}/>
    );  

}

export default function Grid(props){

    console.log(`props.size: ${props.size}`)


    let gridMax = 8, gridMin = 3;
    let gridElement = [];
    let gridIsValid = props.size <= gridMax && props.size >= gridMin;

    for(let j =1; j<=4;j++)
    {    
        for(let i =1; i<=props.size; i++)
        {
            gridElement.push(<Tile/>)
        }
        gridElement.push(<br/>)
    }
    
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