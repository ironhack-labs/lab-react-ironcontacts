export const sortByName = (a,b) => {
  let nameA = a.name.toUpperCase();
  let nameB = b.name.toUpperCase();
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
  return 0;
}

export const sortByPop = (a,b) => {
  return b.popularity - a.popularity;
}

