import { Image } from "../../elements";
import FullPrice from "../full-price/FullPrice";
import Title from "../title/Title";
import { List, ListItem, StyledLink } from "./styled";

export default function Catalog({ products }) {
  return (
    <>
      <Title>Каталог</Title>
      <List>
        {products &&
          products.length &&
          products.map((product) => (
            <ListItem key={product.code}>
              <StyledLink to={`/product/${product.code}`}>
                <Image src={product.images[0]} />
                <h2>{product.name}</h2>
                <span>
                  <FullPrice oldPrice={product.oldPrice} newPrice={product.price} />
                </span>
              </StyledLink>
            </ListItem>
          ))}
      </List>
    </>
  )
}