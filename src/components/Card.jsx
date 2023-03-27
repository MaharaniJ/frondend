import React from 'react'

function Card({product}) {
  return (
    <div className='card'>
        <span className="title">{postMessage.title}</span>
        <img src={product.image} alt="" className="img" />
        <p className="desc">{product.desc}</p>
        <button className="cardButton">Read More</button>         
         </div>
  )
}

export default Card