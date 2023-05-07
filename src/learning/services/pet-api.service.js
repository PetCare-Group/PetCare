import http from "../../core/services/http-common";

export class PetApiService {
  getUser() {
    return http.get("/user");
  }

  getPet() {
    return http.get("/dogs");
  }

  findUserByMail(email) {
    return http.get(`/user?email=${email}`);
  }

  create(data) {
    return http.post("/dogs", data);
  }

  update(id, data) {
    return http.put(`/dogs/${id}`, data);
  }

  delete(id) {
    return http.delete(`/dogs/${id}`);
  }

  GetUSerService(type) {
    return http.get(`/workers?type=${type}`);
  }

  getWorkers() {
    return http.get(`/workers`);
  }
}
