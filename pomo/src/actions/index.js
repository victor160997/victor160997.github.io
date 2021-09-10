const GET_INFO_TIME = 'GET_INFO_TIME';
const RESET_CRO = 'RESET_CRO';

export const getInfoTimeAction = (payload) => ({
  type: GET_INFO_TIME,
  payload,
});

export const resetAction = (payload) => ({
  type: RESET_CRO,
  payload,
});