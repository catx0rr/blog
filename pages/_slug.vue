<template>
  <div id="start-page">
    <div class="pf-component">
      <Profile />
      <LeftPanel />
    </div>
    
    <div class="blog-content">
      <StartPage />
      <nuxt-content :document="blog" />
    </div>
    <div class="rp-component">
      <RightPanel />
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

<style lang="scss">

pre.line-numbers {
  background: #343a40;
  text-shadow: none;
}

span.token.operator {
  background: #343a40;
}

div#home-page {
  background: #343a40;
  color: #fff;
}

.page-enter-active,
.page-leave-active {
  transition-property: opacity;
  transition-timing-function: ease-in-out;
  transition-duration: .5s;
}

.page-enter,
.page-leave-to {
  opacity: 0;
}

h1.blog-title {
  text-align: center;
  font-size: 2em;
  margin: 0;
}

p.sub-title {
  text-align: center;
  font-size: .9em;
  margin: 0;
}

article {
  width: 100%;
  margin: auto;
  border-bottom: none;
}

p.content {
  text-align: justify;
  padding-bottom: .5em;
}

.content {
  margin: auto;
}


@media only all and (max-width: 961px) {
  div#content span.no-profile {
    display: none;
  }
}

html {
  visibility: visible;
}

</style>
