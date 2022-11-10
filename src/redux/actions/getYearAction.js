import axios from "axios";

import {
    GET_YEAR_REQUEST,
    GET_YEAR_SUCCESS,
    GET_YEAR_FAILURE,
  } from "../types/getYearType";
  
export const getYearAction = (history) => async (dispatch) => {
  try {
    dispatch(getYearRequest());
    const Url ='https://agentapi.mobicash.rw/api/agent/utilities/cbhi/rest/v.4.14.01/year-of-collection'
   const res = await axios.get(Url);
 if(res.data.responseCode===100){
  dispatch(getYearSuccess(res.data.data));
 }

   
  } catch (err) {
    if (err.response) {
      const errorMessage = await err.response.data.message;
      dispatch(getYearFailure(errorMessage));
    } else {
      dispatch(getYearFailure("Network  Error"));
    }
  }
};

export const getYearRequest = () => {
  return {
    type:  GET_YEAR_REQUEST,
  };
};

export const getYearSuccess = (years) => {
  return {
    type:  GET_YEAR_SUCCESS,
    payload: years,
  };
};
export const getYearFailure = (error) => {
  return {
    type:  GET_YEAR_FAILURE,
    payload: error,
  };
};