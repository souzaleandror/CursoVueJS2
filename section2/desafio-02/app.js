new Vue({
	el: '#desafio',
	data: {
		valor: ''
	},
	methods: {
		exibir() {
			alert('olha eu aqui');
		},
		teste(ev) {
			this.valor = ev.target.value;
		}
	}
});
