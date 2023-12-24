import { useContext } from "react";
import Counter from "./Counter";
import Product from "./Product";
import {ProductContext} from '../Contexts/ProductContext'
import { useNavigate } from "react-router-dom";
const Products = () => {
  const {products,deleteProduct,submitForm,titleInput,priceInput,product,verif,message} = useContext(ProductContext);
  const navigate = useNavigate();
  let showList = true;
  return (

    <>    
    <h1>{product.title}</h1>
    <form onSubmit={submitForm}>
      <div className="form-groupe my-2">
        <label htmlFor="" className="from-label">Titlle</label>
        <input value={product.title} onChange={titleInput} type="text" className={`form-control ${verif.inputTitle}`}/>
        {message.title &&<p className="text-danger">{message.title}</p>}
      </div>

      <div className="form-groupe my-2">
        <label htmlFor="" className="from-label">Price</label>
        <input value={product.price} onChange={priceInput} type="text" className={`form-control ${verif.inputPrice}`} />
        {message.price &&<p className="text-danger">{message.price}</p>}
      </div>
      <button className="btn btn-info my-2">Save</button>
    </form>
    <Counter/>
    {showList && (
      <div>
        {products.map((product)=>(
        <div key={product.id}>
          <Product id={product.id} onDeleteProduct={deleteProduct}>
          <div className="card-header text-white">{product.label}</div>
          <div className="card-body">
          <p className="card-text">
            <div>
              <p className="text-primary">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente, laboriosam!</p>
            <button onClick={()=>{navigate(`/product/${product.id}`)}} type="button" className="btn btn-link text-primary-emphasis">Description</button>
            </div>
          <button className="btn btn-dark">{product.price}</button>
        </p>
      </div>
          </Product>
        </div>))}
      </div>) 
    }

    </>
  )
}

export default Products