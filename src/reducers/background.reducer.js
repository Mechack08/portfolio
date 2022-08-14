import { GET_BACKGROUND } from "../actions/background.action";

const initialState = {};

export default function backgroundReducer(state = initialState, action) {
  switch (action.type) {
    case GET_BACKGROUND:
      return action.payload;
    default:
      return state;
  }
}
