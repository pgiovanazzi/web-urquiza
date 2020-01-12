<template>
  <div id="map"></div>
</template>

<script>
import buildMap from "@/../public/js/map.js";

export default {
  name: "Map",
  mounted() {
    buildMap();
  }
};
</script>

<style scoope>
#map {
  margin: 0;
}
</style>
