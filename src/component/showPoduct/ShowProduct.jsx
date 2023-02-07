import React from "react";

import ShowProductStyle from "./ShowProductStyle.css";

const ShowProduct = ({ products, setProducts }) => {
  function deleteProduct(index) {
    alert("Are you sure you want to delete this product???");
    const newProducts = products.filter(
      (product, position) => position !== index
    );
    setProducts([...newProducts]);
  }

  function selectProduct(index) {
    const newProducts = [...products];
    if (newProducts[index].selected) {
      newProducts[index].selected = false;
    } else {
      newProducts[index].selected = true;
    }
    setProducts([...newProducts]);
  }

  return (
    <div className="show__product">
      {products.map((product, index) => (
        <div key={index} id="product">
          <input
            onClick={() => selectProduct(index)}
            className="check"
            type={"checkbox"}
            checked={product.selected}
          />
          <p id="product__name">
            {product.selected ? (
              <strike>{product.name}</strike>
            ) : (
              <span>{product.name}</span>
            )}
          </p>
          <button id="delete" onClick={() => deleteProduct(index)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default ShowProduct;
