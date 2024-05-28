// Writing and importing a function that returns failed promises.
export default function uploadPhoto(filename) {
    return Promise.reject(Error(`${filename} cannot be processed`));
  }