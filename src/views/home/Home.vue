<template>
  <default-layout>
    <v-container fluid grid-list-lg>
      <v-layout row wrap> <HomePostsList /> </v-layout>
    </v-container>
  </default-layout>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import DefaultLayout from '@/layouts/default/DefaultLayout.vue'
import HomePostsList from '@/components/home/HomePostsList.vue'

@Component({
  components: {
    DefaultLayout,
    HomePostsList
  }
})
export default class Home extends Vue {}
</script>
