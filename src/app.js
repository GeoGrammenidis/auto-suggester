import React from "react";
import { v4 as uuidv4 } from "uuid";

export default function App() {
  var id = "searchText_" + uuidv4();
  return (
    <>
      <h1 className="sr-only">Auto suggester</h1>
      <form className="as-form">
        <label htmlFor={id} className="as-label">
          Search
        </label>
        <input
          id={id}
          className="as-input"
          type="text"
          name="searchText"
        ></input>
        <button className="as-button">SEARCH</button>
      </form>
    </>
  );
}
