import React from "react";

import { Container, Label, StyledInput } from "./styles";

const Input: React.FC = ({ label, className, ...rest }) => {
  return (
    <Container className={className}>
      <Label>{label}</Label>
      <StyledInput {...rest} />
    </Container>
  );
};

export { Input };
