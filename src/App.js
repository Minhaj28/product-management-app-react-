import { useState } from 'react';
import './App.css';
import { GetProduct } from './component/getProduct';
import { ShowProduct } from './component/showPoduct';

function App() {
  const [products,setProducts] = useState([]);
  return (
    <div className="App">
     <h1>Product Management App</h1>
     <h3>Total Product: {products.length} </h3>
     <GetProduct products={products} setProducts={setProducts}/>
     <ShowProduct 
        products={products} 
        setProducts={setProducts}
     />


    </div>
  );
}

export default App;
