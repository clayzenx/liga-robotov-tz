export default {
  state: { countries: [] },
  getters: {
    countries: state => { return state.countries } 
  },
  mutations: {
    updateCountries(state, payload) { state.countries = payload; }
  },
  actions: {
    fetchCountries({commit}){
      fetch('https://api.hh.ru/areas')
        .then(response => response.json())
        .then(result => commit('updateCountries', result))   
    }
  },
}