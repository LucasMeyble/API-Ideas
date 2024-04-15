<script setup>

import HeaderNavigation from './components/HeaderNavigation.vue'
import FooterVue from './components/FooterVue.vue'
</script>

<template>
  <main class="min-h-screen flex flex-col">
    <section class="z-10">
      <HeaderNavigation />
    </section>
    <section class="z-0 flex-grow">
      <RouterView />
    </section>
    <section>
      <FooterVue />
    </section>
  </main>
</template>
