import { Link } from 'react-router-dom';
import './Item.css'

const Item = (props) =>{
    return (
        <div className='item'>
            <Link to={`/product/${props.id}`}><img onClick={window.scrollTo(0,0)} src={props.image}/></Link>
            <p>{props.name}</p>
            <p className='item-prices'></p>
            <div className='item-price-new'>
                Rs  {props.new_price}
            </div>
            <div className='item-price-old'>
                Rs  {props.old_price}
            </div>
        </div>
    )
}
export default Item;