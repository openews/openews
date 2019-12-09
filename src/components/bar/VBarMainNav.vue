<template>
  <nav class="nav nav--main">
    <ul class="nav__list">
      <li v-for="(link, index) in links" :key="index" class="nav__item" :class="linkClass(link)">
        <a :href="link.path" class="nav__link">
          {{ link.name }}
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'VBarMainNav',
  data() {
    return {
      links: [{
          name: 'Главное',
          path: '',
          current: true,
        },{
          name: 'Россия',
          path: '',
          current: false,
        },{
          name: 'Мир',
          path: '',
          current: false,
        },{
          name: 'Бывший СССР',
          path: '',
          current: false,
        },{
          name: 'Экономика',
          path: '',
          current: false,
        },{
          name: 'Наука и техника',
          path: '',
          current: false,
        },{
          name: 'Культура',
          path: '',
          current: false,
        },{
          name: 'Спорт',
          path: '',
          current: false,
        },{
          name: 'Интернет и СМИ',
          path: '',
          current: false,
        },{
          name: 'Ценности',
          path: '',
          current: false,
        },{
          name: 'Путешествия',
          path: '',
          current: false,
        },{
          name: 'Из жизни',
          path: '',
          current: false,
        },{
          name: 'Дом',
          path: '',
          current: false,
        },
      ]
    };
  },
  methods: {
    linkClass(link){
      let result = ''
      result += link.current ? ' nav__item--current' : ''
      return result
    }
  }
};
</script>

<style scoped lang="scss" src="@/styles/bar/VBarNav.scss">

</style>