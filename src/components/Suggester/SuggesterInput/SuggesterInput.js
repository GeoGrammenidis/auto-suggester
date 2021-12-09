import React from "react";
import _ from "lodash";
import PropTypes from "prop-types";
import SuggesterResults from "./SuggesterResults/SuggesterResults";
import "./SuggesterInput.css";

export default function SuggesterInput({
  inputId,
  handleChange,
  handleMouseMove,
  placeholder = "Search title",
  type = "text",
  name = "searchText",
  stories,
  storiesNumber,
  searchText,
  activeStory,
}) {
  const ariaControls = "suggester-ul";
  return (
    <div className="suggester-input-wrap">
      <input
        id={inputId}
        className="suggester-input"
        placeholder={placeholder}
        onChange={_.debounce((e) => handleChange(e), 500)}
        type={type}
        name={name}
        minLength="3"
        role="combobox"
        aria-autocomplete="both"
        aria-controls={ariaControls}
        aria-expanded={stories.length > 0 ? "true" : "false"}
        aria-activedescendant={`suggester-story_${activeStory}`}
      ></input>
      <SuggesterResults
        stories={stories}
        searchText={searchText}
        storiesNumber={storiesNumber}
        activeStory={activeStory}
        handleMouseMove={handleMouseMove}
        ulId={ariaControls}
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
  handleMouseMove: PropTypes.func.isRequired,
  stories: PropTypes.array.isRequired,
  storiesNumber: PropTypes.number.isRequired,
  searchText: PropTypes.string.isRequired,
  activeStory: PropTypes.number.isRequired,
};
