export default (state = [], { type, payload }) => {
  switch (type) {
    case "GET_POSTS":
      return payload;
    default:
      return state;
  }
};
