<template>
  <b-container class="default-init" fluid>
    <div id="header">
      <Header />
    </div>
    
    <div id="content">
      <b-row>
        <b-col cols="12" md="3" sm="6">
          <Profile />
        </b-col>
        <b-col cols="12" md="9" sm="6">
          <Nuxt />
        </b-col>
      </b-row>
    </div>

    <div id="footer">
      <Footer />
    </div>
  </b-container>
</template>

<script>
import Header from '@/components/Header'
import Profile from '@/components/Profile'
import Footer from '@/components/Footer'

export default {
  components: {
    Header,
    Profile,
    Footer
  },
}
</script>
