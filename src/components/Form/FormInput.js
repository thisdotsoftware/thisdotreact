import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";

import { Button } from "../Button/Button.styles";
import VisibilityIcon from "../Icons/VisibilityIcon";
import VisibilityOffIcon from "../Icons/VisibilityOffIcon";
import ScreenReader from "../ScreenReader/ScreenReader";

const InputWrapper = styled.div`
  position: relative;
`;

const FieldWrapper = styled.div`
  display: flex;
  gap: 8px;

  > ${InputWrapper} {
    flex: 1;
  }

  > ${Button} {
    flex-basis: 130px;
    justify-content: center;
  }
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

const LabelText = styled.span`
  display: block;

  color: var(--color-grey-400);
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-body-14);
  line-height: calc(var(--line-height-body-14) - 1px);

  margin-top: 1px;
  margin-bottom: 4px;
`;

const Input = styled.input`
  font-family: inherit;
  font-size: inherit;
  color: var(--color-grey-400);
  background: var(--color-white);

  padding: 9px 15px;
  border: 1px solid var(--color-grey-300);
  border-radius: var(--border-radius);
  width: 100%;

  ::placeholder {
    color: var(--color-grey-main);
    opacity: 1;
  }

  &:disabled {
    background: var(--color-grey-100);
    border-color: var(--color-grey-200);
    color: var(--color-grey-300);
    cursor: not-allowed;
  }

  ${(props) =>
    props.hasError &&
    css`
      padding: 8px 15px;
      border: 2px solid var(--color-red-main);
    `}

  ${(props) =>
    props.iconPosition === "left" &&
    css`
      padding-left: 39px;
    `}

  ${(props) =>
    props.iconPosition === "right" &&
    css`
      padding-right: 45px;
    `}
`;

const Icon = styled.div`
  background: none;
  border: none;

  position: absolute;
  top: 0;
  bottom: 0;

  ${(props) =>
    props.position === "left" &&
    css`
      left: 0;
      padding-right: 7px;
      padding-left: 7px;
    `}

  ${(props) =>
    props.position === "right" &&
    css`
      right: 0;
      padding-left: 7px;
      padding-right: 13px;
    `}

  display: flex;
  align-items: center;
`;

const HintText = styled.div`
  display: block;
  font-size: var(--font-size-body-small);
  margin-top: 4px;
  color: var(--color-grey-main);
`;

const ErrorText = styled.div`
  display: block;
  font-size: var(--font-size-body-small);
  margin-top: 4px;
  color: var(--color-red-main);
`;

// TODO: char limit
const FormInput = ({
  label,
  name,
  icon: iconProp = {},
  button,
  type: typeProp,
  error,
  hint,
  ...props
}) => {
  const [type, setType] = useState(typeProp);

  useEffect(() => {
    setType(typeProp);
  }, [typeProp]);

  const onTogglePasswordVisibility = () => {
    setType(type === "password" ? "text" : "password");
  };

  const icon =
    typeProp === "password"
      ? {
          position: "right",
          component: type === "password" ? VisibilityIcon : VisibilityOffIcon,
          onClick: onTogglePasswordVisibility,
          screenreaderLabel:
            type === "password" ? "Show password" : "Hide password",
        }
      : iconProp;

  return (
    <Label htmlFor={name}>
      {label && <LabelText>{label}</LabelText>}

      <FieldWrapper>
        <InputWrapper>
          {icon.position === "left" && (
            <Icon
              as={icon.onClick ? "button" : "div"}
              position="left"
              onClick={icon.onClick}
            >
              {icon.screenreaderLabel && (
                <ScreenReader>{icon.screenreaderLabel}</ScreenReader>
              )}
              <icon.component color="grey-main" />
            </Icon>
          )}

          <Input
            {...props}
            id={name}
            name={name}
            type={type}
            iconPosition={icon.position}
            hasError={!!error}
          />

          {icon.position === "right" && (
            <Icon
              as={icon.onClick ? "button" : "div"}
              position="right"
              onClick={icon.onClick}
            >
              {icon.screenreaderLabel && (
                <ScreenReader>{icon.screenreaderLabel}</ScreenReader>
              )}
              <icon.component color="grey-main" />
            </Icon>
          )}
        </InputWrapper>

        {button}
      </FieldWrapper>

      {error && <ErrorText>{error}</ErrorText>}
      {hint && !error && <HintText>{hint}</HintText>}
    </Label>
  );
};

export default FormInput;
