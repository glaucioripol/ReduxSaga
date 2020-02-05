import { Types } from '../Types';

export function recuperarPersonagensRequest() {
  return {
    type: Types.RECUPERAR_PERSONAGENS_REQUEST,
    payload: '',
  };
}

export function recuperarPersonagensSuccess({ info, results }) {
  return {
    type: Types.RECUPERAR_PERSONAGENS_SUCCESS,
    payload: { info, results },
  };
}

export function recuperarPersonagensFailure(errorMessage) {
  return {
    type: Types.RECUPERAR_PERSONAGENS_FAILURE,
    payload: errorMessage,
  };
}
