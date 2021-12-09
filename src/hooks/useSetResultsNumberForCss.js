import React from "react";
import PropTypes from "prop-types";

export default function useSetResultsNumberForCss(stories, storiesNumber = 5) {
  var storiesLength =
    stories.length < storiesNumber ? stories.length : storiesNumber;

  React.useEffect(() => {
    document.documentElement.style.setProperty(
      "--suggester-results-number",
      storiesLength
    );
    return () => {};
  }, [storiesLength]);

  React.useEffect(() => {
    document.documentElement.style.setProperty(
      "--suggester-results-max-number",
      storiesNumber
    );
    return () => {};
  }, [storiesNumber]);

  return { storiesLength };
}
useSetResultsNumberForCss.propTypes = {
  stories: PropTypes.array.isRequired,
  storiesNumber: PropTypes.number,
};
