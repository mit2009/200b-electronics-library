/**
 * When given a column letter,
 * This function returns the column's corresponding index if it was in an array.
 * @param {string} input - the column letter
 */
export function toColIndex(input: string) {
  var col = input.toUpperCase().trim();
  var answer = 0;
  for (var i = 0; i < col.length; i++) {
    answer += (col.charCodeAt(i) - 64) * 26 ** (col.length - (i + 1));
  }
  return answer - 1;
}
