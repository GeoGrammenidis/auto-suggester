import React from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
import SuggesterLabel from "./SuggesterLabel/SuggesterLabel";
import SuggesterSubmit from "./SuggesterSubmit/SuggesterSubmit";
import SuggesterInput from "./SuggesterInput/SuggesterInput";
import "./Suggester.css";

export default function Suggester({ inputId = "searchText_" + uuidv4() }) {
  var searchText = ""; // This value should come from input state later on.
  var error = false; // This value should come from input state later on.
  return (
    <form className="suggester-form">
      <div className="suggester-form-row">
        <SuggesterLabel inputId={inputId}></SuggesterLabel>
      </div>

      <div className="suggester-form-row">
        <SuggesterInput
          inputId={inputId}
          searchText={searchText}
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
