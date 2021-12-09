import React from "react";
import PropTypes from "prop-types";
import SuggesterStoryTitle from "./SuggesterStoryTitle/SuggesterStoryTitle";
import SuggesterStoryDetails from "./SuggesterStoryDetails/SuggesterStoryDetails";
import useStoryValidation from "../../../../../hooks/useStoryValidation";
import "./SuggesterStory.css";

export default function SuggesterStory({ story, searchText }) {
  const { title, url, points, author, num_comments } =
    useStoryValidation(story);
  return (
    <li className="suggester-story">
      <SuggesterStoryTitle
        title={title}
        link={url}
        searchText={searchText}
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
  searchText: PropTypes.string.isRequired,
};
