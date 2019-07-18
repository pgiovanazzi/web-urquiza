<template>
   <div id="parallax">

   </div>
</template>

<script>
export default {
   name: "Parallax"
}
</script>

<style scoped>
#parallax {
  z-index: 1;
}

#parallax {
  background-image: url('https://mdbootstrap.com/img/Photos/Others/nature4.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  margin: 0 auto;
  padding: 0;
  overflow: hidden;
  position: relative;
  height: 600px;
  width: 100% !important;
  margin-bottom: -63px;
}
</style>

