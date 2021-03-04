import React from "react";
import styled, { keyframes } from "styled-components";

const slideIn = keyframes`
  from { transform: translateY(100%); }
  to { transform: translateY(0%); }
`;

const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  animation: ${slideIn} 0.25s ease;
  z-index: 100;
`;

const Text = styled.p`
  margin: 16px;
  border-radius: var(--border-radius);
  background: var(--color-grey-400);
  padding: 12px 16px;
  color: var(--color-white);
  font-size: var(--font-size-body-14);
  line-height: var(--line-height-body-14);
`;

const Toast = ({ children }) => (
  <Wrapper role="alert" aria-live="assertive">
    <Text>{children}</Text>
  </Wrapper>
);

export default Toast;
