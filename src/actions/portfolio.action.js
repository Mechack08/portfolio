import axios from "axios";

export const GET_PORTFOLIOS = "GET_PORTFOLIOS";

export const getPortfolios = () => {
  return async (dispatch) => {
    return axios
      .get(`${process.env.REACT_APP_API_URL}/portfolios`)
      .then((res) => dispatch({ type: GET_PORTFOLIOS, payload: res.data }))
      .catch((e) => console.log(e));
  };
};
