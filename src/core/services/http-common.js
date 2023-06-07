import axios from 'axios';

export default axios.create({
   //baseURL: 'http://localhost:44396/api/v1',
   baseURL: 'http://localhost:5013/api/v1',
   headers: { 'Content-type': 'application/json' }
});
