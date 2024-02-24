import React, { useContext } from 'react'
import './CSS/ShopCatogery.css'
import { ShopContext } from '../Context/ShopContext';
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import Item from '../Components/Item/Item';

const ShopCatogery = (props) => {
const {all_product} = useContext(ShopContext);

  return (
    <div className='shop-catogery'>
<img className='shopcatogery-banner' src={props.banner}></img>
<div className='shopcatogery-indexSort'>
  <p>
    <span>Showing 1-12</span> out of 36 products
  </p>
  <div className='shopcatogery-sort'>
    Sort by <img src={dropdown_icon}></img>
  </div>
</div>
<div className='shopcatogery-products'>
  {all_product.map((item,i)=>{
if (props.category === item.category){
  return <Item key={i} id={item.id} name={item.name} image={item.image}
  new_price={item.new_price} old_price={item.old_price}/>
}else {
  return null;
}
  })}
</div>
<div className='shopcategory-loadmore'>
  Explore More
</div>
    </div>
  )
}

export default ShopCatogery