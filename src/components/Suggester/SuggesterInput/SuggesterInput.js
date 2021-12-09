import React from "react";
import _ from "lodash";
import PropTypes from "prop-types";
import SuggesterResults from "./SuggesterResults/SuggesterResults";
import "./SuggesterInput.css";

export default function SuggesterInput({
  inputId,
  handleChange,
  placeholder = "Search title",
  type = "text",
  name = "searchText",
  stories,
  storiesNumber,
  searchText,
}) {
  return (
    <div className="suggester-input-wrap">
      <input
        id={inputId}
        className="suggester-input"
        placeholder={placeholder}
        onChange={_.debounce((e) => handleChange(e), 500)}
        type={type}
        name={name}
      ></input>
      <SuggesterResults
        stories={stories}
        searchText={searchText}
        storiesNumber={storiesNumber}
      ></SuggesterResults>
    </div>
  );
}
SuggesterInput.propTypes = {
  inputId: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  stories: PropTypes.array.isRequired,
  storiesNumber: PropTypes.number.isRequired,
  searchText: PropTypes.string.isRequired,
};
