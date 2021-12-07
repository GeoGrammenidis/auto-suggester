import React from "react";
import PropTypes from "prop-types";
import "./SuggesterLabel.css";

export default function SuggesterLabel({ inputId, children = "Search" }) {
  return (
    <label className="suggester-label" htmlFor={inputId}>
      {children}
    </label>
  );
}
SuggesterLabel.propTypes = {
  inputId: PropTypes.string.isRequired,
  children: PropTypes.string,
};
