<template>
  <v-navigation-drawer app fixed clipped permanent value="true">
    <SearchComponent label="Search by post name" @search="search" />
    <LatestStories />
    <LatestTags />
  </v-navigation-drawer>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { PostsModule } from '@/common-js/modules'
import SearchComponent from '../../components/common-UI/SearchComponent.vue'
import LatestStories from './DefaultLayoutSidebarLatestStories.vue'
import LatestTags from './DefaultLayoutLatestTags.vue'

@Component({
  components: {
    SearchComponent,
    LatestStories,
    LatestTags
  }
})
export default class DefaultLayoutSidebar extends Vue {
  @PostsModule.Mutation('posts/SET_POSTS_SEARCH') setPostsSearch!: any
  search(query) {
    this.setPostsSearch(query || '')
  }
}
</script>
