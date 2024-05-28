// Returning a resolved promise with a given object.
export default function signUpUser(firstName, lastName) {
    return new Promise((resolve) => {
      resolve({
        firstName,
        lastName,
      });
    });
  }