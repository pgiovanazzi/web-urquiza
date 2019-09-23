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
          <router-link :to="'/novedades/' + post.alias">
            <div class="mask rgba-white-light"></div>
          </router-link>
        </div>
      </div>

      <!--Excerpt-->
      <div class="col-md-9">
        <p class="dark-grey-text">
          <small>{{ post.date | formatDate }}</small>
        </p>

        <router-link :to="'/novedades/' + post.alias" exact>
          <strong class="lead">
            {{ post.description }}
            <i class="fas fa-angle-right float-right"></i>
          </strong>
        </router-link>
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
a.router-link-active {
  color: #6096cc;
}

hr {
  margin-top: 1rem;
  margin-bottom: 1rem;
  margin-left: 0rem;
  margin-right: 1rem;
  border: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}

.col-md-3 {
  padding: 0px;
}

a {
  color: #212529;
}
a:hover {
  color: #6096cc;
}

@media only screen and (max-width: 991px) {
  .view {
    margin-left: 20px;
  }
}

@media only screen and (max-width: 767px) {
  .view {
    margin-left: 15px;
    margin-right: 15px;
  }
}
</style>