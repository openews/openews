<template>
  <div ref="main" class="news" :class="mainClass()">
    <div class="news__bg"></div>
    <button v-if="this.img" @click="openClose()" class="news__button"></button>
    <a :href="path" class="news__link">
      <time v-if="time" class="news__time">{{ time }}</time>
      <div class="news__title">{{ text }}</div>
      <div class="news__text">{{ text + ' ' + text + ' ' + text }}</div>
    </a>
  </div>
</template>

<script>
export default {
  name: "VContentTimeNews",
  props: {
    item: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      text: "",
      path: "",
      time: 0,
      img: "",
      vibrantColor: "",
      opened: false
    };
  },
  async mounted() {
    await this.setData();
    await this.setStyles();
  },
  methods: {
    async setData() {
      const { text, path, time, img, short } = this.item;
      this.text = text;
      this.path = path;
      this.time = this.timeFormat(time, "HH:mm");
      this.img = img && img();
      this.opened = !!this.img;
    },
    async setStyles() {
      this.$refs.main.style.setProperty("--bg-img", `url(${this.img})`);
    },
    timeFormat(time, format) {
      return this.$date(time, format);
    },
    mainClass() {
      let result = "";
      result += this.opened ? "news--opened" : "";
      return result;
    },
    openClose() {
      this.opened = !this.opened;
    }
  }
};
</script>

<style scoped lang="scss" src="@/styles/content/VContentTimeNews.scss">
</style>