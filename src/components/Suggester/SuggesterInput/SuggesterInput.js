import React from "react";
import PropTypes from "prop-types";
import "./SuggesterInput.css";

export default function SuggesterInput({
  inputId,
  placeholder = "Search title",
  type = "text",
  name = "searchText",
}) {
  return (
    <div className="suggester-input-wrap">
      <input
        id={inputId}
        className="suggester-input"
        placeholder={placeholder}
        type={type}
        name={name}
      ></input>
    </div>
  );
}
SuggesterInput.propTypes = {
  inputId: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
};
