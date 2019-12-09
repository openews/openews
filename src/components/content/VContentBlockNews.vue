<template>
  <div class="block">
    <div class="block__header">{{ header }}</div>
    <div v-for="(item, index) in news"
        :key="index"
        class="block__item"
    >
      {{ item.text }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'VContentBlockNews',
  props: {
    header: {
      type: String,
      default: 'Главные новости',
    },
    news: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      
    };
  },
};
</script>

<style scoped lang="scss" src="@/styles/content/VContentBlockNews.scss">

</style>