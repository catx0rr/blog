<template>
  <b-container class="about-page">
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
import Tryhackme from '@/components/Tryhackme'
import Hackthebox from '@/components/Hackthebox'
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

<style lang="scss">

div.about-page {
  background: #343a40;
  color: #fff;
}

/** Mobile View **/

div.mb-main {
  margin: 1em 0 1em 0;
}

/* Heading */

h1.blog-title {
  text-align: center;
  font-size: 2em;
  margin: 0;
  padding: 1em;
}

p.sub-title {
  text-align: center;
  font-size: 1.2em;
  padding-bottom: 1em;
  margin: 0;
}

p.about-description {
  text-align: center;
  padding-bottom: 2em;
}

/* Body */

article {
  width: 100%;
  margin: auto;
  border-bottom: none;
}

p.content,
div .links p {
  text-align: justify;
  padding-bottom: .5em;
}

/* Badges */

div .badges {
  padding: 2em;
}

h3 {
  text-align: center;
  padding-bottom: 1em;
}

div .badges-flexbox {
  display: flex;
  padding: 0 1em;
}

div .thm {
  margin-right: 1em;
}

div .thm_link {
  color: #9acc14;
}

div .htb {
  flex-grow: 1;
}

div .htb-inner {
  padding-top: .5em;
}

/* Data */

div .data {
  padding: 2em 0;
  text-align: center;
  p {
    font-size: .8em;
  }
}

div .resume-dl {
  margin: 1em;
}

@media only all and (max-width: 961px) {
  div#content div.mb-main {
    display: initial;
  }
}



</style>
