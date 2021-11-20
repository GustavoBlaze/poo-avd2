import styled from "styled-components";
import { Heading4 } from "../Heading";
import { GrayButton } from "../Button";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.25);

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 2.4rem;
`;

export const Content = styled.form`
  padding: 2.4rem;
  border-radius: 0.4rem;
  width: 100%;
  max-width: 600px;
  background-color: var(--color-white);
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const Title = styled(Heading4)`
  margin-bottom: 1.6rem;
`;

export const InputList = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1.6rem;
  margin-bottom: 2.4rem;
`;

export const CloseButton = styled(GrayButton)`
  position: absolute;
  top: 2.4rem;
  right: 2.4rem;
`;
