import { render, screen, waitFor, cleanup } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";

import Help from "../Help";

// Mock fetch
global.fetch = vi.fn();

describe("Help Component", () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  afterEach(() => {
    cleanup();
  });

  it("renders help page title", () => {
    const mockFetch = vi.mocked(fetch);
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => [],
    } as Response);

    render(<Help />);
    expect(screen.getByText("Hilfe & Ressourcen")).toBeInTheDocument();
  });

  it("displays documentation links", () => {
    const mockFetch = vi.mocked(fetch);
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => [],
    } as Response);

    render(<Help />);
    expect(
      screen.getByText("📖 README – Projektübersicht & Befehle")
    ).toBeInTheDocument();
  });

  it("displays FAQs after loading", async () => {
    const mockFaqs = [
      {
        id: 1,
        question: "Test Question",
        answer: "Test Answer",
      },
    ];

    const mockFetch = vi.mocked(fetch);
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockFaqs,
    } as Response);

    render(<Help />);

    await waitFor(() => {
      expect(screen.getByText("Test Question")).toBeInTheDocument();
    });
  });

  it("displays error message when fetch fails", async () => {
    const mockFetch = vi.mocked(fetch);
    mockFetch.mockRejectedValueOnce(new Error("Network error"));

    render(<Help />);

    await waitFor(() => {
      expect(
        screen.getByText(
          "Die FAQs konnten nicht geladen werden. Bitte versuche es später erneut."
        )
      ).toBeInTheDocument();
    });
  });
});
