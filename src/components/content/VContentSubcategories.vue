<template>
  <nav class="subcat">
    <ul class="subcat__list">
      <li v-for="(item, index) in items" :key="index" class="subcat__item" :class="subClass(index)">
        <a :href="item.path" class="subcat__link">{{ item.text }}</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'VContentSubcategories',
  props: {
    items: {
      type: Array,
      default: () => [],
    }
  },
  methods: {
    subClass(index){
      return index == 5 ? 'subcat__item--selected': ''
    }
  },
};
</script>

<style scoped lang="scss" src="@/styles/content/VContentSubcategories.scss">

</style>