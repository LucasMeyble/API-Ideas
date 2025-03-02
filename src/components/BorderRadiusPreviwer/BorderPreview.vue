<!-- src/components/BorderPreview.vue -->
<template>
  <div class="flex justify-center items-center my-5">
    <div class="w-64 h-64 bg-blue-500 transition-all duration-300" :style="{ borderRadius: borderStore.borderRadius }">
    </div>
  </div>
</template>

<script setup>
import { useBorderRadiusPreviewer } from "../../store";

const borderStore = useBorderRadiusPreviewer();
</script>
