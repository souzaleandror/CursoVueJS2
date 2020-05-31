import Vue from 'vue';
export default new Vue({
  methods: {
    alterarIdade(idade) {
      this.$emit('idadeMudo', idade)
    },
    quandoIdadeMudar(callback) {
      this.$on('idadeM', callback);
    }
  }
});
