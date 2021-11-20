import styled from "styled-components";

const fontSize = ({ $size }) => {
  if (!$size) return "1.6rem";

  return (
    {
      medium: "1.6rem",
      large: "1.8rem",
      xl: "2rem",
      "2xl": "2.4rem",
    }[$size] || $size
  );
};

export const Text = styled.p`
  font-size: 1.6rem;
  line-height: 150%;

  ${fontSize};

  strong {
    font-weight: 500;
  }
`;
