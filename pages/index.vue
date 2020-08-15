<template>
  <div id="home-page">
    <article>
      <div class="page-header">
        <h1 class="blog-title">catx0rr - blog</h1>
        <p class="sub-title">
          Just another cybersecurity enthusiast who is trying harder..
        </p>
      </div>
      
      <div class="posts">
        <div class="blog-info">
          <h3>
            Test Blog 1
          </h3>
        </div>
        <div class="blog-content">
          <p>
            Lorem Ipsum is simply dummy text of the printing and 
            typesetting industry. Lorem Ipsum has been the industry's 
            standard dummy text ever since the 1500s, when an unknown 
            printer took a galley of type and scrambled it to make a 
            type specimen book. It has survived not only five centuries, 
            but also the leap into electronic typesetting, remaining 
            essentially unchanged. It was popularised in the 1960s 
            with the release of Letraset sheets containing Lorem 
            Ipsum passages, and more recently with desktop publishing 
            software like Aldus PageMaker including versions of Lorem 
            Ipsum.
          </p>
        </div>
        
        <div class="blog-info">
          <h3>
            Test Blog 2
          </h3>
        </div>
        <div class="blog-content">
          <p>
            Lorem Ipsum is simply dummy text of the printing and 
            typesetting industry. Lorem Ipsum has been the industry's 
            standard dummy text ever since the 1500s, when an unknown 
            printer took a galley of type and scrambled it to make a 
            type specimen book. It has survived not only five centuries, 
            but also the leap into electronic typesetting, remaining 
            essentially unchanged. It was popularised in the 1960s 
            with the release of Letraset sheets containing Lorem 
            Ipsum passages, and more recently with desktop publishing 
            software like Aldus PageMaker including versions of Lorem 
            Ipsum.
          </p>
        </div>
        
        <div class="blog-info">
          <h3>
            Test Blog 3
          </h3>
        </div>
        <div class="blog-content">
          <p>
            Lorem Ipsum is simply dummy text of the printing and 
            typesetting industry. Lorem Ipsum has been the industry's 
            standard dummy text ever since the 1500s, when an unknown 
            printer took a galley of type and scrambled it to make a 
            type specimen book. It has survived not only five centuries, 
            but also the leap into electronic typesetting, remaining 
            essentially unchanged. It was popularised in the 1960s 
            with the release of Letraset sheets containing Lorem 
            Ipsum passages, and more recently with desktop publishing 
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
  async asyncData({ $content }) {
    const doc = await $content('index').fetch()
    return { doc }
  }
}
</script>

<style lang="scss">

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
