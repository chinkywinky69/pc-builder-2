<template>
  <q-layout view="hHh lpR fFf">

    <q-header class="bg-secondary text-primary" height-hint="98">
      <q-toolbar class="q-pa-none">
        <q-toolbar-title class="row">
          <q-item to="/" class="q-pa-none">
            <img class="img" src="../assets/img/logo.png">
            <h3 class="q-ma-none navbar-title soulmaze" style="margin-top: 20px;">PCBLDR</h3>
          </q-item>
        </q-toolbar-title>
        <q-tabs v-if="showTabs" class="tabs q-mr-xl">
          <q-route-tab class="mont" to="/">Home</q-route-tab>
          <q-route-tab class="mont" to="/build">Build</q-route-tab>
          <q-route-tab class="mont" to="/about">About</q-route-tab>
        </q-tabs>
        <q-btn v-if="!showTabs" class="btn-toggler q-mr-md" dense flat round icon="menu" @click="toggleLeftDrawer" />
      </q-toolbar>
    </q-header>
    <q-drawer class="q-drawer bg-dark text-white q-pt-md" overlay show-if-above v-model="leftDrawerOpen" side="left">
      <q-separator style="margin-top: 135px;" color="secondary" class="q-mb-sm" />
      <div style="margin-bottom: 300px" class="q-ml-sm">
        <q-item to="/" clickable v-ripple active-class="text-secondary">
          <q-item-section>
            <q-item-label>Home</q-item-label>
          </q-item-section>
        </q-item>
        <q-item to="/build" clickable v-ripple active-class="text-secondary">
          <q-item-section>
            <q-item-label>Build</q-item-label>
          </q-item-section>
        </q-item>
        <q-item to="/about" clickable v-ripple active-class="text-secondary">
          <q-item-section>
            <q-item-label>About</q-item-label>
          </q-item-section>
        </q-item>
      </div>
      <q-separator color="secondary" class="q-mb-md" />
      <q-item class="text-center">
        <q-item-section>
          <q-item-label class="q-mr-sm">&#169; PCBLDR - 2023</q-item-label>
        </q-item-section>
      </q-item>
      <q-img class="absolute-top text-center" src="../assets/img/home.png" style="height: 150px">
        <div class="absolute-bottom bg-transparent">
          <q-avatar size="56px" class="q-mb-sm">
            <img src="../assets/img/logo.png">
          </q-avatar>
          <div class="text-weight-bold q-mt-md q-mb-sm text-h5 text-secondary">PCBLDR</div>
        </div>
      </q-img>
    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script setup>
import { ref, onMounted } from 'vue'
const leftDrawerOpen = ref(false)
const showTabs = ref(true)

const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value
}

onMounted(() => {
  leftDrawerOpen.value = false
  const mediaQuery = window.matchMedia('(max-width: 1024px)')

  const handleMediaQuery = (mq) => {
    showTabs.value = !mq.matches
  }

  handleMediaQuery(mediaQuery)
  mediaQuery.addEventListener('change', handleMediaQuery)

})
</script>

<style scoped>
.img {
  width: 90px;
}
</style>
