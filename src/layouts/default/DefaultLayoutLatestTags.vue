<template>
  <v-flex>
    <v-subheader class="text-uppercase text--primary">
      Latest Tags
    </v-subheader>
    <div class="pa-2 ml-1">
      <TagComponent
        v-for="(tag, index) in latestTags"
        :key="index"
        :index="index"
        :tag="tag"
      />
    </div>
  </v-flex>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { TagsModule } from '@/common-js/modules'
import TagComponent from '@/components/common-UI/TagComponent.vue'

@Component({
  components: {
    TagComponent
  }
})
export default class DefaultLayoutLatestTags extends Vue {
  @TagsModule.Getter('lastTags') tags!: any
  get latestTags() {
    return this.tags(5)
  }
}
</script>
