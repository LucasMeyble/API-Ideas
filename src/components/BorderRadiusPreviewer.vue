<template>
  <div class="">
    <div class="space-y-10 m-h-auto">
      <div class="space-y-5">
        <p class="text-5xl">Boder Radius Previewer</p>
        <p class="text-base">Enter a binary number, get a decimal conversion.</p>
      </div>

    </div>
  </div>
</template>

<script setup>
import { useBorderRadiusPreviewer } from '../store'


const store = useBorderRadiusPreviewer()

</script>