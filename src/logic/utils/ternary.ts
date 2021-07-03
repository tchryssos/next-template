const ternary = (bool: boolean, truthy: unknown, falsey: unknown) => {
  if (bool) {
    return truthy;
  }
  return falsey;
};

export default ternary;
