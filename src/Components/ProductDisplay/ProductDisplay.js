import "./ProductDisplay.css";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import React, { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";

const ProductDisplay = (props) => {
  const { product } = props;

  const {addToCart} = useContext(ShopContext)

  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image}></img>
          <img src={product.image}></img>
          <img src={product.image}></img>
          <img src={product.image}></img>
        </div>
        <div className="productdisplay-img">
          <img className="productdisplay-main-img" src={product.image}></img>
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-star">
          <img src={star_icon}></img>
          <img src={star_icon}></img>
          <img src={star_icon}></img>
          <img src={star_icon}></img>
          <img src={star_dull_icon}></img>
          <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">
            ${product.old_price}
          </div>
          <div className="productdisplay-right-price-new">
            ${product.new_price}
          </div>
        </div>
        <div className="productdisplay-right-description">
          <p>
            Inkast Denim Co. offers authentic denimwear through a mix of
            classic, contemporary and stylish jeans, shirts, tees, jackets &
            lots more. The brand brings a range of utility twill shirts that
            keep functional & comfortable. Built for comfort, this casual shirt
            finds place in every man’s wardrobe. Wear this with a pair of denims
            or layer it up over a tee.
          </p>
        </div>
        <div className="productdisplay-right-size">
          <h1>Select Size</h1>
          <div className="productdisplay-right-sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
        <p className="productdisplay-right-category"><span>Category:</span>Women, T-shirt, Crop Top</p>
        <p className="productdisplay-right-category"><span>Tags:</span>Modern, Latest</p>
      </div>
    </div>
  );
};

export default ProductDisplay;
