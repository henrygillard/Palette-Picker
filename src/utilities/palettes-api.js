import sendRequest from './send-request';

const BASE_URL = '/api/palettes';

export function getAll() {
  return sendRequest(BASE_URL);
}

export function getById(id) {
  return sendRequest(`${BASE_URL}/${id}`);
}

export function create(paletteData) {
    return sendRequest(BASE_URL, 'POST', paletteData)
}

export function deletePalette(palette) {
  return sendRequest(`${BASE_URL}`, 'DELETE', palette)
}