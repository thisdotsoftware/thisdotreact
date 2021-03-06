import React from "react";
import styled, { css } from "styled-components";

import { InfoIcon } from "../Icons/InfoIcon";
import { ErrorIcon } from "../Icons/ErrorIcon";
import { SuccessIcon } from "../Icons/SuccessIcon";

import type {
  AlertProps,
  AlertWrapperProps,
} from "../../types/components/Alert";

const Wrapper = styled.div<AlertWrapperProps>`
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
 * Highlights key pieces of information to the user.
 */
export const Alert = ({ kind = "info", children }: AlertProps) => (
  <Wrapper kind={kind}>
    <Icon>
      {kind === "info" && <InfoIcon />}
      {kind === "error" && <ErrorIcon />}
      {kind === "success" && <SuccessIcon />}
    </Icon>
    <Text>{children}</Text>
  </Wrapper>
);
