<template>
  <div class="news" :class="newsStyle()">
    <a class="news__link-img" :href="path">
      <img :src="img" :alt="text" class="news__img">
    </a>
    <a :href="path" class="news__link">
      <time v-if="time" class="news__time">{{ time }}</time>{{ text }}
    </a>
  </div>
</template>

<script>
export default {
  name: 'VContentTimeNews',
  props: {
    pieceOfNews: {
      type: Object,
      default: () => ({})
    },
  },
  data() {
    return {
      text: '',
      path: '',
      time: 0,
      img: '',
    };
  },
  mounted(){
    this.setData()
  },
  methods: {
    setData(){
      const { text, path, time, img, short } = this.pieceOfNews
      this.text = text
      this.path = path
      this.time = this.timeFormat(time, 'HH:mm')
      this.img = img
      this.short = short
    },
    newsStyle(){
      let result = ''
      result += this.img === undefined || this.short === true ? '' : ' news--with-img'
      return result
    },
    timeFormat(time, format){
      return this.$date(time, format)
    },
  },
};
</script>

<style scoped lang="scss" src="@/styles/content/VContentTimeNews.scss">

</style>