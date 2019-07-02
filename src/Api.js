import axios from 'axios'

// should be the URL and port of the Spring Boot server.
const SERVER_URL = 'http://localhost:9000';
const instance = axios.create({
  baseURL: SERVER_URL,
  timeout: 1000
});

// The CRUD (Create, Read, Update, and Delete) functions are defined here.
// This module would be pointless without the transformResponse options I'm setting.
// This is just used to normalize the data in the _embeddedresponse property.

export default {
  // (C)reate
  createNew: (text, completed) => instance.post('todos', {title: text, completed: completed}),
  // (R)ead
  getAll: () => instance.get('todos', {
    transformResponse: [function (data) {
      return data? JSON.parse(data)._embedded.todos : data;
    }]
  }),
  // (U)pdate
  updateForId: (id, text, completed) => instance.put('todos/'+id, {title: text, completed: completed}),
  // (D)elete
  removeForId: (id) => instance.delete('todos/'+id)
}
