import Vue from 'vue';
import Router from 'vue-router';
import Inicio from './components/Inicio';
//import Usuario from './components/usuario/Usuario';
//import UsuarioLista from './components/usuario/UsuarioLista';
//import UsuarioDetalhe from './components/usuario/UsuarioDetalhe';
//import UsuarioEditar from './components/usuario/UsuarioEditar';
import Menu from './components/template/Menu';
import MenuAlt from './components/template/MenuAlt';

Vue.use(Router);

const Usuario = () => import(/* webpackChunkName: usuario */'./components/usuario/Usuario');
const UsuarioDetalhe = () => import(/* webpackChunkName: usuario */'./components/usuario/UsuarioDetalhe');
const UsuarioEditar = () => import('./components/usuario/UsuarioEditar');
const UsuarioLista = () => import('./components/usuario/UsuarioLista');

const router = new Router({
	mode: 'history',
	scrollBehavior(to, from, savedPosition) {
		if (savedPosition) {
			return savedPosition;
		}
		if (to.hash) {
			return { selector: to.hash };
		}
		return { x: 0, y: 0 };
	},
	routes: [
		{
			name: 'inicio',
			path: '/',
			component: Inicio,
			components: {
				menu: Menu,
				default: Inicio,
				menuInferior: MenuAlt
			}
		},
		{
			path: '/usuario',
			component: Usuario,
			props: true,
			components: {
				menu: MenuAlt,
				default: Usuario,
				menuInferior: Menu
			},
			children: [
				{ path: '', component: UsuarioLista },
				{
					path: ':id',
					component: UsuarioDetalhe,
					props: true,
					beforeEnter: (to, from, next) => {
						console.log('Antes da rota -> Usuario DEtalhes');
						next();
					}
				},
				{ path: ':id/editar', component: UsuarioEditar, props: true, name: 'editarUsuario' }
			]
		},
		{
			path: 'redirecionar',
			redirect: '/usuario'
		},
		{
			path: '*',
			redirect: '/'
		}
		// {
		// 	path: '/usuario/:id',
		// 	component: Usuario,
		// }
	]
});

router.beforeEach((to, from, next) => {
	console.log('Antes das rotas');
	next();
});

export default router;
