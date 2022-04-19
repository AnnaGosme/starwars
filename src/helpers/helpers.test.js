import helpers from "./helpers";

describe("helpers.matchInfo", () => {
  const arr1 = [1, 2, 3, 4, 5];
  const arr2 = [{ url: 1 }, { url: 2 }, { url: 4 }];
  const finalArr = [];
  const expected = [{url: 1}, {url: 2}, {url: 4}];
  it("should return array with only matching elements", () => {
    expect(helpers.matchInfo("url", arr1, arr2, finalArr)).toEqual(expected);
  });
});

describe("helpers.addFav", () => {
  const arr = [1, 2, 3];
  const fav = 4;
  const result = [1, 2, 3, 4];
  it("should return array with added fav", () => {
    expect(helpers.addFav(arr, fav)).toEqual(result);
  });
});
