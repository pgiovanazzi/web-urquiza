<template>
  <div>
    <Menu />
    <VideoHeader />
    <div class="container p-md-3 p-lg-4">
      <router-view />
    </div>
    <Parallax />
    <div class="container p-md-3 p-lg-4" id="consultas">
      <Contact />
    </div>
    <Map />
    <Footer />
  </div>
</template>

<script>
import Menu from "@/components/Menu.vue";
import VideoHeader from "@/components/VideoHeader.vue";
import Parallax from "@/components/Parallax.vue";
import Contact from "@/components/Contact.vue";
import Map from "@/components/Map.vue";
import Footer from "@/components/Footer.vue";

export default {
   name: 'Main',
   components: {
    Menu,
    VideoHeader,
    Parallax,
    Contact,
    Map,
    Footer
  }
}
</script>
<style scoped>
body {
  margin: 0px;
}
.container {
  padding-top: 30px;
  background-color: #fff;
  box-shadow: 0px 0px 18px rgba(32, 32, 32, 0.369);
  position: relative;
  z-index: 2;
  margin-bottom: -63px;
}
</style>
