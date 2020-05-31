<template>
  <div class="contadores">
    <app-contador></app-contador>
    <app-contadoor></app-contadoor>
    <app-contadoor v-for="c in 5" :key="c" />
  </div>
</template>

<script>
import Contador from "./Contador.vue";

export default {
  components: {
    "app-contadoor": Contador
  }
};
</script>

<style>
</style>