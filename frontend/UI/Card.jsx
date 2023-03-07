import React from "react";
import PropTypes from "prop-types";

function Card({ classNames, children }) {
  return <div className={`${"cardlogin"} ${classNames}`}>{children}</div>;
}

export default Card;

Card.defaultProps = {
  classNames: "",
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  classNames: PropTypes.string,
};
