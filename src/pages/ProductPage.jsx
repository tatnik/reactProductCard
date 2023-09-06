import React from "react"
import Title from "./../components/title/Title";
import Code from "./../components/code/Code";

import Description from "./../components/description/Description";
import FullPrice from "./../components/full-price/FullPrice";
import Comments from "./../components/comments/Comments";
import Popularyty from "./../components/popularity/Popularity";
import { BuyButton, DeliveryValue, Header, PageCounter, ProductInfo, ProductInfoLine, ProductWrapper, StyledProductPage } from "./styled";
import { Image } from "../elements";
import Tabs from "../components/tabs/tabs";



const ProductPage = ({ product }) => {
  const tabs = [
    {
      title: "Описание",
      content: <Description text={product.description} />
    },
    {
      title: "Комментарии",
      content: <Comments comments={product.comments} />
    }
  ];

  return (
    <StyledProductPage>
      <Header>
        <Title>{product.name} </Title>
        <Code >{product.code} </Code>
      </Header>
      <ProductWrapper>
        <Image
          src={product.src}
          alt={product.alt}
          maxWidth="200"
        />
        <ProductInfo>
          <ProductInfoLine>
            Цена:{" "} <FullPrice oldPrice={product.oldPrice} newPrice={product.price} />
          </ProductInfoLine>
          <ProductInfoLine>
            Количество: <PageCounter />
          </ProductInfoLine>
          <ProductInfoLine><span> Доставка: </span>{" "}
            <DeliveryValue>{product.delivery}</DeliveryValue>
          </ProductInfoLine>
          <BuyButton size="large">Купить</BuyButton>
          <Popularyty count={product.comments.length} />
        </ProductInfo>
      </ProductWrapper>
      <Tabs tabs={tabs} tabIndex={1} />
    </StyledProductPage>
  )
}

export default ProductPage;