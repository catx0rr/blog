<template>
<div>
  <b-navbar toggleable="lg" type="default">
    
    <b-navbar-brand>
      <div class="site-title-box">
        <nuxt-link class="title" to="/" title="Home">
          catx0rr | blog
        </nuxt-link>
      </div>
      <div class="csr-box">
        <span class="cursor">█</span>
      </div>
    </b-navbar-brand>

    <!-- Mobile switcher -->
    <span class="mobile-view">
      <b-navbar-nav>
        <b-nav-item class="nav-item-links" @click="toggle">
            <nuxt-link class="head-link" to="#" title="Mode">
              <i class="fas fa-yin-yang"></i>
            </nuxt-link>
        </b-nav-item>
      </b-navbar-nav>
    </span>

    <!-- Desktop Switcher -->
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        
        <span class="desktop-view">
          <b-nav-item class="yin-yang nav-item-links" @click="toggle">
            <nuxt-link  class="head-link "to="#" title="Mode">
              <i class="fas fa-yin-yang"></i>
            </nuxt-link>
          </b-nav-item>
        </span>
        
        <span class="desktop-view">
          <b-nav-item>
            <Dropdown title="CTF " :items="ctf" />
          </b-nav-item>
        </span>

        <span class="mobile-view">
          <b-nav-item>
            <a href="#" class="selection no-glow" disabled="disabled">
              CTF <i class="fas fa-caret-down"></i>
            </a>
          </b-nav-item>
          <b-nav-item>
            <nuxt-link  class="head-link" to="/ctf/tryhackme">
              Tryhackme
            </nuxt-link>
          </b-nav-item>
          <b-nav-item>
            <nuxt-link class="head-link" to="/ctf/hackthebox">
              Hackthebox
            </nuxt-link>
          </b-nav-item>
        </span>
        
        <b-nav-item>
          <nuxt-link class="head-link" to="/about" title="About">About</nuxt-link>
        </b-nav-item>

      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
import Dropdown from './Dropdown'

export default {
  components: {
    Dropdown
  },
  data () {
    return {
      ctf: [
        {
          title: 'TryHackMe',
          link: '/ctf/tryhackme'
        },
        {
          title: 'HacktheBox',
          link: '/ctf/hackthebox'     
        }
      ]
    }
  },
  methods: {
    toggle () {
      this.$colorMode.preference = 
        this.$colorMode.value == 'light' ? 'dark' : 'light';
    }
  }
}

</script>
