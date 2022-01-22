<template>
  <q-layout view="lHh Lpr lFf">
    <div class="dashboard-list" style="top: 0; padding-top: 16px">
      <div class="q-dashboard-item q-mb-lg q-mt-md">
        <q-img src="https://lirp.cdn-website.com/434357e2/dms3rep/multi/opt/logo-mytapp-negativo-87287584-136w.png" />
      </div>
<!--      <div class="q-dashboard-item" @click="$router.push('dashboard')">-->
<!--        <div class="q-dashboard-item-label">-->
<!--          <span>Home</span>-->
<!--        </div>-->
<!--        <div class="row justify-center items-center q-dashboard-item-icon" :class="{'q-dashboard-item-primary': $route.path.split('/')[1] === 'dashboard'}">-->
<!--          <q-img src="~assets/home.svg" width="34px" height="34px"></q-img>-->
<!--        </div>-->
<!--      </div>-->
      <div class="q-dashboard-item" @click="$router.push('beers')">
        <div class="q-dashboard-item-label">
          <span>Beers</span>
        </div>
        <div class="row justify-center items-center q-dashboard-item-icon" :class="{'q-dashboard-item-primary': $route.path.split('/')[1] === 'analytics'}">
          <q-img src="~assets/beer.svg" width="34px" height="34px"></q-img>
        </div>
      </div>
      <div class="q-dashboard-item" @click="logout" style="position: absolute; bottom: 0">
        <div class="q-dashboard-item-label">
          <span>Logout</span>
        </div>
        <div class="row justify-center items-center q-dashboard-item-icon" :class="{'q-dashboard-item-primary': $route.path.split('/')[1] === 'logout'}">
          <q-img src="~assets/logout.svg" width="34px" height="34px"></q-img>
        </div>
      </div>
    </div>
    <q-page-container style="margin-left: 80px; padding: 20px 40px 40px 40px">
      <router-view />
    </q-page-container>
    <drawer-beer />
  </q-layout>
</template>

<script>
import DrawerBeer from '../components/drawers/beer'

export default {
  name: 'layout',
  components: {
    DrawerBeer,
  },
  methods: {
    async logout () {
      this.$store.commit('main/setToken', null)
      this.$router.push('/login')
    }
  }
}
</script>

<style>
.dashboard-list {
  width: 80px;
  position: fixed;
  z-index: 1002;
  background: #333333;
  height: 100%;
  color: #fff;
}
.dashboard-list > div {
  opacity: 0.6;
}
.q-dashboard-item-icon {
  width: 80px;
  height: 50px;
  z-index: 2;
  background: #333333;
  transition: background 0.5s, transform 1s;
}
.dashboard-list > div > .q-dashboard-item-icon > i {
  font-size: 20px;
}
.dashboard-list > div > .q-dashboard-item-label {
  font-size: 16px;
  white-space: nowrap;
  z-index: -1;
  width: 120px;
  position: absolute;
  height: 50px;
  margin-left: -200px;
  background: rgb(252, 184, 19);
  color: #fff;
  opacity: 0;
  text-align: right;
  border-radius: 0 3px 3px 0;
  padding-right: 18px;
  padding-top: 12px;
  transition: margin-left 0.5s, opacity 0.5s, transform 1s;
}
.dashboard-list > .q-dashboard-item {
  cursor: pointer;
  opacity: 1;
}
.dashboard-list > .q-dashboard-item:hover > .q-dashboard-item-icon:not(.q-dashboard-item-primary) {
  background: rgb(252, 184, 19);
}
.dashboard-list > .q-dashboard-item:hover > .q-dashboard-item-label {
  margin-left: 80px;
  opacity: 1;
}
.q-dashboard-item-icon-chatbot {
  width: 30px;
  height: 25px;
}
.q-dashboard-item-primary {
  background: rgb(252, 184, 19);
}
.menu-item {
  padding-left: 24px;
  padding-right: 24px;
}
.q-menu-item-label {
  font-size: 13px;
  opacity: 0.8;
}
.q-item-section + .q-item-section {
  margin-left: 0;
}
</style>
