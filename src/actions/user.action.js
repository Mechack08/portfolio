import axios from "axios";

export const GET_USER = "GET_USER_ID";

export const getUser = () => {
  return async (dispatch) => {
    return axios
      .get(`${process.env.REACT_APP_API_URL}account/get-infos`)
      .then((res) => dispatch({ type: GET_USER, payload: res.data }))
      .catch((e) => console.log(e));
  };
};
