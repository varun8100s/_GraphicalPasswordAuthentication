import React from 'react';

export default function Tile(){

    let query = "dog";// change this with incoming props
    let imgPath = "https://source.unsplash.com/100x100/?"+query;
    return(
    
        <img src={imgPath} className='image' onClick={console.log("clicked")}></img>
    
        
    );  

}

