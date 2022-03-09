import { actionTypes } from './actionTypes';
import { QueryParams, Character } from '../../models';

// Get all characters with query params (pagination, filter, search, order)
export const getCharactersRequest = (queryParams: QueryParams) => ({
  type: actionTypes.GET_CHARACTERS_REQUEST,
  payload: { queryParams },
});
export const getCharactersSuccess = (characters: Character[]) => ({
  type: actionTypes.GET_CHARACTERS_SUCCESS,
  payload: { characters },
});
export const getCharactersFailure = (error: any) => ({
  type: actionTypes.GET_CHARACTERS_FAILURE,
  payload: { error },
});

// Get character by id
export const getCharacterRequest = (id: number) => ({
  type: actionTypes.GET_CHARACTER_REQUEST,
  payload: { id },
});
export const getCharacterSuccess = (character: Character) => ({
  type: actionTypes.GET_CHARACTER_SUCCESS,
  payload: { character },
});
export const getCharacterFailure = (error: any) => ({
  type: actionTypes.GET_CHARACTER_FAILURE,
  payload: { error },
});
