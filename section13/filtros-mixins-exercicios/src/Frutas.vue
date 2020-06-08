<template>
    <div>
      <ul>
        <li v-for="f in frutas" :key="f">{{f}}</li>
      </ul>
      <input type="text" v-model="fruta" @keydown.enter="add">
      <hr>
    </div>
</template>

<script>
export default {
  data() {
    return {
      fruta: '',
      frutas: ['banana', 'Maca', 'laranja']
    }
  },
  methods: {
    add() {
      this.frutas.push(this.fruta);
      this.fruta = ''
    }
  }
}
</script>

<style>

</style>