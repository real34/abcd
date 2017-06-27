import React from 'react';
import PropTypes from 'prop-types';
import './ProductItem.css';

const ProductItem = props => {
  return (
    <div className="product-item">
      <div className="product-item--title">
        {props.title}
      </div>
      <div className="product-item--sku">
        {props.sku}
      </div>
      {props.description && <div className="product-item--description">
        {props.description}
      </div>}
    </div>
  );
};

ProductItem.propTypes = {
  name: PropTypes.string.isRequired,
  sku: PropTypes.string.isRequired,
  description: PropTypes.string,
};

export default ProductItem;