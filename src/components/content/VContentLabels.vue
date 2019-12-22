<template>
  <div class="labels">
    <a v-for="(label, index) in theLabels" :key="index" href="#" class="labels__label">{{label}}</a>
    <!-- <button @click="openAll()" class="labels__button" title="Показать все ярлыки">...</button> -->
  </div>
</template>

<script>
export default {
  name: "VContentLabels",
  props: {
    labels: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      theLabels: this.labels
    };
  },
  methods: {
    firstLabels(n) {
      return this.theLabels.slice(0, n);
    },
    openAll() {
      this.$emit("openAllLabels");
    }
  }
};
</script>

<style scoped lang="scss" src="@/styles/content/VContentLabels.scss">
</style>