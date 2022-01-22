<template>
  <div class="row items-center justify-center" style="height: 100% !important">
    <q-card class="items-center q-card--dark cardLogin">
      <q-card-section>
        <div class="imgMyTapp q-mt-lg">
          <q-img src="https://lirp.cdn-website.com/434357e2/dms3rep/multi/opt/logo-mytapp-negativo-87287584-136w.png"/>
        </div>
      </q-card-section>
      <q-card-section class="justify-center text-center cardSection">
        <div class="text-weight-light">Enter your email and we will send you a temporary password</div>
      </q-card-section>
      <q-card-section class="justify-center cardSectionEmail">
        <div>
          <q-input input-class="inputFormLogin text-weight-light" dark dense filled v-model="email" v-on:keyup.enter="login" label="Email" />
        </div>
      </q-card-section>
      <q-card-actions align="center" style="padding-top: 28px">
        <q-btn label="Recover my password" loader :loading="isLoading" no-caps color="primary" rounded class="g-font-15" style="width: 220px" unelevated @click="login"></q-btn>
      </q-card-actions>
      <q-card-actions align="center">
        <div class="justify-center">
          <a class="g-font-14 text-white g-decorationNone cursor-pointer opacity-6" @click="$router.push('/login')">Return</a>
        </div>
      </q-card-actions>
    </q-card>
  </div>
</template>

<script>
export default {
  name: "forgot",
  data() {
    return {
      email: '',
      isLoading: false
    };
  },
  methods: {
    async login() {
      try {
        if (this.email === '') {
          this.$q.notify({
            message: 'Please fill in your email',
            type: 'negative'
          })
        } else {
          this.isLoading = true
          this.$q.notify('Your new password has been sent to your email.')
        }
      } catch (e) {
        console.error(e)
        throw new Error(e)
      } finally {
        this.isLoading = false
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
