import React from "react";
import PropTypes from "prop-types";
import SuggesterLabel from "./SuggesterLabel/SuggesterLabel";
import SuggesterSubmit from "./SuggesterSubmit/SuggesterSubmit";
import SuggesterInput from "./SuggesterInput/SuggesterInput";
import useSuggester from "../../hooks/useSuggester";
import useSetResultsNumberForCss from "../../hooks/useSetResultsNumberForCss";
import "./Suggester.css";

export default function Suggester({
  inputId = "searchText_1",
  storiesNumber = 5,
}) {
  const {
    searchText,
    error,
    errorMessage,
    stories,
    activeStory,
    loading,
    handleChange,
    handleMouseMove,
  } = useSuggester(storiesNumber, inputId);
  var { storiesLength } = useSetResultsNumberForCss(stories, storiesNumber);
  if (error) {
    console.log(errorMessage);
  }
  console.log("did run!");
  console.log(activeStory);
  return (
    <form className="suggester-form" autoComplete="off">
      <div className="sr-only">
        When stories are found, you can navigate with up and down keys.
      </div>
      <div className="suggester-form-row">
        <SuggesterLabel inputId={inputId}></SuggesterLabel>
      </div>
      <div className="sr-only" aria-live="assertive">
        {storiesLength > 0 ? storiesLength + " stories found" : ""}
      </div>
      <div className="suggester-form-row">
        <SuggesterInput
          inputId={inputId}
          searchText={searchText}
          handleChange={handleChange}
          handleMouseMove={handleMouseMove}
          stories={stories}
          storiesNumber={storiesNumber}
          activeStory={activeStory}
          loading={loading}
        ></SuggesterInput>
        <SuggesterSubmit
          searchText={searchText}
          error={error}
        ></SuggesterSubmit>
      </div>
    </form>
  );
}
Suggester.propTypes = {
  inputId: PropTypes.string,
  storiesNumber: PropTypes.number,
};
