import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import Home from "../Home";

describe("Home page buttons", () => {
  it("should have an aria-label on every button", () => {
    render(<Home />);
    const buttons = screen.getAllByRole("button");
    buttons.forEach(btn => {
      expect(btn).toHaveAttribute("aria-label");
      expect(btn.getAttribute("aria-label")).not.toBe("");
    });
  });
  describe("Home page external links", () => {
    it("should have target='_blank' and rel='noopener noreferrer' for external links, and all links should have an aria-label", () => {
      render(<Home />);
      const allLinks = document.querySelectorAll("a");
      allLinks.forEach(link => {
        // aria-label Pflicht für alle Links
        expect(link).toHaveAttribute("aria-label");
        expect(link.getAttribute("aria-label")).not.toBe("");
        // Externe Links: target/rel prüfen
        const href = link.getAttribute("href") ?? "";
        if (href.startsWith("http")) {
          expect(link).toHaveAttribute("target", "_blank");
          expect(link).toHaveAttribute("rel", "noopener noreferrer");
        }
      });
    });
  });
});
