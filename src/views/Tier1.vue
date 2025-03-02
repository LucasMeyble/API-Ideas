<template>
  <div class="mt-10 text-center">
    <div>
      <select v-model="selectedPage">
        <option v-for="(_, page) in pages" :value="page" :key="page">{{ page }}</option>
      </select>
    </div>

    <div class="mt-10">
      <component :is="pages[selectedPage]"></component>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Bin2Dec from '../components/Bin2Dec.vue';
import BoderRadiusPreviewer from '../components/BorderRadiusPreviwer/BorderRadiusPreviewer.vue';

const selectedPage = ref('bin2Dec');

const pages = {
  bin2Dec: Bin2Dec,
  'Boder Radius Previewer': BoderRadiusPreviewer,
}
</script>