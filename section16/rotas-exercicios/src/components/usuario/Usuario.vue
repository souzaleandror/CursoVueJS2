<template>
  <div class="usuario">
    <h2>Usuarios</h2>
    <hr />
    <router-view></router-view>
    <hr />
    <div v-if="id">
      <h1>Pertence ao Usuario</h1>
      <p>
        <strong>Codigo:</strong>
        {{id}}
      </p>
      <button sucesso @click="irParainicio">Voltar</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["id"],
  // data() {
  //   return {
  //     id: this.$route.params.id
  //   };
  // },
  // watch: {
  //   $route(to, from) {
  //     this.id = to.params.id;
  //   }
  // },
  methods: {
    irParainicio() {
      this.$router.push("/");
      this.$router.push({ path: "/" });
      this.$router.push({ name: "inicio" });
    }
  }
};
</script>

<style>
</style>