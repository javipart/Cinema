import axios from "axios"
export const state = () => ({
    token: '',
    user: [],
    estado: false
})

export const mutations = {
    CambiarToken(state, token) {
        state.token = token;
    },
    cambiarUsuario(state, user) {
        state.user = user;
    },
    cambiarEstado(state, estado) {
        state.estado = estado;
    }
}

export const actions = {
    nuevoToken({ commit }, token) {
        commit('CambiarToken', token);
    },
    nuevoUsuario({ commit, state }) {
        commit('cambiarEstado', true);
        console.log('listo ok');
        this.$router.push('/inicio');
    },
    salir({ commit, state }){
        commit('cambiarEstado', false);
        console.log('listo ok');
        this.$router.push('/');
    }
}

export const getters = {
    token(state) {
        return state.token;
    },
    user(state) {
        return state.user;
    },
    islogin(state) {
        return state.estado;
    }
}