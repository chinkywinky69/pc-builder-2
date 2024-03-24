<template>
  <div class="fullscreen bg-primary text-secondary text-center q-pa-md flex flex-center">
    <div>
      <div style="font-size: 10vh">
        <img src="pictures/404.gif">
      </div>
      <div caption>404 page</div>
      <div class="text-h3 soulmaze">
        WHY ARE YOU HERE? <br /> 🤨🤨🤨
      </div>

      <q-btn class="q-mt-xl" color="secondary" text-color="primary" unelevated to="/" label="Go Home" no-caps />
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ErrorNotFound'
})
</script>
