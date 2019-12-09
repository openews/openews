<template>
  <div class="main">
    <Top />
    <div class="main__time">
      <div class="main__col">
        <TimeColumn :news="news1" />
      </div>
      <div class="main__col">
        <TimeColumn :news="news2" />
        <a class="main__button">Больше новостей</a>
      </div>
      <div class="main__col">
        <BlockNews header="Важные новости" :news="news3" />
      </div>
    </div>
  </div>
</template>

<script>
import Top from '@/components/content/VContentTop'
import TimeColumn from '@/components/content/VContentTimeColumn'
import BlockNews from '@/components/content/VContentBlockNews'

export default {
  name: 'Main',
  components: {
    Top,
    TimeColumn,
    BlockNews,
  },
  data() {
    return {
      news1: [{
        text: 'Стартовала эксполярная миссия по дифлекации суборбитальных энертных элементов',
        path: 'example',
        time: 1575900368369,
        img: 'https://picsum.photos/300/200',
      },{
        text: 'Стартовала эксполярная миссия по дифлекации суборбитальных энертных элементов',
        path: 'example',
        time: 1575900368369,
        img: 'https://picsum.photos/300/200',
        short: true,
      },{
        text: 'Стартовала эксполярная миссия по дифлекации суборбитальных энертных элементов',
        path: 'example',
        time: 1575900368369,
        img: 'https://picsum.photos/300/200',
        short: true,
      },],
      news2: [{
        text: 'Стартовала эксполярная миссия по дифлекации суборбитальных энертных элементов',
        path: 'example',
        time: 1575900368369,
        img: 'https://picsum.photos/300/200',
        short: true,
      },{
        text: 'Стартовала эксполярная миссия по дифлекации суборбитальных энертных элементов',
        path: 'example',
        time: 1575900368369,
        img: 'https://picsum.photos/300/200',
        short: true,
      },{
        text: 'Стартовала эксполярная миссия по дифлекации суборбитальных энертных элементов',
        path: 'example',
        time: 1575900368369,
        img: 'https://picsum.photos/300/200',
        short: true,
      },{
        text: 'Стартовала эксполярная миссия по дифлекации суборбитальных энертных элементов',
        path: 'example',
        time: 1575900368369,
        img: 'https://picsum.photos/300/200',
        short: true,
      },{
        text: 'Стартовала эксполярная миссия по дифлекации суборбитальных энертных элементов',
        path: 'example',
        time: 1575900368369,
        img: 'https://picsum.photos/300/200',
        short: true,
      },{
        text: 'Стартовала эксполярная миссия по дифлекации суборбитальных энертных элементов',
        path: 'example',
        time: 1575900368369,
        img: 'https://picsum.photos/300/200',
        short: true,
      },{
        text: 'Стартовала эксполярная миссия по дифлекации суборбитальных энертных элементов',
        path: 'example',
        time: 1575900368369,
        img: 'https://picsum.photos/300/200',
        short: true,
      },],
      news3: [{
        text: 'Стартовала эксполярная миссия по дифлекации суборбитальных энертных элементов',
      },{
        text: 'Стартовала эксполярная миссия по дифлекации суборбитальных энертных элементов',
      },{
        text: 'Стартовала эксполярная миссия по дифлекации суборбитальных энертных элементов',
      },{
        text: 'Стартовала эксполярная миссия по дифлекации суборбитальных энертных элементов',
      },{
        text: 'Стартовала эксполярная миссия по дифлекации суборбитальных энертных элементов',
      },{
        text: 'Стартовала эксполярная миссия по дифлекации суборбитальных энертных элементов',
      },{
        text: 'Стартовала эксполярная миссия по дифлекации суборбитальных энертных элементов',
      },]
    };
  },
};
</script>

<style scoped lang="scss" src="@/styles/Main.scss">

</style>
