import styled from "styled-components";

const Title = styled.h1`
  font-size: ${(props) => (props.small ? 20 : 34)}px;
`;

export default Title;