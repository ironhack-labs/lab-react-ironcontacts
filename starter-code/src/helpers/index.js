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

export const generateContact = (contact) => {
  return {
    name: contact,
    pictureUrl: "https://image.tmdb.org/t/p/w500/qlT4904d8oi2NIs28RrgnIZDFZB.jpg",
    popularity: 10,
  } 
}

