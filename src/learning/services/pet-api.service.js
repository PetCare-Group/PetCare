import http from '../../core/services/http-common';

export class PetApiService {
    getUser() {
        return http.get('/user');
    }
    updateUser(id, data) {
        return http.put(`/user/${id}`, data);
    }
    deleteUser(id) {
        return http.delete(`/user/${id}`);
    }
    getWorkers(){
        return http.get('/workers');
    }

}
