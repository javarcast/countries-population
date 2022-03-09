import { createStore } from 'vuex'

export default createStore({
  state: {
    countries: [],
    
  },
  getters: {
    topCountries(state) {
      return state.countries.sort((a,b) => a.population < b.population ? 1: -1);
    },
    filterCountries: (state) => ({region = '', text = ''}) => {
      return state.countries
              .sort((a,b) => a.population < b.population ? 1: -1)
              .filter((country) => {
                return country.name.common.toLowerCase().includes(text.toLowerCase()) 
                && country.region.includes(region);
              })

    },
  },
  mutations: {
    SET_COUNTRIES(state, payload) {
      state.countries = payload;
    },
  },
  actions: {
    async GET_COUNTRIES({ commit }) {
      try {
        const resp = await fetch('api.json');
        const countries = await resp.json();

        commit('SET_COUNTRIES', countries);
      } catch (error) {
        console.error(error);
      }
    }
  },
  modules: {
  }
})
