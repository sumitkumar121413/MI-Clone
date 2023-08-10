import React from 'react'
import "../styles/HotItemsCards.css"

const HotItemCard = ({image,index,name,price}) => {
  return (
    <div className='HotItemsCard'>
       <img src={image} alt={`${index}product`} />
       <p>{name}</p>
        <span>{price}</span>
    </div>
  )
}

export default HotItemCard
