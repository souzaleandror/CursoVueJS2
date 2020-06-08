<template>
  <div id="app" class="container-fluid">
    <h1>Animações</h1>
    <hr />
    <b-button variant="primary" class="mb-4" @click="exibir = !exibir">Mostar Mensagem</b-button>
    <transition name="fade">
      <b-alert variant="info" show v-if="exibir">{{msg}}</b-alert>
    </transition>

    <transition name="slide" type="transition">
      <b-alert variant="info" show v-if="exibir">{{msg}}</b-alert>
    </transition>

    <transition name="slide" type="transition">
      <b-alert variant="info" show v-show="exibir">{{msg}}</b-alert>
    </transition>

    <transition name="slide" type="animatiton" appear>
      <b-alert variant="info" show v-show="exibir">{{msg}}</b-alert>
    </transition>

    <transition enter-active-class="animated bounce" leave-active-class="animated shake">
      <b-alert variant="info" show v-show="exibir">{{msg}}</b-alert>
    </transition>

    <hr />
    <b-select v-model="tipoAnimacao" class="mb-4">
      <option value="fade">Animacao 1</option>
      <option value="slide">Animacao 2</option>
    </b-select>

    <transition :name="tipoAnimacao">
      <b-alert variant="info" show v-if="exibir" key="info">{{msg}}</b-alert>
      <b-alert variant="warning" show v-else key="warning">{{msg}}</b-alert>
    </transition>

    <transition :name="tipoAnimacao" mode="out-in">
      <b-alert variant="info" show v-if="exibir" key="info">{{msg}}</b-alert>
      <b-alert variant="warning" show v-else key="warning">{{msg}}</b-alert>
    </transition>
    <hr />
    <button @click="exibir2 = !exibir2">Exibir 2</button>
    <transition
      name="lala"
      :css="false"
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
      @enter-cancelled="enterCancelled"
      @before-leave="beforeLeave"
      @leave="leave"
      @after-leave="afterLeave"
      @leave-cancelled="leaveCancelled"
    >
      <div class="caixa" v-if="exibir2"></div>
    </transition>
    <hr />
    <button>Exibir 3</button>
    <transition
      name="lala"
      :css="false"
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
      @enter-cancelled="enterCancelled"
      @before-leave="beforeLeave"
      @leave="leave"
      @after-leave="afterLeave"
      @leave-cancelled="leaveCancelled"
    >
      <div class="caixa" v-if="exibir2"></div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "Uma mensagem de informacao para o usuario",
      exibir: true,
      exibir2: true,
      tipoAnimacao: "fade",
      larguraBase: 0
    };
  },
  methods: {
    beforeEnter(el) {
      console.log("beforeEnter", el);
    },
    enter(el, done) {
      console.log("enter", el);
      let rodada = 1;
      const temporizador = setInterval(() => {
        const novaLargura = this.larguraBase + rodada * 10;
        el.style.width = `${novaLargura}px`;
        rodada++;
        if (rodada > 30) {
          clearInterval(temporizador);
          done();
        }
      }, 20);
    },
    afterEnter(el) {
      console.log("afterEnter", el);
    },
    enterCancelled(el) {
      console.log("enterCancelled", el);
    },
    beforeLeave(el) {
      console.log("beforeLeave", el);
      this.larguraBase = 300;
      el.style.width = `${this.larguraBase}px`;
    },
    leave(el, done) {
      console.log("leave", el);
      //done();
      let rodada = 1;
      const temporizador = setInterval(() => {
        const novaLargura = this.larguraBase + rodada * 10;
        el.style.width = `${novaLargura}px`;
        rodada--;
        if (rodada > 30) {
          clearInterval(temporizador);
          done();
        }
      }, 20);
    },
    afterLeave(el) {
      console.log("afterLeave", el);
    },
    leaveCancelled(el) {
      console.log("leaveCancelled", el);
    }
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
  font-size: 1.5rem;
}

.v-enter {
}

.fade-enter {
  opacity: 0;
}

.fade-enter-active {
  transition: opacity 2s;
}

.fade-enter-to {
  opacity: 1;
}

.fade-leave {
  opacity: 1;
}

.fade-leave-active {
  transition: opacity 2s;
}

.fade-leave-to {
  opacity: 0;
}

@keyframes slide-in {
  from {
    transform: translateY(40px);
  }
  to {
    transform: translateY(0);
  }
}

@keyframes slide-out {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(40px);
  }
}

.slide-enter,
.slide-leave-to {
  opacity: 0;
}

.slide-enter-active {
  animation: slide-in 2s ease;
  transition: opacity 2s;
}

.slide-leave-active {
  animation: slide-out 2s ease;
  transition: opacity 6s;
}

.caixa {
  height: 100px;
  width: 300px;
  background-color: green;
}
</style>
