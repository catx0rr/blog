<template>
  <div id="about-page">
    <span class="mobile-view">
      <div class="pg-title">
        <h1 class="hd-title">About</h1>
      </div>
      <div class="mobile-view">
        <Title />
      </div>
    </span>

    <div class="pf-component">
      <ProfileAbout />
      <LeftPanel />
    </div>
    <div class="about-content">
      <AboutPage />
    </div>
    <div class="rp-component">
      <RightPanel />
    </div>
  </div>
</template>

<script>
import AboutPage from '@/components/AboutPage'
import Title from '@/components/Title'
import ProfileAbout from '@/components/ProfileAbout'
import LeftPanel from '@/components/LeftPanel'
import RightPanel from '@/components/RightPanel'

export default {
  layout: 'default',
  components: {
    AboutPage,
    ProfileAbout,
    LeftPanel,
    RightPanel
  }
}
</script>
