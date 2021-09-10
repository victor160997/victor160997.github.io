const INITIAL_STATE = {
  timeWork: 25,
  pausaCurta: 5,
  pausaLonga: 30,
  ciclos: 8,
  ativo: false,
}

const GET_INFO_TIME = 'GET_INFO_TIME';
const RESET_CRO = 'RESET_CRO';

const time = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case GET_INFO_TIME:
      return {
        ...state,
        time: action.payload,
      }
    case RESET_CRO:
      return {
        ...state,
        time: action.payload,
      }  
    default:
      return state;
  }
}

export default time;
