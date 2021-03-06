import styled from "styled-components";

import type { ButtonProps } from "../../types/components/Button";

export const Button = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  gap: 8px;
  background: var(--color-primary-main);
  color: var(--color-white);
  padding: ${(props) => (props.narrow ? "8px" : "11px")} 16px;
  border: 0;
  border-radius: var(--border-radius);

  font-family: inherit;
  font-size: var(--font-size-body-14);
  font-weight: var(--font-weight-bold);
  line-height: calc(var(--line-height-body-14) - 1px);
  text-decoration: none;

  transition: background 0.1s;

  :hover,
  :active {
    color: var(--color-white);
    background: var(--color-primary-300);
  }

  > svg {
    width: 1.25rem;
    height: 1.25rem;
    display: block;
  }

  > span {
    align-self: flex-end;
    color: inherit;
  }
`;
