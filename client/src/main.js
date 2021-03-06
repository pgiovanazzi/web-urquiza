import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import moment from "moment";
import VueSweetalert2 from "vue-sweetalert2";
import CKEditor from "@ckeditor/ckeditor5-vue";

router.beforeResolve((to, from, next) => {
  if (to.path) {
    NProgress.start();
  }
  next();
});

router.afterEach(() => {
  NProgress.done();
});

Vue.use(CKEditor);

Vue.use(VueSweetalert2);

Vue.config.productionTip = false;

Vue.filter("formatDate", function(value) {
  if (value) {
    moment.locale("es");
    return moment(value)
      .startOf("day")
      .fromNow();
  }
});

Vue.filter("formatDate2", function(value) {
  if (value) {
    moment.locale("es");
    return moment(value).format("L");
  }
});

Vue.filter("capitalize", function(value) {
  if (!value) return "";
  value = value.toString();
  return value.charAt(0).toUpperCase() + value.slice(1);
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
