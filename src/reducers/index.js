import { combineReducers } from "redux";
import backgroundReducer from "./background.reducer";
import skillReducer from "./skill.reducer";
import userReducer from "./user.reducer";
import portfolioReducer from "./portfolio.reducer";

export default combineReducers({
  backgroundReducer,
  skillReducer,
  userReducer,
  portfolioReducer,
});
