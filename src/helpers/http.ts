import { from as fromPromise } from 'rxjs';
import 'whatwg-fetch';

const get = (obj, path, defaultValue) =>
  path.split('.').reduce((a, c) => (a && a[c] ? a[c] : defaultValue || null), obj);

const getJSON = input => {
  let result = {};
  try {
    result = JSON.parse(input);
  } catch (e) {
    result = {};
  }
  return result;
};

const respond = async response => {
  const json = getJSON(await response.text());
  const defaultError = 'An unknown error has occurred';
  if (!`${response.status}`.startsWith('2') && response.status !== 0) {
    const error = get(json, 'apiError.message', defaultError) || get(json, 'error', defaultError);
    throw new Error(error);
  }
  return json;
};

export const getData = url => {
  return fromPromise(fetch(url).then(response => respond(response)));
};
