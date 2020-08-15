<template>
  <b-container fluid id="start-page">
    <article>
      <div class="page-header">
        <h1 class="blog-title">catx0rr - blog</h1>
        <p class="sub-title">
          Sysadmin by day.. Pentester wannabe at night.
        </p>
      </div>
      
      <div class="blog-content">
        <nuxt-content :document="blog" />
      </div>
    </article>
  </b-container>
</template>

<script>

export default {
  layout: 'default',
  components: {
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
