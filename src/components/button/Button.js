import React from "react";
import PropTypes from "prop-types";
import "./Button.css";

const Button = (props) => {
  const { text } = props;
  return <button className="btn">{text}</button>;
};

Button.propTypes = {
  /**
   * @property {boolean} primary determines is a primary button (emphasized)
   */
  primary: PropTypes.bool,
  /**
   * @property {string} text label to be displayed within the button
   */
  text: PropTypes.string,
};
Button.defaultProps = {
  text: "Hero Button!",
  primary: true,
};

export default Button;
