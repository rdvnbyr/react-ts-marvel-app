import { actionTypes } from './actionTypes';
import {
  QueryParams,
  Character,
  CharactersExtendedData,
  ExtendedEndPoints,
} from '../../models';

// Get all characters with query params (pagination, filter, search, order)
export const getCharactersRequest = (queryParams: QueryParams) => ({
  type: actionTypes.GET_CHARACTERS_REQUEST,
  payload: { queryParams },
});
export const getCharactersSuccess = (
  characters: Character[],
  totalCharacters: number
) => ({
  type: actionTypes.GET_CHARACTERS_SUCCESS,
  payload: { characters, totalCharacters },
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

// Get character extended detail
export const getCharacterExtendedDetailRequest = (
  id: number,
  extendedEndpoint: ExtendedEndPoints
) => ({
  type: actionTypes.GET_CHARACTER_EXTENDED_DETAIL_REQUEST,
  payload: { id, extendedEndpoint },
});
export const getCharacterExtendedDetailSuccess = (
  extendData: CharactersExtendedData[]
) => ({
  type: actionTypes.GET_CHARACTER_EXTENDED_DETAIL_SUCCESS,
  payload: { extendData },
});
export const getCharacterExtendedDetailFailure = (error: any) => ({
  type: actionTypes.GET_CHARACTER_EXTENDED_DETAIL_FAILURE,
  payload: { error },
});

// Clear redux store
export const clearCharacterExtendedDetail = () => ({
  type: actionTypes.CLEAR_CHARACTER_EXTENDED_DETAIL,
});
