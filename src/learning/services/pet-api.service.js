import http from "../../core/services/http-common";
import axios from "axios";

export class PetApiService {
  getUser() {
    return http.get("/users");
  }
  
  PostAuthentication (data)
  {
    return http.post("/users/sign-in",data)
    
  }
  getPet(userId) {
    return http.get(`/pet/${userId}/pet`);
  }

  getUserById(id,token) {
    return axios({
      method: 'get',
      url: `http://localhost:5013/api/v1/users/${id}`,
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
        .then(response => {
          console.log(response.data)

          return response.data;
        })
        .catch(err => {
          console.log(err);
          throw err;
        });
  }

  findUserByMail(email) {
    return http.get(`/user?email=${email}`);
  }

  create(data) {
    return http.post("/pet", data);
  }

  update(name, data) {
    return http.put(`/pet/${name}`, data);
  }

  getPetId(id){
    return http.get(`/pet/${id}`);
    
}
  delete(id) {
    return http.delete(`/pet/${id}`);
  }

  GetUSerService(type) {
    return http.get(`/workers?type=${type}`);
  }

  getWorkers() {
    return http.get(`/services`);
  }
  
  getWorkerId(id){
    
    return http.get(`/services/${id}`);
}
}
