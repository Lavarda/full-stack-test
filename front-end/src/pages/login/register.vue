<template>
  <div class="row items-center justify-center" style="height: 100% !important">
    <q-card class="items-center q-card--dark cardLogin">
      <q-card-section>
        <div class="imgMyTapp q-mt-lg">
          <q-img src="https://lirp.cdn-website.com/434357e2/dms3rep/multi/opt/logo-mytapp-negativo-87287584-136w.png"/>
        </div>
      </q-card-section>
      <q-card-section class="justify-center text-center cardSection">
        <div class="text-weight-light">Create account</div>
      </q-card-section>
      <q-card-section>
        <q-input class="q-mb-md" input-class="inputFormLogin text-weight-light" dark dense filled v-model="name" label="Name" />
        <q-input class="q-mb-md" input-class="inputFormLogin text-weight-light" dark dense filled v-model="email" label="Email" />
        <q-input class="q-mb-md" :type="!isPwd ? 'password' : 'text'" input-class="inputFormLogin text-weight-light" dark dense filled v-model="password" label="Password">
          <template v-slot:append>
            <q-icon v-if="password.length > 1"
                    :name="isPwd ? 'visibility_off' : 'visibility'"
                    class="cursor-pointer"
                    @click="isPwd = !isPwd"
            />
          </template>
        </q-input>
        <q-input class="q-mb-md" :type="!isPwd ? 'password' : 'text'" input-class="inputFormLogin text-weight-light" dark dense filled v-model="confirmPassword" label="Confirm your password">
          <template v-slot:append>
            <q-icon v-if="password.length > 1"
                    :name="isPwd ? 'visibility_off' : 'visibility'"
                    class="cursor-pointer"
                    @click="isPwd = !isPwd"
            />
          </template>
        </q-input>
        <div class="row text-center justify-center">
          <div class="text-center q-mt-lg q-mr-lg">
            <q-btn label="Create" loader :loading="isLoading" no-caps color="primary" rounded class="buttonPrimary" unelevated @click="create"></q-btn>
          </div>
          <div class="text-center q-mt-lg">
            <q-btn label="Return" loader :loading="isLoading" no-caps color="primary" rounded class="buttonPrimary" unelevated @click="$router.push('/login')"></q-btn>
          </div>
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      email: '',
      password: '',
      confirmPassword: '',
      name: '',
      isPwd: false,
      isLoading: false
    };
  },
  methods: {
    async create() {
      try {
        if (this.email === '' || this.password === '' || this.name === '' || this.confirmPassword === '') {
          this.$q.notify({message: 'Fill in all fields', type: 'negative'})
        } else if (this.password !== this.confirmPassword) {
          this.$q.notify({message: 'Your password doesnt match', type: 'negative'})
        } else {
          this.isLoading = true
          let payload = {
            email: this.email,
            password: this.password,
            name: this.name,
          }
          let login = await this.$axios.post('/users', payload)
          if (login.data && login.data.status === 201 ) {
            await this.$router.push('/login')
          } else {
            if (login.data.message) {
              this.$q.notify({message: login.data.message, type: 'negative'})
            } else {
              this.$q.notify({message: 'Unable to create your account, try again', type: 'negative'})
            }
            this.isLoading = false
          }
        }
      } catch (e) {
        throw new Error(e)
      }
    }
  }
};
</script>

<style>
.cardLogin {
  background: #242424 !important;
  width: 425px;
  border-radius: 10px;
  min-height: 425px;
}
.imgMyTapp {
  margin-left: 25%;
  max-width: 50%;
  max-height: 50%;
}
.buttonPrimary {
  width: 160px;
  font-size: 15px;
}
.text-weight-light {
  font-weight: 300;
  color: white;
}
.cardSection {
  padding-right: 35px;
  padding-left: 35px;
}
.cardSectionEmail {
  padding-right: 15px;
  padding-left: 15px;
}
</style>
