
// You should implement your task here.

module.exports = function towelSort(matrix) {
  let lol = [];
  if (matrix == undefined) return []
  for (let i = 0; i < matrix.length; i++) {
    if (i % 2 !== 0) {
      lol = lol.concat(matrix[i].reverse());
    } else {
      lol = lol.concat(matrix[i]);
    }

  }
  return lol
}
