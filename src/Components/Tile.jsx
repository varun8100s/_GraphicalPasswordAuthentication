import React from 'react';

export default function Tile(){


    let imgPath = "https://source.unsplash.com/100x100/?dog";
    return(
    
    <button className='img-button' onClick={()=>console.log('1')}>      
        <img src={imgPath} className='image'></img>
    </button>
    
        
    );  

}

