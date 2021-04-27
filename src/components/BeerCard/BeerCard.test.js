import React from "react";
import { render } from "@testing-library/react";
import BeerCard from "./BeerCard";

describe("BeerCard tests", () => {
  it("should render", () => {
    expect(render(<BeerCard />)).toBeTruthy();
  });
});
