import React from 'react';
import PropTypes from 'prop-types';
import './ProductList.css';
import ProductItem from './ProductItem';

const NoProductsMessage = () =>
  <div>
    No products found
  </div>

const H2 = ({children}) => <h2>{children}</h2>

const ProductList = ({title, products, titleComponent = H2}) => {
  return (
    <div className="product-list">
      <titleComponent className="product-list--title">{title}</titleComponent>
      {products.length > 0
        ? <div className="product-list--items">
          {products.map(product => <ProductItem key={product.sku} {...product} />)}
        </div>
        : <NoProductsMessage />}
    </div>
  );
};

ProductList.propTypes = {
  title: PropTypes.string.isRequired,
  products: PropTypes.arrayOf(PropTypes.shape(
    ProductItem.propTypes
  )).isRequired,
  titleComponent: PropTypes.element,
};

export default ProductList;