// export default (state=[], {type, payload})=>{
//     if (type === "GET_POSTS")  return payload;
//     //else
//     return state;
// }

export default (state = [], { type, payload }) => {
  switch (type) {
    case "GET_POSTS":
      return payload;
    default:
      return state;
  }
};
