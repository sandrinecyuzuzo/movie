import React from 'react';



export default function Card({ titel,price, vote, image}) {
    console.log(image)
    return(
        <div>
            <div className='w-24 h-24 text-white'>
                <img src={image} className=" w-24 h-24 "/>
                <p>{titel}</p>
                <p>{price}</p>
                <p>{vote}</p>
                <p>{vote}</p>
            </div>
        </div>
    )
}