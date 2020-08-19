<template>
  <div>
    <span class="desktop-view">
      <div class="pg-title">
        <h1 class="hd-title">About</h1>
      </div>
    
      <div class="pg-description">
        <Title />
      </div>
    </span>
  </div>
</template>

<script>
import Tryhackme from './Tryhackme'
import Hackthebox from './Hackthebox'
import Title from '@/components/Title'

export default {
  layout: 'default',
  components: {
    Tryhackme,
    Hackthebox,
    Title
  },
  head: {
    title: 'catx0rr',
    meta: [
      {
        hid: 'author',
        name: 'author',
        content: 'War "catx0rr" Torrente I'
      },
      {
        hid: 'description', 
        name: 'description',
        content: 'catx0rr, Sysadmin by day.. Pentester wannabe at night. Personal Website, CTF and Cybersecurity Blog'
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: 'opensource, tryhackme, hackthebox, cybersecurity, hacking, infosec, security, information security, linux, writeup, ctf writeups, writeups, ctf, penetration testing, pentesting'
      }
    ]
  }
}
</script>
