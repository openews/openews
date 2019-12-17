<template>
  <div class="page">
    <Top />
    <div class="page__time">
      <div class="page__focus">
        <div class="page__row">
          <div class="page__col page__col--2">
            <TimeColumn :news="news2" />
          </div>
        </div>
      </div>
      <div class="page__aside">
        <div class="page__col">
          <BlockNews header="Важные новости" :news="news3" />
        </div>
      </div>
    </div>
    <VFooter />
    <button @click="scrollTop()" class="page__up"></button>
  </div>
</template>

<script>
import Top from '@/components/content/VContentTop'
import TimeColumn from '@/components/content/VContentTimeColumn'
import CategoryColumn from '@/components/content/VContentCategoryColumn'
import BlockNews from '@/components/content/VContentBlockNews'
import BigNews from '@/components/content/VContentBigNews'
import MiddleNews from '@/components/content/VContentMiddleNews'
import VFooter from '@/components/content/VContentFooter'

export default {
  name: 'Main',
  components: {
    Top,
    TimeColumn,
    CategoryColumn,
    BlockNews,
    BigNews,
    MiddleNews,
    VFooter,
  },
  data() {
    return {
      shortNew: {
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat odit eveniet, debitis modi dolore quidem?',
        path: 'example',
        time: 1575900368369,
        img: (i) => this.i || this.i === 0 ? require(`../assets/imgs/${this.i++}.jpg`) : require(`../assets/imgs/0.jpg`),
      },
      textNew: {
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat odit eveniet, debitis modi dolore quidem?',
        path: 'example',
      },
      bigNew: {
        category: 'Обо всём',
        title: "Lorem ipsum dolor sit amet,",
        description: "ВLorem ipsum dolor sit amet, consectetur adipisicing elit.",
        date: 1575900368369,
        path: 'example',
        img: 'https://picsum.photos/620/310',
      },
      configNew: {
        title: 'Lorem ipsum',
        description: 'Lorem ipsum dolor sit amet.',
        date: 1575900368369,
        path: 'example',
        img: 'https://picsum.photos/620/310',
        category: 'Обо всём',
      },
      categoryNew: {
        img: 'https://picsum.photos/96/64',
        title: 'Lorem ipsum',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat odit eveniet, quidem?',
        path: 'example',
      },
      categories: [
        [{ text: 'Россия', path: 'example', },
        { text: 'Мир', path: 'example', },
        { text: 'Бывший СССР', path: 'example', }],
        [{ text: 'Экономика', path: 'example', },
        { text: 'Силовые структуры', path: 'example', },
        { text: 'Наука и техника', path: 'example', }],
        [{ text: 'Спорт', path: 'example', },
        { text: 'Культура', path: 'example', },
        { text: 'интернет и СМИ', path: 'example', }],
        [{ text: 'Ценности', path: 'example', },
        { text: 'Путешествия', path: 'example', },
        { text: 'Из жизни', path: 'example', }],
        [{ text: 'Motor', path: 'example', },
        { text: 'Дом', path: 'example', },
        { text: 'Нацпрокеты', path: 'example', }],
      ],
    };
  },
  computed: {
    news1() {
      return this.generate([{ 1: this.longNew }, { 2: this.shortNew }])
    },
    news2() {
      return this.generate([{ 10: this.shortNew }])
    },
    news3() {
      return this.generate([{ 7: this.textNew }])
    },
    news4() {
      return this.generate([{ 1: this.configNew },{ 2: this.shortNew },{ 1: this.configNew },{ 3: this.shortNew },{ 1: this.configNew },{ 4: this.shortNew },{ 1: this.configNew },{ 3: this.shortNew },{ 1: this.configNew },{ 3: this.shortNew }])
    },
    news5() {
      return this.generate([{ 1: this.configNew },{ 3: this.shortNew },{ 1: this.configNew },{ 8: this.shortNew },{ 1: this.configNew },{ 3: this.shortNew },{ 1: this.configNew },{ 1: this.shortNew },{ 1: this.configNew },{ 2: this.shortNew }])
    },
    news6(){
      return this.generate([{ 1: this.configNew },{ 1: this.shortNew },{ 1: this.configNew },{ 2: this.shortNew },{ 1: this.configNew },{ 1: this.shortNew }])
    },
    categoryNews(){
      return this.generate([{ 1: this.textNew }, { 1: this.categoryNew }, { 1: this.textNew }, { 1: this.categoryNew }, { 1: this.textNew }, { 1: this.categoryNew }, { 1: this.textNew },])
    }
  },
  methods: {
    generate(configs){
      this.i = 0
      let obj = []
      configs.forEach(config => {
        const number = Object.keys(config)[0]
        const example = config[number]
        for(let i = 0; i < number; i++){
          obj.push(example)
        }
      })
      return obj
    },
    scrollTop(){
      document.scrollingElement.scrollTop = 0
    },
  },
};
</script>

<style scoped lang="scss" src="@/styles/Page.scss">

</style>
