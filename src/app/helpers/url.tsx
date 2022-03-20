import { ExtendedEndPoints, QueryParams } from '../models';

const apiKey = process.env.REACT_APP_MARVEL_API_PUBLIC_KEY;
const hash = process.env.REACT_APP_MARVEL_API_HASH_STRING;
const apiUrl = 'https://gateway.marvel.com:443/v1/public/characters';

export const urlHelpers = {
  getCharacters: (queryParams: QueryParams) => {
    const {
      pagination: { page, sizePerPage },
      filter,
      search,
      order,
    } = queryParams;
    const offset = (page - 1) * sizePerPage;
    let url = `${apiUrl}?limit=${sizePerPage}&offset=${offset}&ts=1&apikey=${apiKey}&hash=${hash}`;
    if (filter) {
      url += `&${Object.keys(filter)
        .map((key) => `${key}=${filter[key]}`)
        .join('&')}`;
    }
    if (search) {
      url += `&nameStartsWith=${search}`;
    }
    if (order) {
      url += `&orderBy=${order}`;
    }
    return url;
  },
  getCharacterById: (id: number) => {
    return `${apiUrl}/${id.toString()}?ts=1&apikey=${apiKey}&hash=${hash}`;
  },
  getCharacterExtendedDetail: (id: number, extendedEndpoint: ExtendedEndPoints) => {
    return `${apiUrl}/${id}/${extendedEndpoint}?ts=1&apikey=${apiKey}&hash=${hash}`;
  },
};
