<template>
  <div id="header">
    <div class="view">
      <video class="video-intro" playsinline autoplay muted loop>
        <source src="https://mdbootstrap.com/img/video/Lines.mp4" type="video/mp4" />
      </video>
      <!-- Mask & flexbox options-->
      <div class="mask rgba-gradient d-flex align-content-center flex-wrap">
        <div class="container px-md-3 px-sm-0">
          <div class="row">
            <div class="col-md-12 mb-4 white-text text-center">
              <h3
                class="display-3 font-weight-bold white-text mb-0 pt-md-5 pt-5"
              >DF <i class="fas fa-grip-lines-vertical"></i> AF <i class="fas fa-grip-lines-vertical"></i> ITI</h3>
              <hr class="hr-light my-4 w-85" />
              <h4
                class="subtext-header mt-2 mb-4"
              >Las nuevas carreras que dicta la institución, con alta demanda laboral y altamente cualificadas.</h4>
              <a href="#!" class="btn btn-rounded btn-outline-white">
                <i class="fas fa-home"></i> Inscribite
              </a>
            </div>
          </div>
        </div>
      </div>
      <!-- Mask & flexbox options -->
    </div>
    <!-- Full Page Intro -->
  </div>
</template>

<script>
export default {
  name: "VideoHeader"
};
</script>

<style scoped>
html,
body,
.header,
.view {
  height: 100%;
}

.header,
.view {
  margin-bottom: -63px;
  z-index: 0;
}

@media (max-width: 9600px) {
  html,
  body,
  .header,
  .view {
    height: 100vh;
  }
}

@media(max-width: 412px) {
	h3 {
		font-size: 42px;
	}
}

@media(max-width: 412px) {
	h4 {
		font-size: 20px;
	}
}

.rgba-gradient {
  background: -moz-linear-gradient(
    45deg,
    rgba(15, 213, 64, 0.6),
    rgba(13, 115, 198, 0.69),
    rgba(213, 15, 61, 0.6) 100%
  );
  background: -webkit-linear-gradient(
    45deg,
    rgba(15, 213, 64, 0.6),
    rgba(13, 115, 198, 0.69),
    rgba(213, 15, 61, 0.6) 100%
  );
  background: linear-gradient(
    45deg,
    rgba(15, 213, 64, 0.6),
    rgba(13, 115, 198, 0.69),
    rgba(213, 15, 61, 0.6) 100%
  );
}
</style>
