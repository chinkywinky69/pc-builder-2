<template>
  <q-page padding>
    <div v-if="isLoading" class="row justify-center ">
      <q-spinner-tail class="q-mt-xl" color="secondary" size="6rem" />
    </div>
    <div v-else class="text-secondary fade-in">
      <div class="row justify-center">
        <h3 class="soulmaze q-ma-none q-mb-md col-12 col-md-6 text-center">About</h3>
        <q-card style="width: 50rem" square flat class="bg-primary text-body2 text-weight-medium col-12 col-md-6">
          <q-card-section>
            <p>
              PCBLDR is a passion project for the completion of COE 141 (Object Oriented Programming) instructed by Engr.
              Don
              Opada. Radwin C. Cabante have thought of the idea of the personal computer builder website. Together with
              the
              aid
              and assistance of Justin Vince C. VIllacampa, the website arrives to its completion in such a limited time.
              I
              would like to thank Sir Don for the approval of this project despite the time constraint and busy schedule.
              I
              would express my gratitude towards my mate and pal, Justin, for helping me achieve the completion of this
              project
              by sharing his time and effort for this project. This project wouldn’t be successful if it weren’t for the
              help
              of
              my friends and the support of my classmates. I am forever grateful.
            </p>
          </q-card-section>
        </q-card>
        <div v-if="ratingAppear" class=" pop text-center col-12 col-md-6 q-mb-xl ">
          <h6 class="q-ma-none q-mb-sm">RATE MY WEBSITE!</h6>
          <q-rating v-model="rating" size="2em" :max="5" color="secondary">
            <template v-slot:tip-1>
              <q-tooltip>Not bad 👍</q-tooltip>
            </template>
            <template v-slot:tip-2>
              <q-tooltip>Good 👍👍</q-tooltip>
            </template>
            <template v-slot:tip-3>
              <q-tooltip>Very good! 😲😲😲</q-tooltip>
            </template>
            <template v-slot:tip-4>
              <q-tooltip>EPIC! 😎 😎 😎 😎 😎</q-tooltip>
            </template>
            <template v-slot:tip-5>
              <q-tooltip>PLEASE STOP IT'S TOO GOOD 😫😩😫😩</q-tooltip>
            </template>
          </q-rating>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from 'vue';

//RATING THINGY
const rating = ref(0)
const ratingAppear = ref(false)
setTimeout(() => {
  ratingAppear.value = true
}, 4000)

//LOADER
const isLoading = ref(true)
setTimeout(() => {
  isLoading.value = false
}, 1000)
</script>

<style scoped>
p {
  line-height: 2rem;
  text-align: justify;
}
</style>
