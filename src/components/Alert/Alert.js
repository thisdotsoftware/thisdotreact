import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

import ErrorIcon from "../Icons/InfoIcon";
import InfoIcon from "../Icons/ErrorIcon";
import SuccessIcon from "../Icons/SuccessIcon";

const Wrapper = styled.div`
  font-size: var(--font-size-body-14);
  line-height: var(--line-height-body-14);

  padding: 10px 8px 12px 8px;
  margin-bottom: 16px;
  display: flex;
  gap: 8px;

  background: var(--color-red-100);
  color: var(--color-red-main);

  border-top: 2px solid;
  border-radius: var(--border-radius);

  svg {
    display: block;
    fill: currentColor;
    width: 20px;
    height: 20px;
  }

  ${(props) =>
    props.kind === "info" &&
    css`
      border-color: var(--color-blue-200);
      background: var(--color-blue-100);
      color: var(--color-blue-main);
    `}

  ${(props) =>
    props.kind === "error" &&
    css`
      border-color: var(--color-red-200);
      background: var(--color-red-100);
      color: var(--color-red-main);
    `}

${(props) =>
    props.kind === "success" &&
    css`
      border-color: var(--color-green-200);
      background: var(--color-green-100);
      color: var(--color-green-main);
    `}
`;

const Icon = styled.div`
  flex: 0 0;
`;

const Text = styled.p`
  flex: 1;
`;

/**
 * Used to highlight key pieces of information to the user.
 */
export const Alert = ({ kind = "info", children }) => (
  <Wrapper kind={kind}>
    <Icon>
      {kind === "info" && <InfoIcon />}
      {kind === "error" && <ErrorIcon />}
      {kind === "success" && <SuccessIcon />}
    </Icon>
    <Text>{children}</Text>
  </Wrapper>
);

Alert.propTypes = {
  kind: PropTypes.oneOf(["info", "success", "error"]),
  children: PropTypes.node.isRequired,
};
