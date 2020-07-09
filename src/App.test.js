import React from "react";
import {
  render,
  screen,
  findByAltText,
  findAllByTitle,
} from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import fetchMock from "jest-fetch-mock";
import userEvent from "@testing-library/user-event";
import App from "./App";
import data from "./__mocks__/vuesjs.json";

fetchMock.enableMocks();
function setup() {
  return render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
}

describe("Header", () => {
  test("how it works link", () => {
    setup();
    //screen.debug();
    const link = screen.getByRole("link", { name: /how it works/i });
    //screen.debug(link);
    userEvent.click(link);
    expect(screen.findByRole("heading", { name: /how it works/i }));
  });
  test("test the about link", () => {
    //write code
    setup();
  });
});
describe("Form", () => {
  test("type in input, click button and see results", async () => {
    fetch.once(JSON.stringify(data));
    setup();
    const textInput = screen.getByLabelText("r /");
    userEvent.type(textInput, "vuejs");
    //screen.debug();
    const submitButton = screen.getByRole("button", { name: /search/i });
    userEvent.click(submitButton);
    expect(screen.getByText(/is loading/i)).toBeInTheDocument();
    expect(await screen.findByText(/Number of top posts: 20/i));
  });
});
