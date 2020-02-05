import { call, put } from 'redux-saga/effects';

import { Api } from '../../service/Api';

import { recuperarPersonagensSuccess, recuperarPersonagensFailure } from '../../redux/Characters/Retrieve/actions';

export function* recuperarPersonagensSaga(action) {
  try {
    const response = yield call(Api.get);
    const { info, results } = response.data;
    yield put(recuperarPersonagensSuccess({ info, results }));
  } catch (error) {
    yield put(recuperarPersonagensFailure(error.message));
  }
}
