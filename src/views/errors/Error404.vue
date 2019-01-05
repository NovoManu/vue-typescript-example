<template>
  <default-layout>
    <v-container fill-height>
      <v-flex xs12 class="text-xs-center">
        <h1 class="display-2">Whoops, 404</h1>
        <p class="text--secondary">
          The page you were looking for does not exist
        </p>
      </v-flex>
    </v-container>
  </default-layout>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import DefaultLayout from '@/layouts/default/DefaultLayout.vue'

@Component({
  components: {
    DefaultLayout
  }
})
export default class Error404 extends Vue {
  private delay = 3000
  mounted() {
    setTimeout(() => {
      this.$router.push('/')
    }, this.delay)
  }
}
</script>
