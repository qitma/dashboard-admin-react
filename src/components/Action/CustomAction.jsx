import React from "react";
//import PropTypes from "prop-types";

const CustomAction = props => {
  // eslint-disable-next-line react/prop-types
  const { children } = props;
  return <div>{children}</div>;
};

export default CustomAction;
