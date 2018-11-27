
export default (state = [], { type, payload }) => {
    switch (type) {
      case "GET_USER":
        return [...state, payload]; //users array in state now accumulates new objects inside it
      default:
        return state;
    }
  };