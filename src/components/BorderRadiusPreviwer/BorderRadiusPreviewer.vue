<template>
  <div class="">
    <div class="space-y-10 m-h-auto">
      <div class="space-y-5">
        <p class="text-5xl">Boder Radius Previewer</p>
        <p class="text-base">Enter a binary number, get a decimal conversion.</p>
      </div>
      <BorderPreview />
      <Controls />
      <CssOutput />
    </div>
  </div>
</template>

<script setup>
import BorderPreview from "./BorderPreview.vue";
import Controls from "./Controls.vue";
import CssOutput from "./CssOutput.vue";

</script>