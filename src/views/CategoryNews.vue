<template>
  <div class="page">
    <Top />
    <Subcategories :items="subcategories" />
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
          <TimeColumn :news="news6" />
        </div>
      </div>
    </div>
    <div class="page__category">
      <div v-for="(cats, index) in categories" :key="index" class="page__row">
        <div class="page__col">
          <CategoryColumn :header="cats[0]" :news="categoryNews" />
        </div>
        <div class="page__col">
          <CategoryColumn :header="cats[1]" :news="categoryNews" />
        </div>
        <div class="page__col">
          <CategoryColumn :header="cats[2]" :news="categoryNews" />
        </div>
      </div>
    </div>
    <VFooter />
    <button @click="scrollTop()" class="page__up"></button>
  </div>
</template>

<script>
import Top from "@/components/content/VContentTop";
import Subcategories from "@/components/content/VContentSubcategories";
import TimeColumn from "@/components/content/VContentTimeColumn";
import CategoryColumn from "@/components/content/VContentCategoryColumn";
import BlockNews from "@/components/content/VContentBlockNews";
import BigNews from "@/components/content/VContentBigNews";
import MiddleNews from "@/components/content/VContentMiddleNews";
import VFooter from "@/components/content/VContentFooter";

export default {
  name: "CategoryNews",
  components: {
    Top,
    Subcategories,
    TimeColumn,
    CategoryColumn,
    BlockNews,
    BigNews,
    MiddleNews,
    VFooter
  },
  data() {
    return {
      subcategory: {
        text: "Подкатегория",
        path: ""
      },
      shortNew: {
        text:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat odit eveniet, debitis modi dolore quidem?",
        path: "example",
        time: 1575900368369,
        img: i =>
          this.i || this.i === 0
            ? require(`../assets/imgs/${this.i++}.jpg`)
            : require(`../assets/imgs/0.jpg`)
      },
      textNew: {
        text:
          "Стартовала эксполярная миссия по дифлекации суборбитальных энертных элементов",
        path: "example"
      },
      bigNew: {
        category: "Обо всём",
        title: "Произошёл взрыв сверхновой",
        description: "Взрывная популярность нового трэка сверха",
        date: 1575900368369,
        path: "example",
        img: "https://picsum.photos/620/310"
      },
      configNew: {
        title: "Очередная сенсация",
        description: "Кого-то где-то убили.",
        date: 1575900368369,
        path: "example",
        img: "https://picsum.photos/620/310",
        category: "Обо всём"
      },
      categoryNew: {
        img: "https://picsum.photos/96/64",
        title: "Кроличьи бега",
        description:
          "Почему программисты так долго искали баг, если проект уже был в продакшене?",
        path: "example"
      },
      categories: [
        [
          { text: "Россия", path: "example" },
          { text: "Мир", path: "example" },
          { text: "Бывший СССР", path: "example" }
        ],
        [
          { text: "Экономика", path: "example" },
          { text: "Силовые структуры", path: "example" },
          { text: "Наука и техника", path: "example" }
        ],
        [
          { text: "Спорт", path: "example" },
          { text: "Культура", path: "example" },
          { text: "интернет и СМИ", path: "example" }
        ],
        [
          { text: "Ценности", path: "example" },
          { text: "Путешествия", path: "example" },
          { text: "Из жизни", path: "example" }
        ],
        [
          { text: "Motor", path: "example" },
          { text: "Дом", path: "example" },
          { text: "Нацпрокеты", path: "example" }
        ]
      ]
    };
  },
  computed: {
    subcategories() {
      return this.generate([{ 8: this.subcategory }]);
    },
    news1() {
      return this.generate([{ 1: this.longNew }, { 2: this.shortNew }]);
    },
    news2() {
      return this.generate([{ 10: this.shortNew }]);
    },
    news3() {
      return this.generate([{ 7: this.textNew }]);
    },
    news4() {
      return this.generate([
        { 1: this.configNew },
        { 2: this.shortNew },
        { 1: this.configNew },
        { 3: this.shortNew },
        { 1: this.configNew },
        { 4: this.shortNew },
        { 1: this.configNew },
        { 3: this.shortNew },
        { 1: this.configNew },
        { 3: this.shortNew }
      ]);
    },
    news5() {
      return this.generate([
        { 1: this.configNew },
        { 3: this.shortNew },
        { 1: this.configNew },
        { 8: this.shortNew },
        { 1: this.configNew },
        { 3: this.shortNew },
        { 1: this.configNew },
        { 1: this.shortNew },
        { 1: this.configNew },
        { 2: this.shortNew }
      ]);
    },
    news6() {
      return this.generate([
        { 1: this.configNew },
        { 1: this.shortNew },
        { 1: this.configNew },
        { 2: this.shortNew },
        { 1: this.configNew },
        { 1: this.shortNew }
      ]);
    },
    categoryNews() {
      return this.generate([
        { 1: this.textNew },
        { 1: this.categoryNew },
        { 1: this.textNew },
        { 1: this.categoryNew },
        { 1: this.textNew },
        { 1: this.categoryNew },
        { 1: this.textNew }
      ]);
    }
  },
  methods: {
    generate(configs) {
      let obj = [];
      configs.forEach(config => {
        const number = Object.keys(config)[0];
        const example = config[number];
        for (let i = 0; i < number; i++) {
          obj.push(example);
        }
      });
      return obj;
    },
    scrollTop() {
      document.scrollingElement.scrollTop = 0;
    }
  }
};
</script>

<style scoped lang="scss" src="@/styles/Page.scss">
</style>