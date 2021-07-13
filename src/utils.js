export const randomNumberGenerator = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min
}

export const compareStrings = (a, b) => {
    console.log(a, b)
    let nameA = a.toUpperCase()
    let nameB = b.toUpperCase()
    return nameA.localeCompare(nameB)
}