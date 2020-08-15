<template>
  <b-container fluid id="about-page">
    <div class="page-title">
      <h1 class="header-title">About</h1>
    </div>
    <div class="blog-heading">
      <Title />
    </div>
    <div class="social-links">
      <p>Tryhackme -
        <a href="https://tryhackme.com/p/catx0rr">catx0rr</a>
      </p>
      <p>Hackthebox -
        <a href="https://www.hackthebox.eu/profile/250470">catx0rr</a>
      </p>
      <p>Github -
        <a href="https://github.com/catx0rr">catx0rr</a>
      </p>
      <p>LinkedIn -
        <a href="https://www.linkedin.com/in/catx0rr">catx0rr</a>
      </p>
      <p>Twitter -
        <a href="https://twitter.com/catx0rr">@catx0rr</a>
      </p>
    </div>

    <div class="badge-title-box">
      <h3>CTF Badges</h3>
      <div class="badge-flex-box">
        <b-row> 
          <b-col col="12" sm="6">
            <div class="thm">
              <Tryhackme />
            </div>
          </b-col>
    
          <b-col col="12" sm="6">
            <div class="htb">
              <div class="htb-inner">
                <Hackthebox />
              </div>
            </div>
          </b-col>
        </b-row>
      </div>
    </div>

    <div class="data">
      <h3>Resume</h3>
      <div class="sig">
        <p>
          SHA256 - 5e6b6e6b96580e48ab105d4a2b8afb34f31140364d18c9aabb9849c4e715e962
        </p>
      </div>

      <div class="resume-dl">
        <div class="btn">
          <b-button class="btn-link" href="/catx0rr_resume.pdf" download>Download</b-button>
        </div>
      </div>
    </div>
  </b-container>
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
