import React from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
import SuggesterLabel from "./SuggesterLabel/SuggesterLabel";
import SuggesterSubmit from "./SuggesterSubmit/SuggesterSubmit";
import SuggesterInput from "./SuggesterInput/SuggesterInput";
import useSuggester from "../../hooks/useSuggester";
import useSetResultsNumberForCss from "../../hooks/useSetResultsNumberForCss";
import "./Suggester.css";

export default function Suggester({
  inputId = "searchText_" + uuidv4(),
  storiesNumber = 5,
}) {
  const { searchText, error, errorMessage, stories, handleChange } =
    useSuggester();
  useSetResultsNumberForCss(stories, storiesNumber);
  if (error) {
    console.log(errorMessage);
  }
  return (
    <form className="suggester-form" autoComplete="off">
      <div className="suggester-form-row">
        <SuggesterLabel inputId={inputId}></SuggesterLabel>
      </div>

      <div className="suggester-form-row">
        <SuggesterInput
          inputId={inputId}
          searchText={searchText}
          handleChange={handleChange}
          stories={stories}
          storiesNumber={storiesNumber}
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
