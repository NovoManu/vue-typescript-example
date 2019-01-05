<template>
  <v-toolbar app fixed clipped-left color="primary" dark flat>
    <v-toolbar-title>
      <v-btn flat to="/"> Brand Bastion </v-btn>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn flat v-for="(page, index) in pages" :key="index" :to="page.link">
        {{ page.text }}
      </v-btn>
      <v-btn flat @click="logout"> Logout </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

interface Page {
  text: string
  link: string
}

@Component
export default class DefaultLayoutHeader extends Vue {
  private pages: Page[] = []
  logout() {
    localStorage.removeItem('testUser')
    setTimeout(() => this.$router.push({ name: 'Login' }), 500)
  }
}
</script>
