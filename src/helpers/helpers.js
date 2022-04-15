const helpers = {
  addFav: function onClickAddFav(array, fav) {
    if (!array.includes(fav)) {
      array.push(fav);
    }
  },
};

export default helpers;
