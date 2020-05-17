new Vue({
	el: '#desafio',
	data: {
		valor: 0
	},
	computed: {
		resultado(novo, antigo) {
			return this.valor == 37 ? 'Valor 37' : 'Valor diferente';
		}
	},
	watch: {
		resultado() {
			if (this.resultado == 'Valor 37') {
				setTimeout(() => {
					this.valor = 0;
				}, 2000);
			}
		}
	}
});
