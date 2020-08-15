<template>
  <b-container fluid id="ctf-page">
    <div class="header-links">
      <nuxt-link to="/">catx0rr</nuxt-link> /
      <nuxt-link to="/ctf">ctf</nuxt-link>
    </div>
    
    <div class="page-title">
      <h1 class="header-title">CTF</h1>
    </div>
    
    <div class="ctf-page-content">
      <div class="title-box">
        <div class="sub-title-box">
          <p class="sub-title">
            In computer security Capture the Flag (CTF), 
            "flags" are secrets hidden in purposefully-vulnerable 
            programs or websites. Competitors steal flags either 
            from other competitors (attack/defense-style CTFs) or 
            from the organizers (jeopardy-style challenges). 
            Several variations exist, including hiding flags in hardware devices.
          </p>
          <p>
            Security CTFs are usually designed to serve as an educational 
            exercise to give participants experience in securing a machine, 
            as well as conducting and reacting to the sort of attacks found 
            in the real world (i.e., bug bounty programs in professional settings).
            Classic activities include reverse-engineering, network sniffing, 
            protocol analysis, system administration, programming, cryptoanalysis
            and writing exploits..
          </p>
          <p class="info-source">
            <a href="https://en.wikipedia.org/wiki/Capture_the_flag">view-source</a>
          </p>
        </div>

        <div class="write-ups">
          <h2>Write-Ups</h2>
        </div>

        <div class="ctf-link">
          <p>
          <nuxt-link to="/ctf/tryhackme">
            <i class="fab fa-cloudversify"> Tryhackme</i>
          </nuxt-link>
          </p>
        </div>

        <div class="ctf-link">
          <p>
            <nuxt-link to="/ctf/hackthebox">
              <i class="fas fa-cube"></i> Hackthebox
            </nuxt-link>
          </p>
        </div>
      
      </div>
    </div>
  </b-container>
</template>
