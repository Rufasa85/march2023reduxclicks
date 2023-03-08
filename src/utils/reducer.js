import { INCREMENT_COUNT, RESET_COUNT, UPDATE_NAME } from "./actions";

export default function countReducer(state, action) {
  switch (action.type) {
    case INCREMENT_COUNT:
      return {
        ...state,
        count: state.count + 1,
      };
    case RESET_COUNT:
      return {
        ...state,
        count: 0,
      };
    case UPDATE_NAME:
      return {
        ...state,
       name:action.payload || ""
      };
    default:
      return state;
  }
}
