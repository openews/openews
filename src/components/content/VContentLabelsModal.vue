<template>
  <div v-if="opened" class="modal">
    <div @click="close()" class="modal__bg"></div>
    <div class="modal__body">
      <a v-for="(label, index) in labels" :key="index" href class="modal__label">{{ label }}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "VContentLabelsModal",
  props: {
    labels: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      opened: true
    };
  },
  methods: {
    open() {
      this.opened = true;
    },
    close() {
      this.opened = false;
    }
  }
};
</script>

<style scoped lang="scss" src="@/styles/content/VContentLabelsModal.scss">
</style>