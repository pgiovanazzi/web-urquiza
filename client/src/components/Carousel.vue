<template>
  <div>
    <div id="carouselExampleFade" class="carousel slide carousel-fade" data-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img :src="slideImages[0].url" :alt="slideImages[0].title">
        </div>
        <div class="carousel-item">
          <img :src="slideImages[1].url" :alt="slideImages[1].title">
        </div>
        <div class="carousel-item">
          <img :src="slideImages[2].url" :alt="slideImages[2].title">
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </div>
</template>


<script>
export default {
  name: "Carousel",
  data() {
    return {
      slideImages: [
        { title: '', url: require('@/assets/1.jpg')},
        { title: '', url: require('@/assets/2.jpg')},
        { title: '', url: require('@/assets/3.jpg')},
      ]
    }
  }
};
</script>

<style scoped>

#carouselExampleFade {
	margin-bottom: -63px;
	position: relative;
	z-index: 0;
}

img {
  display: block;
	width: 100vw;
	height: 100vh;
	object-fit: cover;
}
</style>
