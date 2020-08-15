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
  layout: 'default',
  components: {
  },
  async asyncData({ $content, params }) {
    const blog = await $content('tryhackme', params.slug || 'index').fetch()
    return { blog }
  }
}
</script>
