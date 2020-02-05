import { Types } from '../Types';

const initialState = {
  info: {
    count: 0,
    pages: 0,
    next: '',
    prev: '',
  },
  results: [],
  isLoading: false,
  hasError: false,
  errorMsg: '',
};

function charactersRetrieveReducer(state = initialState, action) {
  const { info, results } = action.payload || initialState;
  switch (action.type) {
    case Types.RECUPERAR_PERSONAGENS_REQUEST:
      return {
        ...state,
        isLoading: true,
        hasError: false,
        errorMsg: '',
      }
    case Types.RECUPERAR_PERSONAGENS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        hasError: false,
        errorMsg: '',
        info,
        results,
      }
    case Types.RECUPERAR_PERSONAGENS_FAILURE:
      return {
        ...state,
        isLoading: false,
        hasError: false,
        errorMsg: action.payload,
      }
    default:
      return state
  }
}

export { charactersRetrieveReducer };
