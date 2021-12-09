import React from "react";
import PropTypes from "prop-types";

export default function useSetResultsNumberForCss(stories, storiesNumber = 5) {
  var storiesLength =
    stories.length < storiesNumber ? stories.length : storiesNumber;

  React.useEffect(() => {
    document.documentElement.style.setProperty(
      "--sugester-results-number",
      storiesLength
    );
    return () => {};
  }, [storiesLength]);

  React.useEffect(() => {
    document.documentElement.style.setProperty(
      "--sugester-results-max-number",
      storiesNumber
    );
    return () => {};
  }, [storiesNumber]);
}
useSetResultsNumberForCss.propTypes = {
  stories: PropTypes.array.isRequired,
  storiesNumber: PropTypes.number,
};
