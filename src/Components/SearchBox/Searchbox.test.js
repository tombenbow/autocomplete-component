//Testing Library
import { render, screen, fireEvent } from "@testing-library/react";
//Components
import SearchBox from "./Searchbox";

test("renders SearchBox", () => {
  render(<SearchBox />);

  const input = screen.queryByPlaceholderText("Type to search for a user");
  expect(input).toBeTruthy();

  fireEvent.click(input);
  fireEvent.change(input, { target: { value: "a" } });

  expect(input).toHaveValue("a");
});
