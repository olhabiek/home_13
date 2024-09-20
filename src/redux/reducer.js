import { SET_FILTER } from "./actions";

const initialState = {
  users: [
    { id: 1, name: "Alice" },
    { id: 2, name: "Charlie" },
    { id: 3, name: "David" },
  ],
  filterValue: "",
};

const userReducer = (state = initialState, { type, payload }) => {
  if (type === SET_FILTER) {
    return {
      ...state,
      filterValue: payload,
    };
  }
  return state;
};

export default userReducer;
