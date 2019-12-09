<template>
  <nav class="nav nav--other">
    <ul class="nav__list">
      <li v-for="(link, index) in links" :key="index" class="nav__item">
        <a :href="link.path" class="nav__link">
          {{ link.name }}
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'VBarOtherNav',
  data() {
    return {
      links: [{
          name: 'Статьи',
          path: '',
        },{
          name: 'Галереи',
          path: '',
        },{
          name: 'Видео',
          path: '',
        },{
          name: 'Спецпроекты',
          path: '',
        },{
          name: 'Мотор',
          path: '',
        },
      ]
    };
  },
};
</script>

<style scoped lang="scss" src="@/styles/bar/VBarNav.scss">

</style>
