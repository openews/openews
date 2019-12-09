<template>
  <div class="column">
    <TimeNews v-for="(pieceOfNews, index) in news"
              :key="index"
              :piece-of-news="pieceOfNews"
              class="column__item" />
  </div>
</template>

<script>
import TimeNews from '@/components/content/VContentTimeNews'

export default {
  name: 'VContentTimeColumn',
  components: {
    TimeNews,
  },
  props: {
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

<style scoped lang="scss" src="@/styles/content/VContentTimeColumn.scss">

</style>