import { all } from 'redux-saga/effects';

import { charactersSaga } from './characters/saga';

export function* rootSaga() {
  yield all([charactersSaga()]);
}
