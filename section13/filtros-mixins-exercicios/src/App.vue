<template>
  <div id="app">
    <h1>Filtros & Mixins</h1>
    <hr />
    <p>{{ cpf }}</p>
    <p>{{ cpf | cpf }}</p>
    <p>{{ cpf | cpf | inverter }}</p>
    <p>{{ "60070080090" | cpf | inverter }}</p>
    <p>{{ "60070080090" | cpf | inverter }}</p>
    <input type="text" :value="cpfDoAluno | cpf | inverter" />
		<hr>
		<Frutas></Frutas>
		<hr>
		<ul>
			<li v-for="f in frutas" :key="f">{{f}}</li>
		</ul>
		<input type="text" v-model="fruta" @keydown.enter="add">
		<hr>
  </div>
</template>

<script>
import FrutasMixin from './FrutasMixin.js';
import Frutas from './Frutas.vue';

export default {
	components: {Frutas},
	mixins: [FrutasMixin],
  filters: {
    cpf(valor) {
      //const arr = valor.split("");
      const arr = `${valor}`.split("");
      arr.splice(3, 0, ".");
      arr.splice(7, 0, ".");
      arr.splice(11, 0, "-");
      return arr.join("");
    }
  },
  data() {
    return {
      cpf: "60070080090",
      cpfDoAluno: "60012340090"
    };
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-size: 2.5rem;
}

input {
  font-size: 2.5rem;
}
</style>
