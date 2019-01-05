<template>
  <div id="app"><router-view /></div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { ApiCalls } from '@/common-js/modules'

@Component
export default class App extends Vue {
  @ApiCalls.Action initialApiCalls!: any
  created() {
    this.initialApiCalls()
  }
}
</script>
<style lang="scss">
@import 'assets/scss/main';
</style>
