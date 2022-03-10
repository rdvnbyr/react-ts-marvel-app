import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import { getApiUrl } from '../../helpers';
import { ActionCreator, ExtendedEndPoints, QueryParams } from '../../models';
import {
  getCharacterExtendedDetailFailure,
  getCharacterExtendedDetailSuccess,
  getCharacterFailure,
  getCharactersFailure,
  getCharactersSuccess,
  getCharacterSuccess,
} from './actions';
import { actionTypes } from './actionTypes';

function* getCharacters(action: ActionCreator<QueryParams>): any {
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

function* getCharacterById(action: ActionCreator<{ id: number }>): any {
  try {
    const { id } = action.payload;
    const response = yield call(async () => {
      return await axios.get(
        `https://gateway.marvel.com:443/v1/public/characters/${id}?ts=1&apikey=${process.env.REACT_APP_MARVEL_API_PUBLIC_KEY}&hash=${process.env.REACT_APP_MARVEL_API_HASH_STRING}`
      );
    });
    yield put(getCharacterSuccess(response.data?.data?.results || []));
  } catch (error) {
    yield put(getCharacterFailure(error));
  }
}

function* getCharacterExtendedDetail(
  action: ActionCreator<{ id: number; extendedEndpoint: ExtendedEndPoints }>
): any {
  try {
    const { id, extendedEndpoint } = action.payload;
    const response = yield call(async () => {
      return await axios.get(
        `https://gateway.marvel.com:443/v1/public/characters/${id}/${extendedEndpoint}?ts=1&apikey=${process.env.REACT_APP_MARVEL_API_PUBLIC_KEY}&hash=${process.env.REACT_APP_MARVEL_API_HASH_STRING}`
      );
    });
    if (response.data.code === 200) {
      yield put(getCharacterExtendedDetailSuccess(response.data?.data?.results || []));
    } else {
      yield put(getCharacterExtendedDetailFailure(response.data));
    }
  } catch (error) {
    yield put(getCharacterFailure(error));
  }
}

export function* charactersSaga(): any {
  yield takeEvery(actionTypes.GET_CHARACTERS_REQUEST, getCharacters);
  yield takeEvery(actionTypes.GET_CHARACTER_REQUEST, getCharacterById);
  yield takeEvery(
    actionTypes.GET_CHARACTER_EXTENDED_DETAIL_REQUEST,
    getCharacterExtendedDetail
  );
}
