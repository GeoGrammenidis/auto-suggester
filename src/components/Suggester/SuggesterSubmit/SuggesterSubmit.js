import React from "react";
import PropTypes from "prop-types";
import "./SuggesterSubmit.css";

export default function SuggesterSubmit({
  searchText,
  error = false,
  children = "SEARCH",
}) {
  return (
    <button
      className="suggester-submit"
      type="submit"
      disabled={searchText == "" || error}
    >
      {children}
    </button>
  );
}
SuggesterSubmit.propTypes = {
  children: PropTypes.string,
  searchText: PropTypes.string.isRequired,
  error: PropTypes.bool,
};
