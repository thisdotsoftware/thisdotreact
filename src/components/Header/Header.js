import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import CheapskateLogo from "../Icons/CheapskateLogo";
import ScreenReader from "../ScreenReader/ScreenReader";
import * as Styled from "./Header.styles";

const Header = ({ title, skipId }) => (
  <Styled.Wrapper>
    <Link to="/">
      <Styled.Logo>
        <CheapskateLogo width={120} data-testid="logo" />

        {title && <Styled.Heading>{title}</Styled.Heading>}
      </Styled.Logo>
    </Link>

    {skipId && (
      <ScreenReader showOnFocus as="a" href={`#${skipId}`}>
        Skip to content
      </ScreenReader>
    )}
  </Styled.Wrapper>
);

Header.propTypes = {
  title: PropTypes.node,
  skipId: PropTypes.string.isRequired,
};

export default Header;
