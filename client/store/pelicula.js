export const state = () => ({
    movieId: '',
})

export const mutations = {
    movies(state, movieId) {
        state.movieId = movieId;
    },
}

export const actions = {
    nuevomovieId({ commit }, movieId) {
        movie('CambiarToken', movieId);
    }
}

export const getters = {
    movieId(state) {
        return state.movieId;
    }
}