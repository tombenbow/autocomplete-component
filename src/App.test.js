import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders App", () => {
  render(<App />);
  expect(screen.getByText("User Directory")).toBeTruthy();
  expect(screen.getByRole("textbox")).toBeTruthy()
});
