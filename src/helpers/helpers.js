const helpers = {
  addFav: function addFav(array, fav) {
    if (!array.includes(fav)) {
      array.push(fav);
    }
  },

  matchInfo: function matchInfo(key, arr1, arr2, finalArr) {
    for (let i = 0; i < arr1.length; i++) {
      for (let j = 0; j < arr2.length; j++) {
        if (arr1[i] == arr2[j][key]) {
          finalArr.push((arr2[j]));
        }
      }
    }
    return finalArr;
  },
  

  planetName: function findPlanetName(arr1, arr2, resultArr) {
    for (let i = 0; i < arr1.length; i++) {
      for (let j = 0; j < arr2.length; j++) {
        if (arr1[i] == arr2[j].url) {
          resultArr.push(Object.values(arr2[j].homeworld));
        }
      }
    }
    return resultArr;
  },

  // planetName: function getPlanetName(url) {
  //   let name;
  //   if (url.length <= 0) name = "Planet does not exist";
  //   if (url == "https://swapi.dev/api/planets/1/") {
  //     name = "Tatooine";
  //   } else if (url == "https://swapi.dev/api/planets/2/") {
  //     name = "Alderaan";
  //   } else if (url == "https://swapi.dev/api/planets/3/") {
  //     name = "Yavin IV";
  //   } else if (url == "https://swapi.dev/api/planets/4/") {
  //     name = "Hoth";
  //   } else if (url == "https://swapi.dev/api/planets/5/") {
  //     name = "Dagobah";
  //   } else if (url == "https://swapi.dev/api/planets/6/") {
  //     name = "Bespin";
  //   } else if (url == "https://swapi.dev/api/planets/7/") {
  //     name = "Endor";
  //   } else if (url == "https://swapi.dev/api/planets/8/") {
  //     name = "Naboo";
  //   } else if (url == "https://swapi.dev/api/planets/9/") {
  //     name = "Coruscant";
  //   } else if (url == "https://swapi.dev/api/planets/10/") {
  //     name = "Kamino";
  //   } else if (url == "https://swapi.dev/api/planets/11/") {
  //     name = "Geonosis";
  //   } else if (url == "https://swapi.dev/api/planets/12/") {
  //     name = "Geonosis";
  //   } else if (url == "https://swapi.dev/api/planets/13/") {
  //     name = "Geonosis";
  //   } else if (url == "https://swapi.dev/api/planets/14/") {
  //     name = "Geonosis";
  //   } else if (url == "https://swapi.dev/api/planets/15/") {
  //     name = "Geonosis";
  //   } else if (url == "https://swapi.dev/api/planets/16/") {
  //     name = "Geonosis";
  //   } else if (url == "https://swapi.dev/api/planets/17/") {
  //     name = "Geonosis";
  //   } else if (url == "https://swapi.dev/api/planets/18/") {
  //     name = "Geonosis";
  //   } else if (url == "https://swapi.dev/api/planets/11/") {
  //     name = "Geonosis";
  //   } else if (url == "https://swapi.dev/api/planets/11/") {
  //     name = "Geonosis";
  //   } else if (url == "https://swapi.dev/api/planets/11/") {
  //     name = "Geonosis";
  //   } else if (url == "https://swapi.dev/api/planets/11/") {
  //     name = "Geonosis";
  //   } else if (url == "https://swapi.dev/api/planets/11/") {
  //     name = "Geonosis";
  //   } else if (url == "https://swapi.dev/api/planets/11/") {
  //     name = "Geonosis";
  //   } else if (url == "https://swapi.dev/api/planets/11/") {
  //     name = "Geonosis";
  //   } else if (url == "https://swapi.dev/api/planets/11/") {
  //     name = "Geonosis";
  //   } else if (url == "https://swapi.dev/api/planets/11/") {
  //     name = "Geonosis";
  //   } else {
  //     name = "Planet does not exist";
  //   }
  //   return name;
  // },
};

export default helpers;
