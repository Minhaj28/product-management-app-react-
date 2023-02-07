import React, { useState } from "react";

import GetProductStyle from "./GetProductStyle.css";

const GetProduct = (props) => {
  const { products, setProducts } = props;
  const [productName, setProductName] = useState("");

  function isUnique() {
    const isFind = products.find((product) => product.name === productName);
    console.log(isFind);
    if (isFind) {
      alert("Product is not Unique");
      return false;
    } else return true;
  }

  function isValid(){
    if(productName === '')
      alert('Product Name is empty!!!');

    if(productName.length>100)
      alert('Product name is too long.')
    return Boolean(productName) && productName.length<=100;
  }

  function addProduct() {
    if (isUnique() && isValid())
      setProducts([...products, { name: productName, selected: false }]);
  }

  function getInput(event) {
    const productName = event.target.value;
    setProductName(productName);
  }

  return (
    <div className="get__product">
      <input
        id="input__product"
        type="text"
        placeholder="product name"
        onChange={getInput}
        required
      />
      <button onClick={addProduct} id="add">
        Add
      </button>
    </div>
  );
};

export default GetProduct;
