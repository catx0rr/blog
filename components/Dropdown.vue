<template>
  <div class="menu-item" @click="isActive = !isActive">
    <nuxt-link class="head-link" to="#" title="Capture the flag">
      {{ title }}<i class="fas fa-caret-down"></i>
    </nuxt-link>
    <transition name="fade" appear>
      <div class="sub-menu" v-if="isActive">
        <div v-for="(item, name) in items" :key="name" class="menu-item">       
          <nuxt-link class="head-link" :to="item.link">
            {{ item.title }}
          </nuxt-link>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'dropdown',
  props: ['title', 'items'],
  data () {
    return {
      isActive: false
    }
  }
}
</script>
