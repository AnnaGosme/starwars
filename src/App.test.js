import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import App from "./App";

describe("App component", () => {
  act(() => {
    test("it renders", () => {
      render(<App />);
      expect(screen.getByText("the films")).toBeInTheDocument();
    });
  });
});
