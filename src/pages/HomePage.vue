<template>
  <q-page class="fade-in">
    <section class="flex flex-center column q-py-xl section-1  soulmaze ">
      <div>
        <h1 class="text-center text-secondary for-desktop" style="line-height: 5.2rem;">
          personal <br> computer <br> builder
        </h1>
        <h3 class="text-center text-secondary for-mobile soulmaze " style="line-height: 3rem;">
          personal <br> computer <br> builder
        </h3>
      </div>
      <div class="q-mb-xl">
        <q-btn outline square color="secondary" class="q-px-md q-py-md mont" to="/build">get
          started</q-btn>
      </div>
    </section>
    <section class="q-pa-xl">
      <div>
        <h3 class="text-secondary q-ma-none for-desktop soulmaze">why build a pc?</h3>
      </div>
      <div>
        <h5 class="text-secondary q-ma-none for-mobile soulmaze">why build a pc?</h5>
      </div>
      <div class="row justify-center q-mt-lg">
        <div class="col-12 col-md-6 bg-secondary q-pa-lg">
          <div>
            <div class="mont2 for-desktop">
              Building a personal computer offers several advantages that make it
              an appealing option for tech-savvy individuals. One key benefit is
              customization, allowing you to handpick each component for tailored
              performance, capabilities, and aesthetics. DIY PC building also
              enables future upgradability, keeping your system relevant and
              powerful over time. Moreover, it is often cost-effective, offering
              better performance for a lower price compared to pre-built systems.
              Lastly, building a PC fosters a deeper understanding of technology,
              empowering you to troubleshoot and fix issues independently. For
              performance, customization, cost-effectiveness, and the joy of
              hands-on creation, building a personal computer is a compelling
              choice.
            </div>
            <div class="mont2 text-caption for-mobile ">
              Building a personal computer offers several advantages that make it
              an appealing option for tech-savvy individuals. One key benefit is
              customization, allowing you to handpick each component for tailored
              performance, capabilities, and aesthetics. DIY PC building also
              enables future upgradability, keeping your system relevant and
              powerful over time. Moreover, it is often cost-effective, offering
              better performance for a lower price compared to pre-built systems.
              Lastly, building a PC fosters a deeper understanding of technology,
              empowering you to troubleshoot and fix issues independently. For
              performance, customization, cost-effectiveness, and the joy of
              hands-on creation, building a personal computer is a compelling
              choice.
            </div>
          </div>
        </div>
        <div fit="fill" class="col-12 col-md-6 bg-secondary q-pa-lg">
          <q-card square>
            <img src="pictures/why.png">
          </q-card>
        </div>
        <div class="q-mt-xl">
          <q-btn square color="secondary" class="q-py-md mont" @click="scrollToTop" outline>start building</q-btn>
        </div>
      </div>
    </section>
  </q-page>
</template>

<script setup>

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

</script>

<style scoped>
.section-1 {
  background-image: url("src/pics/home.png");
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100%;
}
</style>


