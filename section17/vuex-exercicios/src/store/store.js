import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		produtos: [
			// { nome: 'Produto 1', quantidade: 7, preco: 14.55 },
			// { nome: 'Produto 2', quantidade: 10, preco: 22.99 },
			// { nome: 'Produto 3', quantidade: 1, preco: 43.18 },
		]
	},
	getters: {
		valorTotal(state) {
			return state.produtos.map((p) => p.quantidade * p.preco).reduce((total, atual) => total + atual, 0);
		}
	},
	mutations: {
		adicionarProduto(state, payload) {
			state.produtos.push(payload);
		}
	},
	actions: {
		adicionarProdutoAction(context, payload) {
			setTimeout(() => {
				context.commit('adicionarProduto', payload);
			}, 4000);
		},
		adicionarProdutoAction2({ commit }, payload) {
			setTimeout(() => {
				commit('adicionarProduto', payload);
			}, 4000);
		}
	}
});
