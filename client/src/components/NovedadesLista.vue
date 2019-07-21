<template>
  <div>
    <hr />
    <!--Small news-->
    <div class="row">
      <div class="col-md-3 align-self-center">
        <!--Image-->
        <div class="view overlay rounded z-depth-1">
          <img
            src="https://mdbootstrap.com/img/Photos/Others/photo8.jpg"
            class="img-fluid"
            alt="Minor sample post image"
          />
          <a>
            <div class="mask rgba-white-slight"></div>
          </a>
        </div>
      </div>

      <!--Excerpt-->
      <div class="col-md-9">
        <p class="dark-grey-text">
          <small>{{ post.date | formatDate }}</small>
        </p>
        <a>
          <strong>{{ post.title }}</strong>
          <i class="fas fa-angle-right float-right"></i>
        </a>
      </div>
    </div>
    <!--/Small news-->
  </div>
</template>

<script>
export default {
  name: "novedadesLista",
  props: {
    post: Object
  }
};
</script>


<style scoped>
hr {
	margin-top: 1rem;
	margin-bottom: 1rem;
	margin-left: 0rem;
	margin-right: 1rem;
	border: 0;
	border-top: 1px solid rgba(0,0,0,.1);
}

.col-md-3 {
	padding: 0px;
}
</style>