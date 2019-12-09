<template>
  <div class="app">
    <LeftBar class="app__left-bar" />
    <router-view class="app__main" />
  </div>
</template>

<script>
import LeftBar from '@/components/VLeftBar'

export default {
  name: 'App',
  components: {
    LeftBar,
  },
}
</script>

<style lang="scss">
@import url('./styles/fonts.css');

*,*::before,*::after{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: Helvetica, Arial, sans-serif;
}
body{
  overflow: auto;
}

.app{
  display: flex;
  width: 100vw;
  background-color: #e5e5e5;
  flex-direction: row;
  align-items: stretch;
  justify-content: flex-start;
  &__left-bar{
    position: fixed;
    height: 100vh;
  }
}
</style>
