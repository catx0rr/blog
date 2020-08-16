<template>
  <b-container fluid id="main">
    <Header />
    <Nuxt />
    <Footer />
  </b-container>
</template>

<script>
import Header from '@/components/Header'
import Profile from '@/components/Profile'
import LeftPanel from '@/components/LeftPanel'
import RightPanel from '@/components/RightPanel'
import Footer from '@/components/Footer'


export default {
  components: {
    Header,
    Profile,
    LeftPanel,
    RightPanel,
    Footer
  },
}
</script>
