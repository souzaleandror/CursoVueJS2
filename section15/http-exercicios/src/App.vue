<template>
  <div id="app" class="container">
    <h1>HTTP com Axios</h1>
    <b-card>
      <b-form-group label="Nome:">
        <b-form-input type="text" size="lg" v-model="usuario.nome" placeholder="Informe o seu nome"></b-form-input>
      </b-form-group>
      <b-form-group label="email:">
        <b-form-input
          type="text"
          size="lg"
          v-model="usuario.email"
          placeholder="Informe o seu email"
        ></b-form-input>
      </b-form-group>
      <hr />
      <b-button @click.prevent="salvar" size="lg" variant="primary" class="btn btn-primary">Salvar</b-button>
      <b-button
        @click.prevent="obter"
        size="lg"
        variant="success"
        class="btn btn-success ml-2"
      >Obter</b-button>
    </b-card>
    <hr />
    <b-list-group>
      <b-list-group-item v-for="(usuario, id) in usuarios" :key="id">
        <strong>Nome:</strong>
        {{usuario.nome}}
        <br />
        <strong>Email:</strong>
        {{usuario.email}}
        <br />
        <strong>Id:</strong>
        {{id}}
        <br />
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
import axi from "axios";

export default {
  data() {
    return {
      usuarios: [],
      usuario: {
        nome: "",
        email: ""
      }
    };
  },
  created() {
    console.log("exec..");
    // this.$http
    //   .post("usuarios.json", {
    //     nome: "mario",
    //     email: "maria@gmail.com"
    //   })
    //   .then(res => console.log(res));
  },
  methods: {
    salvar() {
      console.log(this.usuario);
      this.$http.post("usuarios.json", this.usuario).then(res => {
        console.log(res);
        this.usuario.nome = "";
        this.usuario.email = "";
      });
      // axi.post("https://curso-vue-8dcd6.firebaseio.com/usuarios.json", this.usuario).then(res => {
      //   console.log(res);
      //   this.usuario.nome = "";
      //   this.usuario.email = "";
      // });
    },
    obter() {
      this.$http.get("usuarios.json").then(res => {
        console.log(res);
        console.log(res.data);
        this.usuarios = res.data;
        console.log(this.usuarios);
      });

      this.$http.defaults.headers.common["Authorization"] = "Abcc123";
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size: 1.5rem;
}

#app h1 {
  text-align: center;
  margin: 50px;
}
</style>
