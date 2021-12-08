import React from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
import SuggesterLabel from "./SuggesterLabel/SuggesterLabel";
import SuggesterSubmit from "./SuggesterSubmit/SuggesterSubmit";
import SuggesterInput from "./SuggesterInput/SuggesterInput";
import useSuggester from "../../hooks/useSuggester";
import "./Suggester.css";

export default function Suggester({ inputId = "searchText_" + uuidv4() }) {
  const { searchText, error, errorMessage, stories, handleChange } =
    useSuggester();
  console.log("stories:", stories);
  if (error) {
    console.log(errorMessage);
  }
  return (
    <form className="suggester-form">
      <div className="suggester-form-row">
        <SuggesterLabel inputId={inputId}></SuggesterLabel>
      </div>

      <div className="suggester-form-row">
        <SuggesterInput
          inputId={inputId}
          searchText={searchText}
          handleChange={handleChange}
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
};
