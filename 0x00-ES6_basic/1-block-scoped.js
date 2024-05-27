/* eslint-disable no-unused-vars */
/* eslint-disable no-var */
/* Some modifications to the code supplied */
export default function taskBlock(trueOrFalse) {
  var task = false;
  var task2 = true;

  if (trueOrFalse) {
    const task = true;
    const task2 = false;
  }

  return [task, task2];
}
