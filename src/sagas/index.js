import { all, takeLatest } from 'redux-saga/effects';
import { recuperarPersonagensSaga } from './Characters';
import { Types } from '../redux/Characters/Types';

export function* rootSaga() {

  return yield all([
    takeLatest(Types.RECUPERAR_PERSONAGENS_REQUEST, recuperarPersonagensSaga),
  ]);
}
