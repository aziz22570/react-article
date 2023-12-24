import { createContext, useState } from "react";
import { v4 as uuid } from "uuid"


export const ProductContext = createContext();
// all product
export const ProductProvider = ({ children }) => {
  // const [title, setTitle] = useState("");
  // const [price, setPrice] = useState("");
  const [product, setProduct] = useState({title:"",price:""})
  const [message, setMessage] = useState({title: "",price:""})
  const [verif , setVerif] = useState({inputTitle:"",inputPrice:""})
  const [products, setProducts] = useState([
    {
      id: 1,
      label: "Iphone 14",
      price: 3000,
    },
    {
      id: 2,
      label: "Samsung",
      price: 2000,
    },
    {
      id: 3,
      label: "Oppo",
      price: 1000,
    },
  ]);
  // delectproduct
  const deleteProduct = (id) => {
    let newProducts = products.filter((product) => product.id != id);
    setProducts(() => newProducts);
  };
  // add title
  const titleInput = (e)=> {
    setProduct((prev)=>{return{...prev,title:e.target.value}})
    if(e.target.value === ""){
      setMessage((prev)=>{return{...prev,title:"Tittle is Requided !"}});setVerif((prev)=>{return{...prev,inputTitle:'is-invalid'}})
    } else if (e.target.value.trim().length < 3){
      setMessage((prev)=>{return{...prev,title:"Plezse tape more"}});setVerif((prev)=>{return{...prev,inputTitle:'is-invalid'}})
    }
    else{setMessage((prev)=>{return{...prev,title:""}});setVerif((prev)=>{return{...prev,inputTitle:'is-valid'}})}
    
  }

  // add price
  const priceInput = (e)=> {
    setProduct((prev)=>{return{...prev,price:e.target.value}})
    if(e.target.value === ""){
      setMessage((prev)=>{return{...prev,price:"Price is Requided !"}});setVerif((prev)=>{return{...prev,inputPrice:'is-invalid'}})
    } else if (isNaN(Number(e.target.value))){
      setMessage((prev)=>{return{...prev,price:"Plezse tape correct price"}});setVerif((prev)=>{return{...prev,inputPrice:'is-invalid'}})
    }
    else{setMessage((prev)=>{return{...prev,price:""}});setVerif((prev)=>{return{...prev,inputPrice:'is-valid'}})}

  }
  // add new product
  const submitForm = (e) => {
    e.preventDefault()
    if(verif.inputPrice === "is-valid" && verif.inputTitle === "is-valid" ){
    let myProduct = {
      id: uuid(),
      label: product.title,
      price:product.price
    }
    setProducts([myProduct,...products])
    setProduct({title:"",price:""})
    setVerif({inputTitle:"",inputPrice:""})
  }
  if(verif.inputTitle === ''){setMessage((prev)=>{return{...prev,title: "Tittle is Requided !"}});setVerif((prev)=>{return{...prev,inputTitle:'is-invalid'}})}
  if(verif.inputPrice === ''){setMessage((prev)=>{return {...prev,price: "Price is Requided !"}});setVerif((prev)=>{return{...prev,inputPrice:'is-invalid'}})}
  }

  return (
    <ProductContext.Provider value={{ product,products, deleteProduct,submitForm,titleInput,priceInput,message,verif}}>
      {children}
    </ProductContext.Provider>
  );
};
