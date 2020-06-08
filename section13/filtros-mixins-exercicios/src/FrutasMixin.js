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