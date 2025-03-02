<!-- src/components/Controls.vue -->
<template>
  <div class="p-4 space-y-2">

    <div class="grid grid-cols-2 gap-4">
      <!-- Campos para os primeiros 4 valores -->
      <div v-for="(label, key) in borderValues" :key="key">
        <label class="block text-sm font-medium">{{ label }}</label>
        <input v-model="borderStore[key]" type="text" class="w-50 text-xs p-1 text-center" />
      </div>
    </div>

    <!-- Checkbox para habilitar 8 valores -->
    <label class="flex items-center justify-center space-x-2 mt-4">
      <input type="checkbox" v-model="borderStore.verticalSplit" />
      <span>Habilitar 8 valores</span>
    </label>

    <!-- Se ativado, mostra os inputs adicionais -->
    <div v-if="borderStore.verticalSplit" class="grid grid-cols-2 gap-4 mt-4">
      <div v-for="(label, key) in secondBorderValues" :key="key">
        <label class="block text-sm font-medium">{{ label }}</label>
        <input v-model="borderStore[key]" type="text" class="w-50 text-xs p-1 text-center" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useBorderRadiusPreviewer } from "../../store";

const borderStore = useBorderRadiusPreviewer();

// Labels dos inputs principais (4 valores)
const borderValues = {
  topLeft: "Top Left",
  topRight: "Top Right",
  bottomRight: "Bottom Right",
  bottomLeft: "Bottom Left",
};

// Labels dos inputs adicionais (quando 8 valores são ativados)
const secondBorderValues = {
  topLeftSecond: "Top Left (Vertical)",
  topRightSecond: "Top Right (Vertical)",
  bottomRightSecond: "Bottom Right (Vertical)",
  bottomLeftSecond: "Bottom Left (Vertical)",
};
</script>
