import styled from "styled-components";

import { Heading5 } from "..";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled(Heading5).attrs({
  as: `label`,
})`
  margin-bottom: 0.4rem;
  font-weight: 500;
`;

export const StyledInput = styled.input`
  font-size: 1.4rem;
  line-height: 1.6rem;
  padding: 1.2rem;
  background: var(--color-white);
  border-radius: 0.4rem;
  border: 1px solid var(--color-gray-200);

  color: var(--color-black);

  &::placeholder {
    color: var(--color-gray-300);
  }
`;
