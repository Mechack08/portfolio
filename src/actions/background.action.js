import axios from "axios";

export const GET_BACKGROUND = "GET_BACKGROUND";
export const GET_SKILLS = "GET_SKILLS";

export const getBackgrounds = () => {
  return async (dispatch) => {
    return axios
      .get(`${process.env.REACT_APP_API_URL}/backgrounds`)
      .then((res) => {
        dispatch({ type: GET_BACKGROUND, payload: res.data });
      })
      .catch((e) => console.log(e));
  };
};

export const getSkills = () => {
  return async (dispatch) => {
    return axios
      .get(`${process.env.REACT_APP_API_URL}/skills`)
      .then((res) => dispatch({ type: GET_SKILLS, payload: res.data }))
      .catch((e) => console.log(e));
  };
};
