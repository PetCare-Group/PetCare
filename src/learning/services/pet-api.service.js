import http from "../../core/services/http-common";

export class PetApiService {
  getUser() {
    return http.get("/user");
  }

  getPet() {
    return http.get("/pet");
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

  delete(id) {
    return http.delete(`/pet/${id}`);
  }

  GetUSerService(type) {
    return http.get(`/workers?type=${type}`);
  }

  getWorkers() {
    return http.get(`/services`);
  }
}
