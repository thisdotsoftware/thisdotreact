import styled from "styled-components";

export const Wrapper = styled.header`
  background: var(--color-white);
  padding: 17px 24px;
  border-bottom: 1px solid var(--color-grey-200);
  margin-bottom: 40px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  a,
  a:visited {
    text-decoration: none;
    color: var(--color-primary-300);
    transition: color 0.2s linear;

    svg {
      transition: fill 0.2s linear;
    }

    :hover {
      color: var(--color-primary-400);

      svg {
        fill: var(--color-primary-400);
      }
    }
  }
`;

export const Logo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Heading = styled.h1`
  font-size: var(--font-size-body-small);
  font-weight: var(--font-weight-normal);
  line-height: var(--line-height-body-small);
`;
