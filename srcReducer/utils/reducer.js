import { INCREMENT_COUNT, RESET_COUNT } from "./actions";

export default function reducer(state, action) {
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

    default:
      return state;
  }
}
