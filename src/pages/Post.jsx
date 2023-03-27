import React from 'react'
import { useLocation } from 'react-router-dom';
import { products } from '../data'

function Post() {
    const location = useLocation()
    const path = location.pathname.splite('/')[2]
    const product = products.find(p=>p.id.toString() === path)
  return (
    <div className='post'>
        <img src={product.image} alt="" className='postImg'/>
        <h1 className='postTilte'>{product.title}</h1>
        <p className='postDesc'>{product.desc}</p>
        <p className='postLognDesc'>{product.longdesc}</p>

    </div>
  )
}

export default Post;