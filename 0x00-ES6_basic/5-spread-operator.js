/* Using spread syntax to concatenate 2 arrays. */
export default function concatArrays(array1, array2, string) {
  return [...array1, ...array2, ...string];
}
