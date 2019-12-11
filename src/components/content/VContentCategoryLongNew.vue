<template>
  <a :href="item.path" class="new">
    <img :src="item.img" :alt="item.title" class="new__img">
    <div class="new__text">
      <div class="new__title">{{ item.title }}</div>
      <div class="new__description">{{ item.description }}</div>
    </div>
  </a>
</template>

<script>
export default {
  name: 'VContentCategoryLongNew',
  props: {
    item: {
      type: Object,
      default: () => ({})
    },
  },
};
</script>

<style scoped lang="scss" src="@/styles/content/VContentCategoryLongNew.scss">

</style>