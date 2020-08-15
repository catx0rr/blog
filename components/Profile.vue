<template>
  <div class="profile-panel">
    <div class="catvatar">
      <div class="catvatar-img">
        <img class="catvatar-responsive"
             src="@/assets/profile/catx0rr.png" 
             alt="cybernin">
      </div>
      
      <div class="info-panel">
        <h2>catx0rr</h2>
        <p>OSCP</p>
        <div class="description">
          <p>Hacker Wannabe</p>
        </div>
        <div class="other-info">
          <p>
            <i class="fas fa-user-secret"></i>
            War Torrente I
            </p>
          <p>
            <i class="fas fa-map-marker-alt"></i>
            127.0.0.1
          </p>
          <p>
            <i class="fab fa-github"></i>
            <a href="https://github.com/catx0rr">
              https://github.com/catx0rr
            </a>
          </p>
        </div>
        
        <div class="socials">
          <a href="https://github.com" title="github">
            <i class="icons fab fa-github"></i>
          </a>
          -
          <a href="https://tryhackme.com/p/catx0rr" title="tryhackme">
            <i class="icons fab fa-cloudversify"></i>
          </a>
          -
          <a href="https://hackthebox.eu/profile/250470" title="hackthebox">
            <i class="icons fas fa-cube"></i>
          </a>
          -
          <a href="https://www.linked.com/in/catx0rr">
            <i class="icons fab fa-linkedin"></i>
          </a>
        </div>
      </div>
    </div>

    <div class="side-panel">
      <SidePanel />
    </div>
  </div>
</template>

<script>
import SidePanel from './SidePanel'

export default {
  components: {
    SidePanel
  }
}

</script>



<style scoped>

div#content div.profile-panel {
  color: #fff;
  background: #343a40;
  width: 100%;
}
          
div.profile-panel div.catvatar {
  text-align: center;
}

div.info-panel {
  text-align: left;
}

div.catvatar-img img {
  border-radius: 100%;
  margin: 2em auto;
  height: auto;
}

</style>
