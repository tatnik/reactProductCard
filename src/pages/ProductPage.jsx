import React, { useState } from "react"
import Title from "./../components/title/Title";
import Code from "./../components/code/Code";
import Description from "./../components/description/Description";
import Comments from "./../components/comments/Comments";
import Popularyty from "./../components/popularity/Popularity";
import { BuyButton, DeliveryValue, Header, PageCounter, PageFullPrice, ProductInfo, ProductInfoLine, ProductWrapper, StyledProductPage } from "./styled";
import Tabs from "../components/tabs/tabs";
import Order from './../components/order/order';
import PopUp from "../components/popup/popup";
import Accordion from "../components/accordion/accordion";
import Slider from "../components/slider/slider";





const ProductPage = ({ product, showInAccordion }) => {

  const [isShowAllDescription, setIsShowAllDescription] = useState(false);
  const MAX_TEXT_SIZE = 200;
  const COMMENTS_COUNT = 3;
  const [commentsShow, setCommentsShow] = useState(COMMENTS_COUNT);

  const tabs = [
    {
      title: "Описание",
      content: <Description text={
        isShowAllDescription
          ? product.description
          : product.description.slice(0, MAX_TEXT_SIZE)
      }
        onShowMore={() => setIsShowAllDescription(!isShowAllDescription)}
        isShowAllDescription={isShowAllDescription}
      />
    },
    {
      title: "Комментарии",
      content: <Comments
        comments={product.comments.slice(0, commentsShow)}
        onShowMore={() => setCommentsShow(commentsShow + COMMENTS_COUNT)}
        allCommentsLength={product.comments.length}
      />
    }
  ];
  const [count, setCount] = useState(1);
  const price = product.price * count;
  const oldPrice = product.oldPrice * count;
  const [isShowPopup, setIsShowPopup] = useState(false);


  return (
    <StyledProductPage>
      <Header>
        <Title>{product.name}</Title>
        <Code >{product.code}</Code>
      </Header>
      <ProductWrapper>
        <Slider images={product.images} />
        <ProductInfo>
          <ProductInfoLine>
            Цена:{" "}
            <PageFullPrice oldPrice={oldPrice} newPrice={price} />
          </ProductInfoLine>
          <ProductInfoLine>
            Количество: <PageCounter
              value={count}
              onChange={(value) => setCount(value)}
              minValue={1} />
          </ProductInfoLine>
          <ProductInfoLine><span> Доставка: </span>{" "}
            <DeliveryValue>{product.delivery}</DeliveryValue>
          </ProductInfoLine>
          <BuyButton
            size="large"
            onClick={() => setIsShowPopup(true)}
          >Купить</BuyButton>
          <Popularyty count={product.comments.length} />
        </ProductInfo>
      </ProductWrapper>
      {showInAccordion ? <Accordion items={tabs} /> : <Tabs tabs={tabs} />}
      <PopUp
        isShow={isShowPopup}
        onClose={() => setIsShowPopup(false)}
        title="Оформление"
      >
        <Order />
      </PopUp>
    </StyledProductPage>
  )
}


export default ProductPage;