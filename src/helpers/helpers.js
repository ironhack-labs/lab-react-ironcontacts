const getRandom = (data, contacts) => {
	let rand = data[Math.floor(Math.random() * data.length)];
	if (!contacts.includes(rand)) {
		return rand;
	}
};


const sortByKey = (array, key) => {
  if (key === 'popularity') {
    return array.sort((a, b) => (a[key] > b[key] ? -1 : b[key] > a[key] ? 1 : 0));
  }
  else if (key === 'name') {
    return array.sort((a, b) => (a[key] > b[key] ? 1 : b[key] > a[key] ? -1 : 0));
  }
	
};


export { getRandom, sortByKey };
