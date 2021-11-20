import styled from "styled-components";

import { Heading3, GrayButton } from "..";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  padding: 1.6rem;

  padding-top: 2.4rem;
  margin: 0 auto;
  max-width: 700px;
`;

export const Title = styled(Heading3)`
  margin-bottom: 1.6rem;
`;

export const EventList = styled.div`
  display: grid;
  grid-gap: 1.6rem;
`;

export const EventCard = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 0.8rem;
  padding: 1.6rem;
  border: 1px solid var(--color-gray-200);
  border-radius: 0.4rem;
  position: relative;

  button:first-of-type {
    margin-top: 0.8rem;
  }
`;

export const DeleteButton = styled(GrayButton)`
  position: absolute;
  top: 1.6rem;
  right: 1.6rem;
`;
