import React from "react";
import { render } from "@testing-library/react";
import Beers from "./Beers";

describe("Beers tests", () => {
  it("should render", () => {
    expect(render(<Beers />)).toBeTruthy();
  });
});
