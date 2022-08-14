import { combineReducers } from "redux";
import backgroundReducer from "./background.reducer";
import skillReducer from "./skill.reducer";
import userReducer from "./user.reducer";

export default combineReducers({
  backgroundReducer,
  skillReducer,
  userReducer,
});
