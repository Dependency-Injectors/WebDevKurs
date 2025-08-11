import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
// @ts-ignore
import Home from "../Home.jsx";

describe("Home Page", () => {
  it("zeigt Überschrift an", () => {
    render(<Home />);
    expect(screen.getByText("Home")).toBeInTheDocument();
  });
});
