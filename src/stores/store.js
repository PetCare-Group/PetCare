import { createStore } from 'vuex';

const store = createStore({
    state: {
        token: localStorage.getItem('jwtToken') || '', // Inicialmente, obtener el token del localStorage
    },
    mutations: {
        setToken(state, token) {
            state.token = token; // Actualizar el token en el estado del store
        },
    },
    actions: {
        saveToken({ commit }, token) {
            localStorage.setItem('jwtToken', token); // Guardar el token en el localStorage
            commit('setToken', token); // Actualizar el token en el estado del store
        },
    },
});

export default store;
