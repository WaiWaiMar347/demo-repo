import React from 'react'

const ProductCard = ({title,price,image,rating}) => {
  return (
    <div className='border border-black p-5'>
       <p> <img  className="size-30" src={image}></img></p>
        <p> {title}</p>
        <p> {rating}</p>
        <p>${price}</p>
        
    </div>
  )
}

export default ProductCard