<template>
  <div class="componente">
    <h2>As Informações de Usuário</h2>
    <p>Vários detalhes...</p>
    <p>
      Nome do Usuario:
      <strong>{{ nome }}</strong>
      <br />
      <strong>{{ idade }}</strong>
      <br />
      <strong>{{ inverterNome() }}</strong>
      <br />
      <strong>{{ nomeAlternativo }}</strong>
    </p>
    <button @click="reiniciarNome">Reiniciar Nome</button>
    <button @click="reiniciaFn()">Reiniciar Nome (Callback)</button>
  </div>
</template>

<script>
import barramento from "@/barramento";
export default {
  //props: ["nome"],
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
  data() {
    return {
      //nome: ""
      nomeAlternativo: this.nome
    };
  },
  methods: {
    inverterNome() {
      return this.nome
        .split("")
        .reverse()
        .join("");
    },
    reiniciarNome() {
      const antigo = this.nome;
      this.nome = "Pedro";
      //this.$emit("nomeMudou", this.nome );
      this.$emit("nomeMudou", { novo: this.nome, antigo: antigo });
    }
  },
  created() {
    barramento.$on("idadeMudo", idade => {
      this.idade = idade;
    });

    //barramento.quandoIdadeMudar()
  }
};
</script>

<style scoped>
.componente {
  flex: 1;
  background-color: #ec485f;
  color: #fff;
}
</style>
