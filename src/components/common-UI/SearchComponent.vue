<template>
  <v-text-field
    solo
    :label="label"
    single-line
    prepend-inner-icon="search"
    color="cyan darken-2"
    clearable
    class="ma-3"
    @input="search"
  />
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class DefaultLayout extends Vue {
  @Prop({ required: true }) label!: string
  search(query: string): void {
    this.$emit('search', query)
  }
}
</script>
