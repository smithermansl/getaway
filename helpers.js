export const tally = (arr) => {
    return arr.reduce((acc, curr) => {
    if (acc[curr]) acc[curr]++
    else acc[curr] = 1
    return acc
  }, {})
}

export const findMax = (obj) => {
  let max = 0
  for (var key in obj) {
    if (obj[key] > max) max = +key
  }
  return max
}
