import React from 'react'
import "../styles/StarProducts.css"

const StarProducts = ({starProducts}) => {
  return (
    <div className='starProducts'>
              <div><a href={starProducts[0].url}> <img src={starProducts[0].image} alt="1st Product" /></a></div>
            
              <div>
              <a href={starProducts[1].url}> <img src={starProducts[1].image} alt="1st Product" /></a>
              <a href={starProducts[3].url}> <img src={starProducts[3].image} alt="1st Product" /></a> 
              </div> 
    </div>
  )
}

export default StarProducts
