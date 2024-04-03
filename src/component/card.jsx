import React from 'react';



export default function Card({ titel, price, vote, image }) {
    console.log(image)
    return (
        <div>
            <div className='min-w-5 min-h-5  text-white'>
                <img src={image} className=" w-90 h-90 " />
                <p className='text-4xl'>{titel}</p>
                <p className='text-4xl'> price:{price}</p>
               
            </div>
        </div>
    )
}
