<template>
  <div class="componente">
    <h2>Alterar os Dados de Usuário</h2>
    <p>Edite as informações</p>
    <p>
      Idade e:
      <strong>{{ idade }}</strong>
    </p>
    <button @click="alterarIdade">Alterar Idade</button>
  </div>
</template>

<script>
import barramento from "@/barramento";

export default {
  props: {
    nome: {
      type: String,
      required: false,
      //default: "teste"
      default: function() {
        return Array(10)
          .fill(0)
          .join(",");
      }
    },
    reiniciaFn: Function,
    idade: Number
  },
  methods: {
    alterarIdade() {
      //this.idade = 30;
      this.idade += 1;
      this.$emit("idadeMudou", 33);
      barramento.$emit("idadeMudo", this.idade);
    }
  }
};
</script>

<style scoped>
.componente {
  flex: 1;
  background-color: #98b99a;
  color: #fff;
}
</style>
