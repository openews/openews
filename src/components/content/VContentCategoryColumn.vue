<template>
  <div class="column">
    <a :href="header.path" class="column__header">{{ header.text }}</a>
    <div v-for="(item, index) in news" :key="index" class="column__item">
      <ShortNew v-if="!item.img" :item="item" />
      <LongNew v-else :item="item" />
    </div>
    <a class="column__link" :href="header.path">Все материалы</a>
  </div>
</template>

<script>
import ShortNew from '@/components/content/VContentCategoryShortNew'
import LongNew from '@/components/content/VContentCategoryLongNew'

export default {
  name: 'VContentCategoryColumn',
  components: {
    ShortNew,
    LongNew,
  },
  props: {
    header: {
      type: Object,
      default: '',
    },
    news: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style scoped lang="scss" src="@/styles/content/VContentCategoryColumn.scss">

</style>