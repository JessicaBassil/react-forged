import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import HomePage from "./home-page";

describe("HomePage", () => {
    it("renders the starter heading", () => {
        render(<HomePage />);
        expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("You're all set");
    });
});
