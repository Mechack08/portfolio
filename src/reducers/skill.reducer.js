import { GET_SKILLS } from "../actions/background.action";

const initialState = {};

export default function skillReducer(state = initialState, action) {
  switch (action.type) {
    case GET_SKILLS:
      return action.payload;
    default:
      return state;
  }
}
