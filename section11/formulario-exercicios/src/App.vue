<template>
  <div id="app">
    <h1>Registrar Reclamação</h1>
    <div class="conteudo">
      <form class="painel" v-if="!enviado">
        <div class="cabecalho">Formulário</div>
        <Rotulo nome="E-mail">
          <input type="text" v-model.lazy.trim="usuario.email" />
        </Rotulo>
        <Rotulo nome="Senha">
          <input type="password" v-model.trim="usuario.senha" />
        </Rotulo>
        <Rotulo nome="Idade">
          <input type="number" v-model.number="usuario.idade" />
        </Rotulo>
        <Rotulo nome="Mensagem">
          <textarea name cols="30" rows="5" v-model="usuario.mensagem"></textarea>
        </Rotulo>
        <Rotulo nome="Características do Problema">
          <span class="mr-4">
            <input type="checkbox" value="reproduzivel" v-model="usuario.caracteristicas" /> Reproduzível
          </span>
          <span>
            <input type="checkbox" value="intermitente" v-model="usuario.caracteristicas" /> Intermitente
          </span>
        </Rotulo>
        <Rotulo nome="Qual produto?">
          <span class="mr-4">
            <input type="radio" value="web" v-model="usuario.produto" /> Web
          </span>
          <span class="mr-4">
            <input type="radio" value="mobile" v-model="usuario.produto" /> Mobile
          </span>
          <span>
            <input type="radio" value="outro" v-model="usuario.produto" /> Outro
          </span>
        </Rotulo>
        <Rotulo nome="Prioridade">
          <select v-model="usuario.prioridade">
            <option
              v-for="prioridade in prioridades"
              :key="prioridade.codigo"
              :value="prioridade.codigo"
              :selected="prioridade.codigo === 2"
            >{{prioridade.nome}}</option>
          </select>
        </Rotulo>
        <Rotulo nome="Primeira Reclamação?">
          <input type="text" v-model="temp" @input="temp == 'teste'" />
        </Rotulo>
        <Rotulo nome="Escolha ?">
          <Escolha v-model="escolha" value="escolha" />
        </Rotulo>
        <hr />
        <button @click.prevent="enviar">Enviar</button>
      </form>
      <div class="painel" v-if="enviado">
        <div class="cabecalho">Resultado</div>
        <Rotulo nome="E-mail">
          <span>{{ usuario.email }}</span>
        </Rotulo>
        <Rotulo nome="Senha">
          <span>{{usuario.senha}}</span>
        </Rotulo>
        <Rotulo nome="Idade">
          <span>{{usuario.idade}}</span>
        </Rotulo>
        <Rotulo nome="Mensagem">
          <span style="white-space: pre;">{{ usuario.mensagem}}</span>
        </Rotulo>
        <Rotulo nome="Marque as Opções">
          <span>
            <ul>
              <li v-for="c in usuario.caracteristicas" :key="c">{{c}}</li>
            </ul>
          </span>
        </Rotulo>
        <Rotulo nome="Qual produto?">
          <span>{{usuario.produto }}</span>
        </Rotulo>
        <Rotulo nome="Prioridade">
          <span>{{usuario.prioridade}}</span>
        </Rotulo>
        <Rotulo nome="Primeira Reclamação?">
          <span>{{temp}}</span>
        </Rotulo>
        <Rotulo nome="Escolha?">
          <span>{{escolha}}</span>
        </Rotulo>
      </div>
    </div>
  </div>
</template>

<script>
import Rotulo from "./components/Rotulo.vue";
import Escolha from "./components/Escolha.vue";

export default {
  name: "app",
  components: { Rotulo, Escolha },
  data() {
    return {
      email: "",
      usuario: {
        email: "",
        senha: "",
        idade: 25,
        mensagem: "",
        caracteristicas: [],
        produto: "",
        prioridade: ""
      },
      prioridades: [
        { codigo: 1, nome: "Baixa" },
        { codigo: 2, nome: "Media" },
        { codigo: 3, nome: "Alta" },
        { codigo: 4, nome: "Altissima" }
      ],
      temp: "",
      escolha: true,
      enviado: false
    };
  },
  computed: {
    tipo() {
      return typeof this.usuario.idade;
    }
  },
  methods: {
    enviar() {
      this.enviado = true;
    }
  }
};
</script>

<style>
body {
  background-color: #ececec;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  display: flex;
  flex-direction: column;
}

.conteudo {
  display: flex;
}

.painel {
  flex: 1;
  background: #fff;
  margin: 0px 10px;
  padding: 20px;
  border: 1px solid #aaa;
  border-radius: 5px;
}

.painel .cabecalho {
  width: 100%;
  background-color: #ddd;
  padding: 10px 0px;
  border-radius: 5px;
  font-size: 1.4rem;
}

#app form button {
  float: right;
  margin: 10px 0px;
  padding: 10px 20px;
  font-size: 1.4rem;
  border-radius: 5px;
  color: #fff;
  background-color: #2196f3;
}

#app h1 {
  font-weight: 200;
  margin: 20px;
  padding: 0;
}

.mr-4 {
  margin-right: 40px;
}
</style>
