import axios from "axios";

const helpers = {
  fetch: async function fetch(url, setRes) {
    try {
      const res = await axios.get(url);
      setRes(res.data.results);
    } catch (err) {
      console.log(`Error: ${err}`);
    }
  },

  addFav: function addFav(array, selected) {
    if (!array.includes(selected)) {
      array.push(selected);
      return array;
    }
  },

  matchInfo: function matchInfo(key, arr1, arr2, finalArr) {
    for (let i = 0; i < arr1.length; i++) {
      for (let j = 0; j < arr2.length; j++) {
        if (arr1[i] === arr2[j][key]) {
          finalArr.push(arr2[j]);
        }
      }
    }
    return finalArr;
  },
};

export default helpers;
