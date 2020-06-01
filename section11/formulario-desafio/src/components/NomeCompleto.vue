<template>
  <div>
      <rotulo nome="Nome">
      <input type="text" v-model="value.nome" @input="alterarNome">
    </rotulo>
    <rotulo nome="Sobrenome">
      <input type="text" v-model="value.sobrenome" @input="alterarSobrenome">
    </rotulo>
  </div>
</template>

<script>
import Rotulo from './Rotulo.vue'
export default {
  components: {Rotulo},
  props: {
    value: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
    
    }
  },
  methods: {
    alterarNome(event) {
      this.$emit('input', {nome: event.target.value, sobrenome: this.value.sobrenome})
    },
    alterarSobrenome(event) {
      this.$emit('input', {nome: this.value.nome, sobrenome: event.target.value})
    },
  }
}
</script>

<style>

</style>