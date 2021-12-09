import React from "react";
import PropTypes from "prop-types";
import { fetchStories } from "../utils/api";
import cacheData from "memory-cache";
const MIN_SEARCH_LENGTH = 3;

function storiesReducer(state, action) {
  switch (action.type) {
    case "search":
      return {
        ...state,
        searchText: action.searchText,
        error: false,
        activeStory: 0,
        selectedValue: false,
        loading: true,
      };
    case "clear":
      return {
        ...state,
        searchText: "",
        stories: [],
        error: false,
        loading: false,
      };
    case "hide":
      return {
        ...state,
        stories: [],
      };
    case "setActiveStory":
      return {
        ...state,
        activeStory: action.storyNumber,
      };
    case "changeActiveStory":
      var temp =
        (state.activeStory + action.keyCode - 39) % action.storiesNumber;
      return {
        ...state,
        activeStory: temp >= 0 ? temp : action.storiesNumber - 1,
      };
    case "selectActiveStory":
      document.getElementById(action.inputId).value =
        state.stories[state.activeStory].title;
      return {
        ...state,
        stories: [],
      };
    case "success":
      // caching results for 5 mins if it isn't already cached.
      if (!cacheData.get(state.searchText)) {
        cacheData.put(state.searchText, action.stories, 1000 * 60 * 5);
      }
      return {
        ...state,
        stories: action.stories.hits,
        error: false,
        loading: false,
      };
    case "error":
      return {
        ...state,
        stories: [],
        error: true,
        errorMessage: action.errorMessage,
        loading: false,
      };
    default:
      throw new Error(`That action type isn't supported`);
  }
}

export default function useSuggester(storiesNumber = 5, inputId) {
  const initialState = {
    searchText: "",
    stories: [],
    error: false,
    errorMessage: "",
    activeStory: 0,
    loading: false,
  };
  const [state, dispatch] = React.useReducer(storiesReducer, initialState);
  const _isMounted = React.useRef(null);
  const { searchText, stories, activeStory, error, errorMessage, loading } =
    state;

  React.useEffect(() => {
    _isMounted.current = true;
    if (searchText.length >= MIN_SEARCH_LENGTH) {
      var cachedValue = cacheData.get(searchText);
      if (cachedValue) {
        dispatch({ type: "success", stories: cachedValue });
      } else {
        fetchStories(searchText).subscribe({
          next: (stories) =>
            _isMounted.current && dispatch({ type: "success", stories }),
          error: (message) =>
            _isMounted.current &&
            dispatch({ type: "error", errorMessage: message.toString() }),
          complete: () => console.log("done"),
        });
      }
    }

    return () => (_isMounted.current = false);
  }, [searchText]);

  React.useEffect(() => {
    document.addEventListener("keydown", escFunction, false);
    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
  });

  function handleChange(e) {
    if (e.target.value.length >= MIN_SEARCH_LENGTH) {
      dispatch({ type: "search", searchText: e.target.value });
    } else if (searchText != "") {
      dispatch({ type: "clear" });
    }
  }

  function handleMouseMove(storyNumber) {
    if (storyNumber != activeStory)
      dispatch({ type: "setActiveStory", storyNumber });
  }

  const escFunction = React.useCallback(
    (event) => {
      if (document.activeElement == document.getElementById(inputId)) {
        if (event.keyCode == 27) {
          dispatch({ type: "hide" });
        }
        if (event.keyCode == 38 || event.keyCode == 40) {
          dispatch({
            type: "changeActiveStory",
            keyCode: event.keyCode,
            storiesNumber,
          });
        }
        if (event.keyCode == 13) {
          if (stories.length > 0) {
            event.preventDefault();
            dispatch({
              type: "selectActiveStory",
              inputId,
            });
          }
        }
      }
    },
    [storiesNumber, inputId, stories]
  );

  return {
    handleChange,
    handleMouseMove,
    searchText,
    error,
    errorMessage,
    stories,
    activeStory,
    loading,
  };
}
useSuggester.propTypes = {
  storiesNumber: PropTypes.number,
};
