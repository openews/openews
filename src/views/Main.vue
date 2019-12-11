<template>
  <div class="main">
    <Top />
    <div class="main__time">
      <div class="main__focus">
        <div class="main__row">
          <div class="main__col">
            <TimeColumn :news="news1" />
          </div>
          <div class="main__col">
            <TimeColumn :news="news2" />
            <a class="main__button">Больше новостей</a>
          </div>
        </div>
        <div class="main__row">
          <div class="main__col main__col--2">
            <BigNews :item="bigNew" />
          </div>
        </div>
        <div class="main__row">
          <div class="main__col">
            <MiddleNews :item="configNew" />
          </div>
          <div class="main__col">
            <MiddleNews :item="configNew" />
          </div>
        </div>
        <div class="main__row">
          <div class="main__col">
            <TimeColumn :news="news4" />
          </div>
          <div class="main__col">
            <TimeColumn :news="news5" />
          </div>
        </div>
      </div>
      <div class="main__aside">
        <div class="main__col">
          <BlockNews header="Важные новости" :news="news3" />
          <TimeColumn :news="news6" />
        </div>
      </div>
    </div>
    <div class="main__category">
      <div v-for="(cats, index) in categories" :key="index" class="main__row">
        <div class="main__col">
          <CategoryColumn :header="cats[0]" :news="categoryNews" />
        </div>
        <div class="main__col">
          <CategoryColumn :header="cats[1]" :news="categoryNews" />
        </div>
        <div class="main__col">
          <CategoryColumn :header="cats[2]" :news="categoryNews" />
        </div>
      </div>
    </div>
    <VFooter />
    <button class="main__up"></button>
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
      longNew: {
        text: 'Стартовала эксполярная миссия по дифлекации суборбитальных энертных элементов',
        path: 'example',
        time: 1575900368369,
        img: 'https://picsum.photos/300/200',
      },
      shortNew: {
        text: 'Стартовала эксполярная миссия по дифлекации суборбитальных энертных элементов',
        path: 'example',
        time: 1575900368369,
        img: 'https://picsum.photos/300/200',
        short: true,
      },
      textNew: {
        text: 'Стартовала эксполярная миссия по дифлекации суборбитальных энертных элементов',
        path: 'example',
      },
      bigNew: {
        category: 'Обо всём',
        title: "Произошёл взрыв сверхновой",
        description: "Взрывная популярность нового трэка сверха",
        date: 1575900368369,
        path: 'example',
        img: 'https://picsum.photos/620/310',
      },
      configNew: {
        title: 'Очередная сенсация',
        description: 'Кого-то где-то убили.',
        date: 1575900368369,
        path: 'example',
        img: 'https://picsum.photos/620/310',
        category: 'Обо всём',
      },
      categoryNew: {
        img: 'https://picsum.photos/96/64',
        title: 'Кроличьи бега',
        description: 'Почему программисты так долго искали баг, если проект уже был в продакшене?',
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
      return this.generate([{ 7: this.shortNew }])
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
      let obj = []
      configs.forEach(config => {
        const number = Object.keys(config)[0]
        const example = config[number]
        for(let i = 0; i < number; i++){
          obj.push(example)
        }
      })
      return obj
    }
  }
};
</script>

<style scoped lang="scss" src="@/styles/Main.scss">

</style>
