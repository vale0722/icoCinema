import axios from "axios";

export const service = axios.create({
  baseURL: `${import.meta.env.VITE_APP_URL_ICO_API}/api`,
  headers: { "content-type": "multipart/form-data" },
});

export const _updateAuth = (id) => (service.defaults.headers.Authorization = 'Bearer ' + id);

const handleResponse = (response) => {
  return response.data.data;
};

export const all = (url) => (scope) =>
  service.get(url).then((response) => handleResponse(response, scope));

export const one = (url) => (id, scope) =>
  service
    .get(`${url}/${id}`)
    .then((response) => handleResponse(response, scope));

export const create = (url) => (body, scope) =>
  service.post(url, body).then((response) => handleResponse(response, scope));

export const update = (url) => (id, body, scope) =>
  service
    .patch(`${url}/${id}`, body)
    .then((response) => handleResponse(response, scope));

export const destroy = (url) => (id) => service.delete(`${url}/${id}`);
