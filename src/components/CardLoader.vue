<template>
  <q-page>
    <div>
      <div class="row justify-center q-ma-md">
        <q-skeleton class="text-center bg-secondary text-h5 q-mt-sm" width="70%" height="60px" square />
      </div>
      <div class="row justify-center">
        <q-card square v-for="index in 5" :key="index" class="col-md-2 bg-secondary q-ma-sm" style="max-width: 15rem;">
          <q-card-section>
            <div class="text-center">
              <q-skeleton width="210px" height="130px" square />

            </div>
            <q-skeleton class="text-center text-primary text-h5 q-mt-sm" width="70%" height="24px" square />
            <q-skeleton class="text-center text-primary text-subtitle q-mt-sm" width="50%" height="20px" square />
            <q-skeleton class="text-center text-primary text-subtitle q-mt-sm" width="40%" height="20px" square />
          </q-card-section>
          <q-card-actions></q-card-actions>
        </q-card>
      </div>
      <div class="row justify-between q-mt-xl select">
        <div class="col-12 col-md-6 column">
          <q-card square class="col-md-2 bg-secondary " style="max-width: 50rem;">
            <q-card-section>
              <q-skeleton class="text-center text-primary " width="100%" square />
            </q-card-section>
          </q-card>
        </div>
        <div class="col-12 col-md-auto q-pa-none q-mb-xl">
          <q-card square class="col-md-2 bg-secondary q-ma-sm" style="max-width: 15rem;">
            <q-card-section>
              <div class="text-center">
                <q-skeleton width="210px" height="200px" square />
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
  </q-page>
</template>
