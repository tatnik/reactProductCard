import { useEffect } from "react";
import { Close, Header, Wrapper } from "./styled";


export default function PopUp({ isShow, onClose, title, children }) {
  const handlerEsc = (evt) => {
    if (evt.key === "Escape") {
      onClose && onClose();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handlerEsc);
    return () => {
      document.removeEventListener("keydown", handlerEsc);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return isShow ? (
    <Wrapper>
      <Header>
        {title}{" "}
        <Close size="small" onClick={onClose}>x</Close>
      </Header>
      {children}
    </Wrapper>
  ) : null;
}
