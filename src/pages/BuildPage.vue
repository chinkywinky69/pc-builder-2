<template>
  <q-page>
    <!-- CARDS -->
    <CardLoader class="fade-in" v-if="isLoading" />
    <div v-else class="fade-in">
      <div>
        <div class="text-center text-secondary q-ma-lg for-desktop soulmaze">
          <h2 class="q-ma-none">select PC Type a</h2>
        </div>
        <div class="text-center text-secondary q-ma-lg for-mobile soulmaze">
          <h4 class="q-ma-none">select PC Type</h4>
        </div>
      </div>
      <div class="row justify-center">
        <q-card square v-for="part in filteredParts.parts" :key="part.id" class="col-md-2 col-12 bg-secondary q-ma-sm"
          style="max-width: 15rem;">
          <q-card-section>
            <div class="text-center">
              <img :src="part.img" width="130">
            </div>
            <p class="text-center text-primary text-h5 text-weight-bold q-ma-none q-mb-sm">{{ part.type }}</p>
            <p class="text-center text-primary text-subtitle q-ma-none">{{ part.brand }} {{ part.model }}</p>
            <p class="text-center text-primary text-subtitle q-ma-none">{{ formatCurrency(part.price) }}</p>
          </q-card-section>
        </q-card>
      </div>
      <!-- TYPE, PERFORMACE, PRICE, AND VIEW DETAILS -->
      <div class="row justify-between mont3 q-mt-md select">
        <div class="col-12 col-md-6 column text-start">
          <div square class="bg-primary column justify-center">
            <div class="q-mb-md justify-center">
              <h5 class="text-secondary text-weight-bold text-italic q-ma-none">PC TYPE:</h5>
              <q-select dense square color="secondary" bg-color="secondary" outlined v-model="select" options-dark
                options-dense :options="options">
                <template v-slot:append>
                  <q-avatar>
                    <img src="../assets/img/logo.png">
                  </q-avatar>
                </template>
              </q-select>
            </div>
            <div class="q-mb-md justify-center">
              <h5 class="text-secondary text-weight-bold text-italic q-ma-none">PERFORMANCE:</h5>
              <q-linear-progress track-color="secondary" stripe square size="30px" :value="filteredParts.selectedProgress"
                color="secondary" class="q-mt-sm" />
            </div>
            <div class="q-mb-md justify-center">
              <h5 class="text-secondary text-weight-bold text-italic q-ma-none">PRICE: {{
                formatCurrency(filteredParts.totalPrice) }}</h5>
            </div>
          </div>
        </div>
        <div style="max-width:15rem" class="col-auto q-pa-none q-mb-lg bg-secondary for-desktop">
          <q-card square flat class="bg-primary text-secondary q-ma-sm">
            <q-card-section class="text-center">
              <img class="fit" src="../assets/img/pc3.png" alt="">
              <q-btn class="bg-primary text-secondary text-weight-bold q-mt-sm" @click="viewDetails(filteredParts.parts)"
                flat label="VIEW DETAILS" />
            </q-card-section>
          </q-card>
        </div>
        <div class="col-12 q-pa-none q-mb-lg bg-secondary for-mobile">
          <q-card square flat class="bg-primary text-secondary q-ma-sm">
            <q-card-section class="text-center">
              <img class="fit" src="../assets/img/pc3.png" alt="">
              <q-btn class="bg-primary text-secondary text-weight-bold q-mt-sm" @click="viewDetails(filteredParts.parts)"
                flat label="VIEW DETAILS" />
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
    <!-- DIALOG -->
    <div>
      <q-dialog v-model="viewDetailsBtn" persistent :maximized="maximizedToggle = true" transition-show="slide-up"
        transition-hide="slide-down">
        <q-card class="bg-primary text-white">
          <q-bar>
            <q-space />
            <q-btn dense flat icon="close" color="secondary" v-close-popup>
              <q-tooltip class="bg-white text-primary">Close</q-tooltip>
            </q-btn>
          </q-bar>
          <q-card-section>
            <div class="text-h2 soulmaze text-center text-secondary q-mb-sm">PC DETAILS</div>
            <div class="text-h5  text-center text-secondary text-weight-bold text-uppercase">PROFILE: {{
              filteredParts.selectedOption }}</div>
          </q-card-section>
          <q-card-section class="q-px-xl row justify-start">
            <div class="col-12 col-md-6" v-for="part in selectedParts" :key="part.id">
              <q-item class="text-secondary row justify-center">
                <q-item-section top class="q-ml-none col-auto">
                  <img width="140" :src="part.img">
                </q-item-section>
                <q-item-section class="col-12 col-md-8 row justify-center">
                  <div>
                    <div class="col-md-12">
                      <q-item-label class="text-uppercase text-caption text-weight-bold">Part: {{ part.type
                      }}</q-item-label>
                    </div>
                    <div class="col-md-12">
                      <q-item-label class="text-uppercase text-caption text-weight-bold">Brand: {{ part.brand
                      }}</q-item-label>
                    </div>
                    <div class="col-md-12">
                      <q-item-label class="text-uppercase text-caption text-weight-bold">Model: {{ part.model
                      }}</q-item-label>
                    </div>
                    <div class="col-md-12 q-mb-xs">
                      <q-item-label class="text-uppercase text-caption text-weight-bold">Rating: {{
                        `${part.performanceRating}/10
                        `}}</q-item-label>
                    </div>
                    <div class="col-md-8">
                      <q-item-label class="text-secondary" caption>{{ part.description }}</q-item-label>
                    </div>
                  </div>
                </q-item-section>
              </q-item>
            </div>
          </q-card-section>
        </q-card>
      </q-dialog>
    </div>
  </q-page>
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue'
import { useRouter } from 'vue-router';
import pcPartsData from '../Data/pcParts2.json'
import CardLoader from '../components/CardLoader.vue'


//ROUTER
const router = useRouter()

//OPTIONS FOR SELECT
const select = ref('Work/Studies')
const options = [
  "Work/Studies", "Gaming", "Editing", "Custom"
]

//DISPLAY PARTS
const filteredParts = computed(() => {
  let parts = [];
  let selectedProgress = 0;
  let selectedOption = '';
  let totalPrice = 0;

  if (select.value === 'Work/Studies') {
    parts = pcPartsData.workStudies.parts;
    selectedOption = 'Work/Studies'
    totalPrice = parts.reduce((sum, part) => sum + part.price, 0);
  } else if (select.value === 'Gaming') {
    parts = pcPartsData.gaming.parts;
    selectedOption = 'Gaming'
    totalPrice = parts.reduce((sum, part) => sum + part.price, 0);
  } else if (select.value === 'Editing') {
    parts = pcPartsData.editing.parts;
    selectedOption = 'Editing'
    totalPrice = parts.reduce((sum, part) => sum + part.price, 0);
  }

  const totalRating = parts.reduce((sum, part) => sum + part.performanceRating, 0);
  const maxRating = 50;

  selectedProgress = totalRating / maxRating;

  return { parts, selectedProgress, totalPrice, selectedOption };
});

//PRICE FORMATTER HELPER FUNCTION
function formatCurrency(value) {
  return value.toLocaleString('en-US', { style: 'currency', currency: 'PHP' });
}

//SEE DETAILS BUTTON WITH DIALOG
const viewDetailsBtn = ref(false);
const selectedParts = ref([]);

const viewDetails = (part) => {
  viewDetailsBtn.value = true;
  selectedParts.value = part;
};

//REDIRECT TO THE CUSTOM PAGE IF CUSTOM IS SELECTED
watch(select, (newValue) => {
  if (newValue === 'Custom') {
    router.push('/build/custom');
  }
});

//MAKE OPTION BE THE OPTION YOU SELECTED IN THE CUSTOM PAGE
onMounted(() => {
  const option = router.currentRoute.value.query.option;
  if (option && options.includes(option)) {
    select.value = option;
  }
});

//LOADERS
const isLoading = ref(true);
setTimeout(() => {
  isLoading.value = false
}, 2000)

</script>

