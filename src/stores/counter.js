
  
export default new Vuex.Store({
  state: {
    valor: null,
    miDia: ' ',
    miHora: ' '
  },
  mutations: {
    setValor( state, nuevoValor) {
      state.valor = nuevoValor;
      
    },

    actualizarVariableDia(state, valor) {
      state.miDia = valor;
    },

    actualizarVariableHora(state, valor) {
      state.miHora = valor;
    }
    
  }
});

