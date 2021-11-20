import styled from "styled-components";

const Heading = styled.h1`
  color: var(--color-black);
  font-weight: 700;
  line-height: 150%;
`;

export const Heading1 = styled(Heading)`
  font-size: 4.8rem;
`;

export const Heading2 = styled(Heading).attrs({
  as: "h2",
})`
  font-size: 3.6rem;
`;

export const Heading3 = styled(Heading).attrs({
  as: "h3",
})`
  font-size: 2.4rem;
`;

export const Heading4 = styled(Heading).attrs({
  as: "h4",
})`
  font-size: 2rem;
`;

export const Heading5 = styled(Heading).attrs({
  as: "h5",
})`
  font-size: 1.6rem;
`;

export const Heading6 = styled(Heading).attrs({
  as: "h6",
})`
  font-size: 1.4rem;
`;
