// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import "babel-polyfill";

Vue.config.productionTip = false

import Vuetify from 'vuetify'

Vue.use(Vuetify)

import('vuetify/dist/vuetify.min.css')

import Meta from "vue-meta";
Vue.use(Meta);

import VueDummy from "vue-dummy";
Vue.use(VueDummy);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
