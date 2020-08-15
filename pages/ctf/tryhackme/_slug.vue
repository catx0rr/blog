<template>
  <div id="start-page">
    <article>
      <div class="posts">
        <div class="blog-info">
          <h2 class="blog-title">
          </h2>
        </div>
        <div class="blog-content">
          <nuxt-content :document="blog" />
          </p>
        </div>
      </div>
    </article>
  </div>
</template>

<script>

export default {
  layout: 'blog',
  components: {
  },
  async asyncData({ $content, params }) {
    const blog = await $content('tryhackme', params.slug || 'index').fetch()
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
