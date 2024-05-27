/* Using rest parameter to return number of arguments passed. */
export default function returnHowManyArguments(...args) {
  return args.length;
}
