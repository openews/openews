<template>
  <a :href="item.path" class="new">
    {{ item.text }}
  </a>
</template>

<script>
export default {
  name: 'VContentCategoryShortNew',
  props: {
    item: {
      type: Object,
      default: '',
    },
  },
  data() {
    return {
      
    };
  },
};
</script>

<style scoped lang="scss" src="@/styles/content/VContentCategoryShortNew.scss">

</style>