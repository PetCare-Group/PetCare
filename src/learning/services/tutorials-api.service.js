import http from '../../core/services/http-common';

export class TutorialsApiService {
    getUser() {
        return http.get('/user');
    }

    findUserByMail(email) {
        return http.get(`/user?email=${email}`);
    }

    create(data) {
        return http.post('/user', data);
    }

    updateUser(id, data) {
        return http.put(`/user/${id}`, data);
    }

    deleteUser(id) {
        return http.delete(`/user/${id}`);
    }


}
