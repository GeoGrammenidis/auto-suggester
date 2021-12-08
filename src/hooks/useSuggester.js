import React from "react";
import { fetchStories } from "../utils/api";
const MIN_SEARCH_LENGTH = 3;

function storiesReducer(state, action) {
  switch (action.type) {
    case "search":
      return {
        ...state,
        searchText: action.searchText,
        error: false,
      };
    case "clear":
      return {
        ...state,
        searchText: "",
        stories: [],
        error: false,
      };
    case "success":
      return {
        ...state,
        stories: action.stories.hits,
        error: false,
      };
    case "error":
      return {
        ...state,
        stories: [],
        error: true,
        errorMessage: action.errorMessage,
      };
    default:
      throw new Error(`That action type isn't supported`);
  }
}

export default function useSuggester() {
  const initialState = {
    searchText: "",
    stories: [],
    error: false,
    errorMessage: "",
  };
  const [state, dispatch] = React.useReducer(storiesReducer, initialState);
  const _isMounted = React.useRef(null);
  const { searchText, stories, error, errorMessage } = state;

  React.useEffect(() => {
    _isMounted.current = true;
    searchText.length >= MIN_SEARCH_LENGTH &&
      fetchStories(searchText).subscribe({
        next: (stories) =>
          _isMounted.current && dispatch({ type: "success", stories }),
        error: (message) =>
          _isMounted.current &&
          dispatch({ type: "error", errorMessage: message.toString() }),
        complete: () => console.log("done"),
      });
    return () => (_isMounted.current = false);
  }, [searchText]);

  function handleChange(e) {
    if (e.target.value.length >= MIN_SEARCH_LENGTH) {
      dispatch({ type: "search", searchText: e.target.value });
    } else if (e.target.value.length === 0) {
      dispatch({ type: "clear" });
    }
  }

  return {
    handleChange,
    searchText,
    error,
    errorMessage,
    stories,
  };
}
