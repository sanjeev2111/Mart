import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box-fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          WooCommerce is an open-source e-commerce plugin for WordPress. It is
          designed for small to large-sized online merchants using WordPress.
          Launched on September 27, 2011,[3] the plugin quickly became popular
          for its simplicity to install and customize and for the market
          position of the base product as freeware (even though many of its
          optional extensions are paid and proprietary). WooCommerce is
          developed and supported by Woo and includes contributions from a
          global community of developers
        </p>
        <p>
          WooCommerce was first developed by WordPress theme developer
          WooThemes,[5] who hired Mike Jolley and James Koster, developers at
          Jigowatt, to work on a fork of Jigoshop[6][7] that became
          WooCommerce.[8] In January 2020, it was estimated that WooCommerce is
          used by around 3.9 million websites.[9]
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
