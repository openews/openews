<template>
  <div class="news">
    <p>
      <a :href="path" class="news__category">{{ category }}</a>
      <time class="news__date">{{ date }}</time>
    </p>
    <a :href="path" class="news__link-img">
      <img :src="img" :alt="title" class="news__img">
      <p>
        <a :href="path" class="news__title">{{ title }}</a>
      </p>
    </a>
    <p>
      <a :href="path" class="news__description">{{ description }}</a>
    </p>
  </div>
</template>

<script>
var ruLocale = require('date-fns/locale/ru')

export default {
  name: 'VContentMiddleNews',
  props: {
    item: {
      type: Object,
      default: () => ({})
    },
  },
  data() {
    return {
      title: '',
      description: '',
      category: '',
      path: '',
      date: 0,
      img: '',
    };
  },
  mounted(){
    this.setData()
  },
  methods: {
    setData(){
      const { title, description, category, path, date, img, short } = this.item
      this.title = title
      this.category = category
      this.description = description
      this.path = path
      this.date = this.dateFormat(date, 'D MMMM')
      this.img = img
    },
    newsStyle(){
      let result = ''
      result += this.img === undefined || this.short === true ? '' : ' news--with-img'
      return result
    },
    dateFormat(date, format){
      return this.$date(date, format, { locale: ruLocale })
    },
  },
};
</script>

<style scoped lang="scss" src="@/styles/content/VContentMiddleNews.scss">

</style>