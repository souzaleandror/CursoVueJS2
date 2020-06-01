<template>
  <div id="app">
    <h1>Diretivas</h1>
    <hr />
    <p v-text="'Teste <strong>v-html</strong>'"></p>
    <p v-html="'Usando diretiva <strong>v-html</strong>'"></p>
    <hr />
    <p v-destaque>Usando diretiva personalizada</p>
    <p v-destaque2="'lightblue'">Usando diretiva personalizada</p>
    <p v-destaque2="cor">Usando diretiva personalizada</p>
    <p v-destaque3="cor3">Usando diretiva personalizada</p>
    <p v-destaque3:fundo="cor33">Usando diretiva personalizada</p>
    <p v-destaque4:fundo.atrasar="cor33">Usando diretiva personalizada</p>

		<p v-destaque-local>Usando diretiva personalizada</p>
		<p v-destaque-local2:fundo.atrasar="cor">v-destaque-local2:fundo</p>
		<p v-destaque-local2:fundo.atrasar="cor">v-destaque-local2:fundo alternar</p>
		<p v-destaque-local3:fundo.atrasar.alternar="cor">v-destaque-local3:fundo alternar</p>
		<p v-destaque-local4:fundo.atrasar.alternar="{cor1: 'blue', cor2: 'purple', atraso: 2000, alternar: 2500}">v-destaque-local4:fundo</p>
    <hr />
    <!-- <p v-teste:argumento.mod1.mod2.mod3="'valor'"></p> -->
    <p></p>
  </div>
</template>

<script>

export default {
	directives: {
		'destaque-local': {
			bind(el, binding, vnode) {
				el.style.background = 'lightyellow';
			}
		},
		'destaque-local2': {
			bind(el, binding, vnode) {
				const aplicarCor = cor => {
					if(binding.arg === 'fundo') {
						el.style.backgroundColor = cor
					} else {
						el.style.color = cor
					}
				}

				let atraso = 0
				
				if (binding.modifiers['atrasar']) atraso = 5000;

				setTimeout(() => {
					aplicarCor(binding.value);
				}, atraso);

			}
		},
		'destaque-local3': {
			bind(el, binding, vnode) {
				const aplicarCor = cor => {
					if(binding.arg === 'fundo') {
						el.style.backgroundColor = cor
					} else {
						el.style.color = cor
					}
				}

				let atraso = 0
				const cor1 = binding.value
				const cor2 = 'orange'
				let corAtual = cor1
			
				if (binding.modifiers['atrasar']) atraso = 5000;

				setTimeout(() => {
					if(binding.modifiers['alternar']) {
						setInterval(() => {
							corAtual = corAtual === cor1 ? cor2 : cor1
							aplicarCor(corAtual);
						}, 2000)
					} else {
						aplicarCor(binding.value);
					}
				}, atraso);
			}
		},
		'destaque-local4': {
			bind(el, binding, vnode) {
				const aplicarCor = cor => {
					if(binding.arg === 'fundo') {
						el.style.backgroundColor = binding.value.cor1
					} else {
						el.style.color = binding.value.cor2
					}
				}

				let atraso = 0
				const cor1 = binding.value.cor1
				const cor2 = binding.value.cor2
				let corAtual = cor1
			
				if (binding.modifiers['atrasar']) atraso = binding.value.atraso;

				setTimeout(() => {
					if(binding.modifiers['alternar']) {
						setInterval(() => {
							corAtual = corAtual === cor1 ? cor2 : cor1
							aplicarCor(corAtual);
						}, binding.value.alternar)
					} else {
						aplicarCor(binding.value.cor1);
					}
				}, atraso);
			}
		},
	},
  data() {
    return {
      cor: "yellow",
      cor3: "red",
      cor33: "blue"
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
</style>
