<template>
  <Painel titulo="Resumo" roxo>
    <div class="resumo">
      <span>
        Total:
        <strong>{{ total | dinheiro }}</strong>
      </span>
      <br />
      <span>
        Total:
        <strong>{{ valorTotal | dinheiro }}</strong>
      </span>
      <br />
      <span>
        Total:
        <strong>{{ total2 | dinheiro }}</strong>
      </span>
      <hr />
      <button>Finalizar!</button>
    </div>
  </Painel>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({ total2: "valorTotal", valorTotal: "valorTotal" }),
    // total() {
    //   return this.produtos
    //     .map(p => p.quantidade * p.preco)
    //     .reduce((total, atual) => total + atual, 0);
    // },
    total() {
      return this.$store.getters.valorTotal;
    }
    // produtos() {
    //   return this.$store.state.produtos;
    // }
  }
};
</script>

<style>
table {
  width: 100%;
}

td {
  border-top: 1px solid #eee;
  width: 33%;
}
</style>
