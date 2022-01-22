<template>
  <div class="row items-center justify-center" style="height: 100% !important">
    <q-card class="items-center q-card--dark cardLogin">
      <q-card-section>
        <div class="imgMyTapp q-mt-lg">
          <q-img src="https://lirp.cdn-website.com/434357e2/dms3rep/multi/opt/logo-mytapp-negativo-87287584-136w.png"/>
        </div>
      </q-card-section>
      <q-card-section>
        <q-input class="q-mb-md" input-class="inputFormLogin text-weight-light" dark dense filled v-model="email" label="Email" />
        <q-input :type="!isPwd ? 'password' : 'text'" input-class="inputFormLogin text-weight-light" dark dense filled v-model="password" label="Password">
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
            <q-btn label="Enter" loader :loading="isLoading" no-caps color="primary" rounded class="buttonPrimary" unelevated @click="login"></q-btn>
          </div>
          <div class="text-center q-mt-lg">
            <q-btn label="Register" loader :loading="isLoading" no-caps color="primary" rounded class="buttonPrimary" unelevated @click="$router.push('/login/register')"></q-btn>
          </div>
        </div>
        <div class="text-center q-mt-md g-opacity-6">
          <a class="g-font-14 text-white g-decorationNone cursor-pointer" @click="$router.push('/login/forgot')">I forgot my password</a>
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
      isPwd: false,
      isLoading: false
    };
  },
  methods: {
    async login() {
      try {
        console.log('Teste')
        if (this.email === '' || this.password === '') {
          this.$q.notify({message: 'Fill in all fields', type: 'negative'})
        } else {
          this.isLoading = true
          let payload = {
            email: this.email,
            password: this.password,
          }
          let login = await this.$axios.post('/login', payload)
          if (login && login.data && login.data.status === 200 && login.data.data.token) {
            this.$store.commit('main/setToken', login.data.data.token)
            // set headers
            this.$axios.defaults.headers.common['Authorization'] = login.data.data.token
            // router push
            await this.$router.push('beers')
          } else {
            if (login.data.message) {
              this.$q.notify({message: login.data.message, type: 'negative'})
            } else {
              this.$q.notify({message: 'Incorrect username or password.', type: 'negative'})
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
</style>
