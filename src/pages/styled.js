import styled, { css } from "styled-components";
import { P } from "../elements";

import FullPrice from "../components/full-price/FullPrice";
import Button from "../components/button/button";
import Counter from "../components/counter/Counter";


const valueStyle = css`
  display: inline-flex;
  margin-left: ${(props) => props.theme.indent};
  color: ${(props) => props.theme.textColor};
`;

export const StyledProductPage = styled.article`
  margin: ${(props) => props.theme.indent};
  padding: ${(props) => props.theme.indent};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  font-family: ${(props) => props.theme.font};
  font-size: 16px;
  color:  ${(props) => props.theme.textColor};
`;

export const Header = styled.header`
  margin-bottom: ${(props) => props.theme.indent}x;
`;

export const ProductWrapper = styled.section`
  display: flex;
  margin-bottom: ${(props) => props.theme.indent};
`;

export const ProductInfo = styled.div`
  margin-left: ${(props) => props.theme.indent};
  border-left: 1px solid ${(props) => props.theme.textColorMuted};
  box-sizing: border-box;
  padding-left:  ${(props) => props.theme.indent};
  margin-bottom: ${(props) => props.theme.indent};
`;

export const ProductInfoLine = styled(P)`
  color: #666;
  font-size: 18px;
  margin-bottom: ${(props) => props.theme.indent};
`;

export const PageCounter = styled(Counter)`
  ${valueStyle}
`;

export const PageFullPrice = styled(FullPrice)`
  ${valueStyle}
`;

export const DeliveryValue = styled.span`
  ${valueStyle}
  color: green;
`;

export const BuyButton = styled(Button)`
  margin-top: 40px;
`;