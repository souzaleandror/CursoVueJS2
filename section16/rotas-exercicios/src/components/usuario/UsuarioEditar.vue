<template>
  <div class="usuario-editar">
    <h3>Usuario Editar</h3>
    <hr />
    <p>
      <strong>Codigo:</strong>
      {{id}} / {{$route.params.id}}
    </p>
    <p>
      <strong>Completo:</strong>
      {{$route.query.complete}} / {{$route.query.complete ? 'Sim' : 'Nao'}}
    </p>
    <button primario @click="confirmou = true">Confirmar</button>
    <div id="rodape">
      <h3>Roda Pe</h3>
    </div>
  </div>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      confirmou: false
    };
  },
  methods: {
    confirmar() {}
  },
  beforeRouteLeave(to, from, next) {
    if (this.confirmou) {
      next();
    } else {
      if (confirm("Tem Certeza?")) {
        next();
      } else {
        next(false);
      }
    }
  }
};
</script>

<style>
#rodape {
  margin-top: 400px;
}
</style>