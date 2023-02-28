import { useState } from 'react';
import './App.css';


function App() {
  const [id,setId] = useState(0);
  const [name,setName] = useState('');
  const [price,setPrice] = useState(0);
  const [products, setProducts] = useState([]);
  const [edit,setEdit] = useState(false);
  const [active,setActive] = useState(null);

  const addProduct = (e) => {
    e.preventDefault();
    const product = {
      id,
      name,
      price
    }

    if(edit){
      // update user
     Object.assign(products[active],product);
     setProducts([...products]);
     setEdit(false);
     setActive(null);
    } else {
      //add user
      setProducts([...products, product]);
    }
    setId(0);
    setName('');
    setPrice(0);
  }

  const editProduct = (index) => {
    const product = products[index];
    setId(product.id);
    setName(product.name);
    setPrice(product.price);
    setActive(index);
    setEdit(true);
  }

  const deleteProduct = (product) =>{

    if(window.confirm("are you sure you want to delete this product!!!!")){
      const newProducts = products.filter(item => item !== product);
  
      setProducts([...newProducts]);
    }
  }
  return (
    <div className="App">
      <h1>Product Management App </h1>
      <div className="Container">
        <div className="row justify-content-center">
          <div className='col-xs-12 col-sm-10 col-md-8 col-lg-5'>

          <form onSubmit={addProduct}>
            <div className="form-group">
              <label htmlFor="">Id</label>
              <input type="number" className="form-control" 
              value={id} onChange ={(e)=> setId(e.target.value)}/>
            </div>
            <div className="form-group">
              <label htmlFor="">Product Name</label>
              <input type="text" className="form-control" value={name} onChange ={(e)=> setName(e.target.value)}/>
            </div>
            <div className="form-group">
              <label htmlFor="">Price</label>
              <input type="number" className="form-control" value={price} onChange ={(e)=> setPrice(e.target.value)}/>
            </div>
            <br />
            <button className="btn btn-success addUpdate">{edit ? "Update" : "Add"}</button>
          </form>
          </div>
        </div>
      </div>
      <table className="table table-bordered mt-5">
        <thead>
          <tr>
            <th>Id</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {
            products.map((product,index) =>{
              return(
                <tr>
                  <td>{product.id}</td>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>
                    <button className="btn btn-info" onClick={() => editProduct(index)}>Edit</button>
                  </td>
                  <td>
                    <button className="btn btn-danger" onClick={() => deleteProduct(product)}>Delete</button>
                  </td>
                </tr>
              )
            }
            )
          }
        </tbody>
      </table>
    </div>
  );
}

export default App;
