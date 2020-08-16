<template>
  <div id="about-page">
    <div class="pf-component">
      <Profile />
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
import LeftPanel from '@/components/LeftPanel'
import RightPanel from '@/components/RightPanel'

export default {
  layout: 'default',
  components: {
    AboutPage,
    LeftPanel,
    RightPanel
  }
}
</script>
