<template>
  <div class="usuario-detalhe">
    <h3>Usuario Detalhe</h3>
    <hr />
    <p>
      <strong>Codigo2:</strong>
      {{id}}
    </p>
    <p>
      <strong>Codigo Params:</strong>
      {{$route.params.id}}
    </p>
    <router-link tag="button" primario :to="`/usuario/${id}/editar`" class="ml-2 mr-2">Editar</router-link>
    <router-link
      tag="button"
      primario
      :to="`/usuario/${$route.params.id}/editar`"
      query="{complete: true}"
      class="ml-2 mr-2"
    >Editar 2</router-link>
    <router-link
      tag="button"
      primario
      query="{complete: true}"
      :to="{name: 'editarUsuario', params: { id }, query: {complete: true}, hash: '#rodape'}"
      class="ml-2 mr-2"
    >Editar 3</router-link>
  </div>
</template>

<script>
export default {
  props: ["id"],
  beforeRouteEnter(to, from, next) {
    console.log("dentro do compoentne -> usuario detalhe");
    const autenticado = true;
    autenticado ? next() : next(false);
  }
};
</script>

<style>
</style>