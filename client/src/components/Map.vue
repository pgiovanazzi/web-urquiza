<template>
   <div id="map">
   </div>
</template>


<script>

export default {
   name: 'Map',
   mounted() {
      require('../../public/js/map.js')
   },
}
</script>

<style scoope>
   #map {
      margin: 0;
   }
</style>
