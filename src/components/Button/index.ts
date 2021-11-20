import styled from "styled-components";

export const Button = styled.button`
  padding: 0.8rem 1.6rem;
  background: var(--color-blue-500);
  color: var(--color-white);
  border-radius: 0.4rem;
  font-size: 1.6rem;
  line-height: 2.4rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  cursor: pointer;
  text-align: center;
  justify-content: center;

  &:hover {
    background: var(--color-blue-600);
  }

  &:active {
    opacity: 0.6;
  }
`;

export const RedButton = styled(Button)`
  background: var(--color-red-500);

  &:hover {
    background: var(--color-red-600);
  }
`;

export const GrayButton = styled(Button)`
  background: var(--color-gray-300);
  color: var(--color-black);

  &:hover {
    background: var(--color-gray-400);
  }
`;
