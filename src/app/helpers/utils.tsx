import { QueryParams } from '../models';

export const getRandomInt = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

export const uuidv4 = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

export const camelCaseSplit = (str: string) => {
  return str.replace(/([A-Z])/g, ' $1').replace(/^./, function (str) {
    return str.toUpperCase();
  });
};

export const uuid = () => {
  const head = Date.now().toString(36);
  const tail = Math.random().toString(36).substr(2);
  return head + tail;
};

export const getApiUrl = (queryParams: QueryParams) => {
  const {
    pagination: { page, sizePerPage },
    filter,
    search,
    order,
  } = queryParams;
  const offset = (page - 1) * sizePerPage;
  const apiKey = process.env.REACT_APP_MARVEL_API_PUBLIC_KEY;
  const hash = process.env.REACT_APP_MARVEL_API_HASH_STRING;
  let url = `https://gateway.marvel.com:443/v1/public/characters?limit=${sizePerPage}&offset=${offset}&ts=1&apikey=${apiKey}&hash=${hash}`;
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
};
