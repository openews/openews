<template>
  <div class="column">
    <div v-for="(item, index) in news"
        :key="index"
        class="column__item"
    >
      <MiddleNews v-if="item.category" :item="item" />
      <TimeNews v-else :item="item" />
    </div>
  </div>
</template>

<script>
import TimeNews from '@/components/content/VContentTimeNews'
import MiddleNews from '@/components/content/VContentMiddleNews'

export default {
  name: 'VContentTimeColumn',
  components: {
    MiddleNews,
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