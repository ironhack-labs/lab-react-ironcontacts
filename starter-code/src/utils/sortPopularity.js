function sortPopularity(a, b) {
  const popularityA = a.popularity;
  const popularityB = b.popularity;

  let comparison = 0;
  if (popularityA > popularityB) {
    comparison = 1;
  } else if (popularityA < popularityB) {
    comparison = -1;
  }
  return comparison * -1;
}

export default sortPopularity;
