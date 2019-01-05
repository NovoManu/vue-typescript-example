<template>
  <v-chip label :color="color" text-color="white" small>
    <v-icon left>label</v-icon>{{ tag }}
  </v-chip>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { colors } from '@/common-js/consts'

@Component
export default class TagComponent extends Vue {
  @Prop({ required: true }) tag!: string
  @Prop({ required: true }) index!: number
  get color() {
    return `${colors[this.index]} darken-2`
  }
}
</script>
