import React from 'react'
import Card from '../components/Card'

import {products} from '../data'
function Home() {
   
  return (
    <div className='home'>
        
         {products.map((product)=>(
            <Card key={product.id} product={product} />
        )
        
        
        )} 
    </div>
  )
}

export default Home