import React from "react";
import PropTypes from "prop-types";
import "./SuggesterStoryTitle.css";

export default function SuggesterStoryTitle({
  title,
  link,
  handleMouseMove,
  storyNumber,
}) {
  var tempArray = [...title.matchAll(/<em>.+?<\/em>*/gi)];
  return (
    <a
      className="suggester-story-title"
      href={link}
      onMouseMove={() => handleMouseMove(storyNumber)}
      onFocus={() => console.log("focus")}
      tabIndex="-1"
    >
      {title.split(/<em>.+?<\/em>/gi).reduce((acc, cur, index) => (
        <>
          {acc}
          <span className="suggester-highlighted">
            {tempArray[index - 1][0].slice(4, -5)}
          </span>
          {cur}
        </>
      ))}
    </a>
  );
}
SuggesterStoryTitle.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  searchText: PropTypes.string.isRequired,
  handleMouseMove: PropTypes.func.isRequired,
  storyNumber: PropTypes.number.isRequired,
};
