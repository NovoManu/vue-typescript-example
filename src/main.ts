import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import router from './router/router'
import store from './vuex/store'
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import colors from 'vuetify/es5/util/colors'

Vue.config.productionTip = false

const vuetifyConfig: object = {
  theme: {
    primary: colors.pink.darken3
  }
}

Vue.use(Vuetify, vuetifyConfig)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
