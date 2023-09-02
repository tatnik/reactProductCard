import React from "react"
import Title from "./components/Title";
import Code from "./components/Code";
import Gallery from "./components/Gallery";
import OldPrice from "./components/OldPrice";
import NewPrice from "./components/NewPrice";
import Count from "./components/Count";
import Description from "./components/Description";



const ProductPage = ({product}) =>{
  return (
<section className="card">
  <Title />
  <Code />
  <div style={{display:"flex"}}>
    <Gallery/>
    <div>
      <p>
        Цена: <OldPrice/> <NewPrice/>
      </p>
      <div>
        Количество: <Count/>
      </div>
      <p><span> Доставка: </span> 1 апреля </p>
      <button type="button">Купить</button>
    </div>
  </div>
  <Description/>
</section>
)}

export default ProductPage;