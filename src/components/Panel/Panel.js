import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Panel = styled.div`
  background: var(--color-white);
  box-shadow: 0px 1px 4px rgba(52, 52, 61, 0.2);
  border-radius: var(--border-radius-panel);
  margin-bottom: 24px;
`;

const Header = styled.div`
  display: flex;
  justify-content: ${(props) => props.alignment || "flex-start"};
  align-items: center;
  padding: 16px 24px;
  border-bottom: 1px solid var(--color-grey-200);
`;

export const PanelHeader = ({ children, ...props }) => {
  if (typeof children === "string") {
    return (
      <Header>
        <p
          className="heading5"
          css={`
            margin: 0;
          `}
        >
          {children}
        </p>
      </Header>
    );
  }

  return <Header {...props}>{children}</Header>;
};

PanelHeader.propTypes = {
  children: PropTypes.node.isRequired,
};

export const PanelContent = styled.div`
  padding: 16px 24px 24px;
`;

export default Panel;
