import React from "react";
import { Button } from "../Button";

import { Container, LogoSuperCool } from "./styles";

const Header: React.FC = ({ openModal }) => {
  return (
    <Container>
      <LogoSuperCool>My Logo</LogoSuperCool>
      <Button onClick={openModal}>Adicionar</Button>
    </Container>
  );
};

export { Header };
