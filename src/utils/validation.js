export const validatePassword = (password, samePassword) => {
  if (password !== samePassword) {
    return false;
  }
  return true;
};

export const validateEmptyInput = (firstName, lastName) => {
  if (firstName.length < 1 || lastName.length < 1) {
    return false;
  }
  return true;
};
