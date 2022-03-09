import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import { getApiUrl } from '../../helpers';
import { ActionCreatorAction, QueryParams } from '../../models';
import { getCharactersFailure, getCharactersSuccess } from './actions';
import { actionTypes } from './actionTypes';

function* getCharacters(action: ActionCreatorAction<QueryParams>): any {
  try {
    const { queryParams } = action.payload;
    const response = yield call(async () => {
      return await axios.get(getApiUrl(queryParams));
    });
    yield put(getCharactersSuccess(response.data?.data?.results || []));
  } catch (error) {
    yield put(getCharactersFailure(error));
  }
}

export function* charactersSaga(): any {
  yield takeEvery(actionTypes.GET_CHARACTERS_REQUEST, getCharacters);
}
