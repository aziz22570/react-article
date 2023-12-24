import { useParams } from "react-router-dom"
import { ProductContext } from "../Contexts/ProductContext"
import { useContext } from "react"
const ShowProduct = () => {
  const {id} = useParams()
  const {products}= useContext(ProductContext)
  const product = products.find((product)=>product.id == id)
  return (product ? (
    <>
    <div className="card bg-light mb-3" >
      <div className="card-header text-white">{product.label}</div>
      <div className="card-body">
        <p className="card-text text-primary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi unde quisquam hic obcaecati saepe sed nostrum, accusamus atque eos voluptates quam ut aspernatur, tempore, quidem perferendis consequatur fuga. Sit, exercitationem? Quia, porro rerum. Modi, doloribus. Provident, qui laborum? Itaque suscipit, ad deserunt veritatis numquam voluptates labore quaerat consequatur voluptatibus repudiandae.</p>
        <button className="btn btn-dark">{product.price}</button>
    </div>
    </div>
    
    </> ): (<h1>404 Product Not Found</h1>)
    
  )
}

export default ShowProduct