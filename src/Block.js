import React from "react";
import PropTypes from "prop-types";
import {StyledBlockItem} from "./styles/StyledBlockItem";

const Block = ({accent, children, title}) => {
  return (
    <StyledBlockItem accent={accent}>
      <div>
        <h3>{title}</h3>
        <ul>{children}</ul>
      </div>
    </StyledBlockItem>
  );
};

Block.propTypes = {};

export default Block;
