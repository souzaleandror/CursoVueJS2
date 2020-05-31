<template>
  <div class="task" :class="stateClass">
    <span @click="$emit('taskDeleted', task)" class="close">X</span>
    <p>{{ task.name }}</p>
  </div>
</template>

<script>
export default {
  props: {
    task: { type: Object, required: true }
  },
  data() {
    return {};
  },
  computed: {
    stateClass() {
      return {
        pending: this.task.pending,
        done: !this.task.pending
      };
    }
  }
};
</script>

<style scoped>
.task {
  position: relative;
  box-sizing: border-box;
  width: 350px;
  height: 150px;
  padding: 10px;
  border-radius: 5px;
  font-size: 2rem;
  font-weight: 300;
  cursor: pointer;
  user-select: none;
  display: flex;
  justify-content: center;
  align-items: center;
}

.pending {
  border-left: 12px solid red;
  background-color: brown;
}

.done {
  color: white;
  border-left: 12px solid lightgreen;
  background-color: darkgreen;
}
.pending .close {
  background-color: darkred;
}
.done .close {
  background-color: darkgreen;
}

.close {
  position: absolute;
  right: 10px;
  top: 10px;
  font-size: 0.9rem;
  font-weight: 600;
  height: 20px;
  width: 20px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
}
</style>