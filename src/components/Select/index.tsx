import React from "react";

import { Container, Label, StyledSelect } from "./styles";

const Select: React.FC = ({ label, className, children, ...rest }) => {
  return (
    <Container className={className}>
      <Label>{label}</Label>
      <StyledSelect {...rest}>{children}</StyledSelect>
    </Container>
  );
};

export { Select };
