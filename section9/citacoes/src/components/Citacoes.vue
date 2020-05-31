<template>
  <div class="citacoes">
    <Citacao :texto="citacoes[indice].texto">
      <h1>{{ citacoes[indice].autor }}</h1>
      <p>{{ citacoes[indice].texto }}</p>
      <h6>{{ citacoes[indice].fonte }}</h6>
      <h1 slot="autor">{{ citacoes[indice].autor }}</h1>
      <p slot="texto">{{ citacoes[indice].texto }}</p>
      <h6 slot="fonte">{{ citacoes[indice].fonte }}</h6>
    </Citacao>
    {{ numero }} {{ indice }}
    <p>{{ citacoes[indice].texto }}</p>
    <span>
      <button @click="numero--">&lt;</button>
      <button @click="numero++">&gt;</button>
    </span>
  </div>
</template>

<script>
import Citacao from "./Citacao";

export default {
  components: { Citacao },
  data() {
    return {
      numero: 0,
      citacoes: [
        {
          fonte: "Jornal do Empreendedor",
          texto:
            "Lembre-se sempre que você é absolutamente único. Assim como todos os outros.",
          autor: "Margaret Mead"
        },
        {
          fonte: "Frases de Mãe",
          texto: "Isso não é um quarto, é um chiqueiro.",
          autor: "Roberta"
        },
        {
          fonte: "Frases de Pai",
          texto: "Vou contar até 3! 1, 2, 2...",
          autor: "Gustavo"
        }
      ]
    };
  },
  computed: {
    indice() {
      return Math.abs(this.numero % 3);
    }
  },
  created() {
    console.log('Created');
  },
  activated() {
    console.log('activated');
  },
  desactivated() {
    console.log('desactivated');
  },
    destroyed() {
    console.log('destroyed');
  },
};
</script>

<style scoped>
.citacoes {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.h1 {
  color: green !important;
}
</style>
