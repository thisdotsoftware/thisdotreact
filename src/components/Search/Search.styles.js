import styled from "styled-components";

export const Search = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  background: var(--color-white);
  color: var(--color-grey-main);
  padding: 8px 13px 8px 15px;
  border: 1px solid var(--color-grey-200);
  border-radius: var(--border-radius-input);

  :hover {
    > svg {
      fill: var(--color-grey-400);
    }
  }

  > svg {
    transition: fill 0.2s;
    width: 1.5rem;
    height: 1.5rem;
    display: block;
  }
`;

export const Input = styled.input`
  flex: 1;
  border: 0;
  padding: 0;
  font-family: inherit;
  font-size: var(--font-size-body-14);
  line-height: var(--line-height-body-14);
  background: inherit;
  color: inherit;

  ::placeholder {
    color: var(--color-grey-main);
    opacity: 1;
  }
`;
