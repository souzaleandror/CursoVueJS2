import Vue from 'Vue'

export default new Vue({
  methods: {
    setUsuarioSelecionado(usuario) {
      this.$emit('usuarioSelecionado', usuario)
    },
    onUsuarioSeleionado(callback) {
      
    }
  }
})