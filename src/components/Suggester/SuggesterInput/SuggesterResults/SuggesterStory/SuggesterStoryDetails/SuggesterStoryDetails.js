import React from "react";
import PropTypes from "prop-types";
import "./SuggesterStoryDetails.css";

export default function SuggesterStoryDetails({
  points,
  author,
  num_comments,
}) {
  return (
    <span className="suggester-story-details">
      <span className="suggester-story-detail">
        {points ? points : 0} point{points != 1 && "s"}
      </span>
      <span className="suggester-story-detail">
        {author ? `by ${author}` : "unknown author"}
      </span>
      <span className="suggester-story-detail">
        {num_comments ? num_comments : 0} comment
        {num_comments != 1 && "s"}
      </span>
    </span>
  );
}
SuggesterStoryDetails.propTypes = {
  points: PropTypes.number.isRequired,
  author: PropTypes.string,
  num_comments: PropTypes.number.isRequired,
};
