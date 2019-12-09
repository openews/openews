<template>
  <div class="socials">
    <a v-for="(link, index) in links"
      :key="index" :href="link.path"
      class="socials__link"
      :class="getClass(link.name)">
    </a>
  </div>
</template>

<script>
export default {
  name: 'VBarSocials',
  data() {
    return {
      links: [{
          src: '',
          name: 'vk',
        },{
          src: '',
          name: 'fb',
        },{
          src: '',
          name: 'tw',
        },{
          src: '',
          name: 'ok',
        },{
          src: '',
          name: 'yt',
        },{
          src: '',
          name: 'tg',
        },
      ]
    };
  },
  methods: {
    getClass(name){
      return `socials__link--${name}`
    }
  }
};
</script>

<style scoped lang="scss" src="@/styles/bar/VBarSocials.scss">

</style>