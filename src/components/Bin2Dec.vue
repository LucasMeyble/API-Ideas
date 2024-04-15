<template>
  <div class="">
    <div class="space-y-10 m-h-auto">
      <div class="space-y-5">
        <p class="text-5xl">Bin2Dec</p>
        <p class="text-base">Enter a binary number, get a decimal conversion.</p>
      </div>
      <div>
        <input maxlength="8" v-model="store.binaryText" type="text">
      </div>
      <div v-if="store.ErrorMessage !== ''">
        {{ store.ErrorMessage }}
      </div>
      <div class="text-lg">
        {{ store.DecimalText }}
      </div>
    </div>
  </div>
</template>

<script setup>

import { useBin2decStore } from '../store'

const store = useBin2decStore();
</script>