<template>
  <v-app>
    <sidebar-component />
    <header-component />
    <v-content>
      <slot>
        <transition name="page-transition" mode="out-in">
          <router-view></router-view>
        </transition>
      </slot>
    </v-content>
  </v-app>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HeaderComponent from './DefaultLayoutHeader.vue'
import SidebarComponent from '@/layouts/default/DefaultLayoutSidebar.vue'

@Component({
  components: {
    SidebarComponent,
    HeaderComponent
  }
})
export default class DefaultLayout extends Vue {}
</script>
