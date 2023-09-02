import React from "react"
import Title from "./components/Title";
import Code from "./components/Code";
import Gallery from "./components/Gallery";
import Count from "./components/Count";
import Description from "./components/Description";
import FullPrice from "./components/FullPrice";



const ProductPage = ({product}) =>{
  return (
<section className="card">
  <Title>{product.name} </Title>
  <Code >{product.code} </Code>
  <div style={{display:"flex"}}>
    <Gallery src={product.src} alt={product.alt}/>
    <div>
      <p>
        Цена: <FullPrice oldPrice={product.oldPrice} newPrice={product.price}/>
      </p>
      <div>
        Количество: <Count/>
      </div>
      <p><span> Доставка: </span> 1 апреля </p>
      <button type="button">Купить</button>
    </div>
  </div>
  <Description text={product.description}/>
</section>
)}

export default ProductPage;