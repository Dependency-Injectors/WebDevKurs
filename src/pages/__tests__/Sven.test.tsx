import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import Sven from "../Sven";

describe("Sven Page", () => {
  it("zeigt Überschrift an", () => {
    render(<Sven />);
    expect(screen.getByText("Sven Lück")).toBeInTheDocument();
  });
});
