import { GET_PORTFOLIOS } from "../actions/portfolio.action";

const initialState = {};

export default function portfolioReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PORTFOLIOS:
      return action.payload;
    default:
      return state;
  }
}
