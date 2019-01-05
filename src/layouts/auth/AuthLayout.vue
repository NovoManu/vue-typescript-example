<template>
  <v-app>
    <v-content>
      <slot>
        <transition name="auth-transition" mode="out-in">
          <router-view></router-view>
        </transition>
      </slot>
    </v-content>
  </v-app>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class AuthLayout extends Vue {}
</script>
