import React from "react";
import PropTypes from "prop-types";
import SuggesterStory from "./SuggesterStory/SuggesterStory";
import "./SuggesterResults.css";

export default function SuggesterResults({
  stories,
  searchText,
  storiesNumber,
  activeStory,
  handleMouseMove,
  ulId,
}) {
  return (
    <div className={`suggester-results${stories.length > 0 ? " _open" : ""}`}>
      <ul id={ulId} className="suggester-ul">
        {stories.map(
          (story, storyNumber) =>
            storyNumber < storiesNumber && (
              <SuggesterStory
                story={story}
                key={story.objectID}
                searchText={searchText}
                activeStory={activeStory == storyNumber}
                handleMouseMove={handleMouseMove}
                storyNumber={storyNumber}
              ></SuggesterStory>
            )
        )}
      </ul>
    </div>
  );
}

SuggesterResults.propTypes = {
  stories: PropTypes.array.isRequired,
  searchText: PropTypes.string.isRequired,
  storiesNumber: PropTypes.number.isRequired,
  activeStory: PropTypes.number.isRequired,
  handleMouseMove: PropTypes.func.isRequired,
  ulId: PropTypes.string.isRequired,
};
