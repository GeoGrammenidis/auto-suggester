import React from "react";
import PropTypes from "prop-types";
import SuggesterStoryTitle from "./SuggesterStoryTitle/SuggesterStoryTitle";
import SuggesterStoryDetails from "./SuggesterStoryDetails/SuggesterStoryDetails";
import useStoryValidation from "../../../../../hooks/useStoryValidation";
import "./SuggesterStory.css";

export default function SuggesterStory({
  story,
  searchText,
  activeStory,
  handleMouseMove,
  storyNumber,
}) {
  const { title, url, points, author, num_comments } =
    useStoryValidation(story);

  const storyId = "suggester-story-" + storyNumber;

  return (
    <li
      id={storyId}
      className={`suggester-story${activeStory ? " active" : ""}`}
    >
      <SuggesterStoryTitle
        title={title}
        link={url}
        searchText={searchText}
        handleMouseMove={handleMouseMove}
        storyNumber={storyNumber}
      ></SuggesterStoryTitle>
      <SuggesterStoryDetails
        points={points}
        author={author}
        num_comments={num_comments}
      ></SuggesterStoryDetails>
    </li>
  );
}

SuggesterStory.propTypes = {
  story: PropTypes.object.isRequired,
  storyNumber: PropTypes.number.isRequired,
  searchText: PropTypes.string.isRequired,
  activeStory: PropTypes.bool.isRequired,
  handleMouseMove: PropTypes.func.isRequired,
};
