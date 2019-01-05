<template>
  <div class="dropdown">
    <v-text-field
      clearable
      label="#tag #tag"
      full-width
      hide-details
      single-line
      color="primary"
      :value="tags"
      @input="setTags"
    />
    <v-card width="100%" class="dropdown__menu" v-if="search.length">
      <v-list dense>
        <v-list-tile
          v-ripple
          class="dropdown__menu__item"
          v-for="(item, index) in search"
          :key="index"
        >
          <v-list-tile-content>
            <v-list-tile-title @click="autocompleteTag(item)">{{
              item
            }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-card>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { TagsModule } from '@/common-js/modules'

@Component
export default class PostCommentFormTags extends Vue {
  @Prop({ required: true }) tags!: string
  @TagsModule.Getter('tags') stateTags!: string[]
  setTags(string) {
    this.$emit('setTags', string || '')
  }
  get search() {
    if (!this.tags) return []
    const arrayOfTags: string[] = this.tags.split('#')
    const lastTag: string = arrayOfTags[arrayOfTags.length - 1]
    if (!lastTag.length) return []
    return this.stateTags
      .filter(
        (tag: string) => tag.toLowerCase().indexOf(lastTag.toLowerCase()) !== -1
      )
      .filter((tag: string) => tag !== lastTag)
      .slice(0, 3)
  }
  autocompleteTag(item) {
    if (item) {
      const arrayOfTags: string[] = this.tags.split('#')
      arrayOfTags.pop()
      arrayOfTags.push(item)
      this.$emit('setTags', arrayOfTags.join('#') || '')
    }
  }
}
</script>
