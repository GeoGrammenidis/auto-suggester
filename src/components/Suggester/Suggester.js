import React from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
import "./Suggester.css";

export default function Suggester({ inputId = "searchText_" + uuidv4() }) {
  return (
    <form className="as-form">
      <div className="as-form-row">
        <label htmlFor={inputId} className="as-label">
          Search
        </label>
      </div>

      <div className="as-form-row">
        <input
          id={inputId}
          className="as-input"
          type="text"
          name="searchText"
        ></input>
        <button className="as-button">SEARCH</button>
      </div>
    </form>
  );
}
Suggester.propTypes = {
  inputId: PropTypes.string,
};
