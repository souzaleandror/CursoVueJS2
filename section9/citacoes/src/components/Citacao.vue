<template>
  <div class="citacao">
    {{ texto }}
    <slot></slot>
    <slot></slot>
    <slot></slot>
    <slot name="autor"></slot>
    <slot name="texto"></slot>
    <slot name="fonte"></slot>
  </div>
</template>

<script>
export default {
  props: ["texto"],
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
.citacao {
  border: 1px solid #ddd;
  background-color: rgba(0, 0, 0, 0.1);
  padding: 25px;
  max-width: 450px;
}

h1 {
  color: red !important;
}
</style>
