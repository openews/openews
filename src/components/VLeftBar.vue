<template>
  <aside class="bar">
    <div class="bar__toggle">
    </div>
    <div class="bar__section">
      <MainNav />
      <Socials />
      <SearchInput />
      <LogIn />
      <OtherNav />
    </div>
  </aside>
</template>

<script>
import MainNav from '@/components/bar/VBarMainNav'
import Socials from '@/components/bar/VBarSocials'
import SearchInput from '@/components/bar/VBarSearchInput'
import LogIn from '@/components/bar/VBarLogIn'
import OtherNav from '@/components/bar/VBarOtherNav'

export default {
  name: 'VLeftBar',
  components: {
    MainNav,
    Socials,
    SearchInput,
    LogIn,
    OtherNav,
  },
  data() {
    return {
      
    };
  },
};
</script>

<style scoped lang="scss" src="@/styles/VLeftBar.scss">

</style>
