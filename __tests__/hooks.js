import React from "react";

import { mount } from "enzyme";
import useStoryValidation from "../src/hooks/useStoryValidation";
import useSetResultsNumberForCss from "../src/hooks/useSetResultsNumberForCss";

describe("useStoryValidation", () => {
  let results;
  const renderHook = (hook, args = []) => {
    function HookWrapper() {
      results = hook(...args);
      return null;
    }
    mount(<HookWrapper />);
    return results;
  };

  it("default values", () => {
    renderHook(useStoryValidation, [{}]);
    expect(results.title).toBe("Title is missing for this result!");
    expect(results.url).toBe("#");
    expect(results.author).toBe("");
    expect(results.num_comments).toBe(0);
  });

  describe("getting title", () => {
    it("from hightlighted title", () => {
      renderHook(useStoryValidation, [
        {
          title: "Title value",
          _highlightResult: {
            title: { value: "Hightlighted value" },
          },
        },
      ]);
      expect(results.title).toBe("Hightlighted value");
    });
    it("_highlightResult.title.value is missing", () => {
      renderHook(useStoryValidation, [
        {
          title: "Title value",
          _highlightResult: {
            title: { wrongValue: "Hightlighted value" },
          },
        },
      ]);
      expect(results.title).toBe("Title value");
    });
    it("_highlightResult.title is missing", () => {
      renderHook(useStoryValidation, [
        {
          title: "Title value",
          _highlightResult: {
            wrongTitle: { value: "Hightlighted value" },
          },
        },
      ]);
      expect(results.title).toBe("Title value");
    });
    it("_highlightResult is missing", () => {
      renderHook(useStoryValidation, [{ title: "Title value" }]);
      expect(results.title).toBe("Title value");
    });
  });

  it("getting url", () => {
    renderHook(useStoryValidation, [{ url: "Url value" }]);
    expect(results.url).toBe("Url value");
  });

  it("getting author", () => {
    renderHook(useStoryValidation, [{ author: "Author value" }]);
    expect(results.author).toBe("Author value");
  });

  it("getting num_comments", () => {
    renderHook(useStoryValidation, [
      {
        num_comments: 18, // a random number
      },
    ]);
    expect(results.num_comments).toBe(18);
  });

  it("a full object test", () => {
    renderHook(useStoryValidation, [
      {
        title: "Title value",
        url: "Url value",
        author: "Author value",
        num_comments: 7, // a random number
        _highlightResult: {
          title: { value: "Hightlighted value" },
        },
        randomProperty: "RandomProperty value",
      },
    ]);
    expect(results.num_comments).toBe(7);
    expect(results.author).toBe("Author value");
    expect(results.url).toBe("Url value");
    expect(results.title).toBe("Hightlighted value");
    expect(results.title).not.toBe("Title value");
  });
});

describe("useSetResultsNumberForCss", () => {
  let results;
  const renderHook = (hook, args = []) => {
    function HookWrapper() {
      results = hook(...args);
      return null;
    }
    mount(<HookWrapper />);
    return results;
  };
  it("result", () => {
    let storiesArray = [];
    for (let i = 0; i < 20; i++) {
      renderHook(useSetResultsNumberForCss, [storiesArray, 5]);
      if (i <= 5) {
        expect(results.storiesLength).toBe(storiesArray.length);
      } else {
        expect(results.storiesLength).toBe(5);
      }
      storiesArray.push(`story${i + 1}`);
    }
  });
  it("css", () => {
    let storiesArray = [];
    for (let i = 0; i < 20; i++) {
      renderHook(useSetResultsNumberForCss, [storiesArray]);
      let res_number = document.documentElement.style.getPropertyValue(
        "--suggester-results-number"
      );
      if (i <= 5) {
        expect(res_number).toBe(`${i}`);
      } else {
        expect(res_number).toBe('5');
      }
      let max_number = document.documentElement.style.getPropertyValue(
        "--suggester-results-max-number"
      );
      expect(max_number).toBe('5');
      storiesArray.push(`story${i + 1}`);
    }
  });
});
