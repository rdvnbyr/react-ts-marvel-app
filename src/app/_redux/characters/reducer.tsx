import { Character, CharactersExtendedData } from '../../models';
import { actionTypes } from './actionTypes';

interface IAppState {
  characters: Character[] | [];
  character: Character;
  isLoading: boolean;
  error: any;
  extendRequestLoading: boolean;
  extendRequestError: any;
  characterExtendedDetail: CharactersExtendedData[] | [];
  totalCharacters: number;
}

const initialState: IAppState = {
  characters: [],
  character: {
    id: 0,
    name: '',
    description: '',
    thumbnail: {
      path: '',
      extension: '',
    },
  } as Character,
  totalCharacters: 0,
  isLoading: false,
  error: null,
  extendRequestLoading: false,
  extendRequestError: null,
  characterExtendedDetail: [],
};

export const characterReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.GET_CHARACTER_REQUEST:
    case actionTypes.GET_CHARACTERS_REQUEST: {
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    }
    // get all characters
    case actionTypes.GET_CHARACTERS_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        characters: action.payload.characters,
        totalCharacters: action.payload.totalCharacters,
      };
    }
    case actionTypes.GET_CHARACTERS_FAILURE: {
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
      };
    }

    // get one character
    case actionTypes.GET_CHARACTER_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        character: action.payload.character[0],
      };
    }
    case actionTypes.GET_CHARACTER_FAILURE: {
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
      };
    }

    // get one character extended detail
    case actionTypes.GET_CHARACTER_EXTENDED_DETAIL_REQUEST: {
      return {
        ...state,
        extendRequestLoading: true,
        extendRequestError: null,
      };
    }
    case actionTypes.GET_CHARACTER_EXTENDED_DETAIL_SUCCESS: {
      return {
        ...state,
        extendRequestLoading: false,
        extendRequestError: null,
        characterExtendedDetail: action.payload.extendData,
      };
    }
    case actionTypes.GET_CHARACTER_EXTENDED_DETAIL_FAILURE: {
      return {
        ...state,
        extendRequestLoading: false,
        extendRequestError: action.payload.error,
        characterExtendedDetail: [],
      };
    }

    // Clear redux store
    case actionTypes.CLEAR_CHARACTER_EXTENDED_DETAIL: {
      return {
        ...state,
        characterExtendedDetail: [],
        extendRequestError: null,
      };
    }

    default:
      return state;
  }
};
