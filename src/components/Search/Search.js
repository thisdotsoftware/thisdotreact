import React from "react";
import PropTypes from "prop-types";

import SearchIcon from "../Icons/SearchIcon";
import * as Styled from "./Search.styles";

const Search = ({ className, ...props }) => (
  <Styled.Search className={className}>
    <Styled.Input placeholder="Search" {...props} />
    <SearchIcon color="grey-main" />
  </Styled.Search>
);

Search.propTypes = {
  className: PropTypes.string,
};

export default Search;
