import React from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
import SuggesterLabel from "./SuggesterLabel/SuggesterLabel";
import "./Suggester.css";

export default function Suggester({ inputId = "searchText_" + uuidv4() }) {
  return (
    <form className="suggester-form">
      <div className="suggester-form-row">
        <SuggesterLabel inputId={inputId}></SuggesterLabel>
      </div>

      <div className="suggester-form-row">
        <input
          id={inputId}
          className="suggester-input"
          type="text"
          name="searchText"
        ></input>
        <button className="suggester-button">SEARCH</button>
      </div>
    </form>
  );
}
Suggester.propTypes = {
  inputId: PropTypes.string,
};
