<template>
  <div class="outer-start-page">
    <div class="header-component">
      <StartPage />
    </div>

  <div id="start-page">
    <div class="pf-component">
      <Profile />
      <LeftPanel />
    </div>
    
    <div class="blog-content">
      <nuxt-content :document="blog" />
    </div>
    <div class="rp-component">
      <RightPanel />
    </div>
  </div>
  </div>
</template>

<script>
import StartPage from '@/components/StartPage'
import LeftPanel from '@/components/LeftPanel'
import RightPanel from '@/components/RightPanel'

export default {
  layout: 'default',
  components: {
    StartPage,
    LeftPanel,
    RightPanel
  },
  async asyncData({ $content, params }) {
    const blog = await $content('all', params.slug || 'index').fetch()
    return { blog } 
  }
}
</script>
