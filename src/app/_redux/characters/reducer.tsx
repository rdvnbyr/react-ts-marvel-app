import { Character } from '../../models';
import { actionTypes } from './actionTypes';

interface IAppState {
  characters: Character[];
  character: Character | null;
  isLoading: boolean;
  error: any;
}

const initialState: IAppState = {
  characters: [],
  character: null,
  isLoading: false,
  error: null,
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
        character: action.payload.character,
      };
    }
    case actionTypes.GET_CHARACTER_FAILURE: {
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
      };
    }
    default:
      return state;
  }
};
