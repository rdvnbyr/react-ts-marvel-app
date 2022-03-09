import { QueryParams } from '../models';

export const getRandomInt = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

export const getApiUrl = (queryParams: QueryParams) => {
  const {
    pagination: { page, perPage },
    filter,
    search,
    order,
  } = queryParams;
  let url = `https://gateway.marvel.com:443/v1/public/characters?limit=${perPage}&offset=${
    (page - 1) * perPage
  }&ts=1&apikey=${process.env.REACT_APP_MARVEL_API_PUBLIC_KEY}&hash=${
    process.env.REACT_APP_MARVEL_API_HASH_STRING
  }`;
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
