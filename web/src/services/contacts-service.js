import http from './base-api-service';

const list = () => http.get('/contacts');

const details = (id) => http.get(`/contacts/${id}`);

const remove = (id) => http.delete(`/contacts/${id}`);

const create = (contact) => http.post('/contacts', contact)

const service = {
  list,
  remove,
  create,
  details
};
export default service;
