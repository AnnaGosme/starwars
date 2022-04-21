import { render } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import FilmContainer from "./FilmContainer";

describe("FilmContainer component", () => {
  test("it renders", () => {
    act(() => {
      render(<FilmContainer />);
    });
  });
});

// describe("FilmContainer fetch films", () => {
//   test("fetch and display films", async () => {
//      const {container} = render(<FilmContainer />);
//     //expect(await container.getElementsByClassName("card-body").toBeVisible());
//     expect(container.firstChild).toHaveClass('container')
//   });
// });
