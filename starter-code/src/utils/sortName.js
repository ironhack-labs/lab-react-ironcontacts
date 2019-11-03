
function sortName(a, b) {

  const nameA = a.name.toUpperCase();
  const nameB = b.name.toUpperCase()

  let comparison = 0;
  if (nameA > nameB) {
    comparison = 1;
  } else if (nameA < nameB) {
    comparison = -1;
  }
  return comparison;
}

export default sortName




