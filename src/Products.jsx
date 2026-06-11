import  { useState, useEffect } from "react"
import Card  from "./Card.jsx"

function Products() {
    const [products, setproducts] = useState([])

    //fetch the product data from the fakestore api

    useEffect(()=>{
       fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setproducts(data))
    },[])

  return (
    <>
    <div style = {{display:"flex", flexWrap:"wrap", gap:"20px", justifyContent:"space-around"}}>
        {
         products.map((p)=>{
            return <Card image={p.image} title={p.title} price={p.price} />
         })
        }

    </div>
       
    
    </>
  )
}

export default Products
