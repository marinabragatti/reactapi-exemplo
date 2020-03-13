import axios from 'axios';

const api = axios.create({ baseURL: 'https://rocketseat-node.herokuapp.com/api'});
//https://casashow-api-marina.herokuapp.com/

export default api;