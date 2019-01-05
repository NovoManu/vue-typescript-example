<template>
  <AuthLayout>
    <v-container fill-height>
      <v-layout row align-center justify-center>
        <v-card hover width="100%" max-width="500px">
          <v-card-text>
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-text-field
                v-model="name"
                :rules="rules"
                label="Name"
                required
                color="primary"
              ></v-text-field>
              <v-text-field
                v-model="phone"
                :rules="rules"
                label="Phone Number"
                required
                color="primary"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" flat @click="submit"> Sigh in </v-btn>
          </v-card-actions>
        </v-card>
      </v-layout>
    </v-container>
  </AuthLayout>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import AuthLayout from '@/layouts/auth/AuthLayout.vue'

@Component({
  components: {
    AuthLayout
  }
})
export default class Login extends Vue {
  valid: boolean = false
  name: string = ''
  phone: string = ''
  rules: { (v: any): void }[] = [v => !!v || 'Field is required']
  submit(): void {
    if ((this.$refs.form as Vue & { validate: () => boolean }).validate()) {
      const user = {
        name: this.name,
        phone: this.phone
      }
      localStorage.setItem('testUser', JSON.stringify(user))
      setTimeout(() => this.$router.push('/'), 500)
    }
  }
}
</script>
