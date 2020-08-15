<template>
  <b-container class="default-init" fluid>
    <div id="header">
      <Header />
    </div>
    
    <div id="content">
      <b-row>
        <b-col class="main-content" cols="12" md="9" sm="6">
          <Nuxt />
        </b-col>
        <b-col class="profile-side-content" cols="12" md="3" sm="6">
          <Profile />
          <SidePanel />
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
import SidePanel from '@/components/SidePanel'
import Footer from '@/components/Footer'


export default {
  components: {
    Header,
    Profile,
    SidePanel,
    Footer
  },
}
</script>
