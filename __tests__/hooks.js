import React from "react";

import { mount } from "enzyme";
import { act } from "react-dom/test-utils";
import useCustomHook from "../src/hooks/useCustomHook";

describe("useCustomHook", () => {
  let results;
  const renderHook = (hook) => {
    function HookWrapper() {
      results = hook();
      return null;
    }
    mount(<HookWrapper />);
    return results;
  };

  it("works", () => {
    renderHook(useCustomHook);
    expect(results.count).toEqual(0);

    act(() => {
      results.increment();
    });

    expect(results.count).toEqual(1);
  });
});
