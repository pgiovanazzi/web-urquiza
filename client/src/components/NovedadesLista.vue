<template>
  <div>
    <router-link :to="'/novedades/' + post.alias" exact>
      <div class="card">
        <div class="card-body">
          <p class="dark-grey-text">
            <small>{{ post.date | formatDate }}</small>
          </p>

          <strong class="lead">
            {{ post.description }}
            <i class="fas fa-angle-right float-right"></i>
          </strong>
        </div>
      </div>
    </router-link>
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
