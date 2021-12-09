import React from "react";
import PropTypes from "prop-types";
import SuggesterStory from "./SuggesterStory/SuggesterStory";
import "./SuggesterResults.css";

export default function SuggesterResults({
  stories,
  searchText,
  storiesNumber,
}) {
  return (
    <div className={`suggester-results${stories.length > 0 ? " _open" : ""}`}>
      <ul className="suggester-ul">
        {stories.map(
          (story, storyNumber) =>
            storyNumber < storiesNumber && (
              <SuggesterStory
                story={story}
                key={story.objectID}
                searchText={searchText}
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
};
