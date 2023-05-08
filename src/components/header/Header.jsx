import styled from "styled-components";
import OrderBusket from "./OrderBusket";
import { useContext } from "react";
import { cartContext } from "../../store/cartContent";
import { useState } from "react";
import { useEffect } from "react";

const Header = ({ onToggle }) => {
  const [animation, setAnimation] = useState("");
  const context = useContext(cartContext);

  const start = () => {
    setAnimation("bump");

    const stop = setTimeout(() => {
      setAnimation("");
    }, 300);

    return () => {
      clearTimeout(stop);
    };
  };

  useEffect(() => {
    start();
  }, [context.items]);

  return (
    <header style={{ width: "100%" }}>
      <Container>
        <h1>ReactMeals</h1>
        <OrderBusket className={animation} onToggle={onToggle}>
          your craft
        </OrderBusket>
      </Container>
    </header>
  );
};

export default Header;

const Container = styled.div`
  height: 101px;
  width: 100%;
  display: flex;
  background-color: #8a2b06;
  padding: 0px 120px;
  align-items: center;
  justify-content: space-between;

  h1 {
    font-weight: 600;
    font-size: 38px;
    color: #fff;
  }
  .bump {
    animation: bump 300ms ease-out;
  }

  @keyframes bump {
    0% {
      transform: scale(1);
    }
    10% {
      transform: scale(0.9);
    }
    30% {
      transform: scale(1.1);
    }
    50% {
      transform: scale(1.15);
    }
    100% {
      transform: scale(1);
    }
  }
`;
