<!-- src/components/CssOutput.vue -->
<template>
  <div class="p-4 bg-gray-100 rounded-md">
    <code class="block text-sm font-mono">{{ cssCode }}</code>
    <button @click="copyToClipboard" class="mt-2 px-3 py-1 bg-blue-500 text-white rounded">
      Copy CSS
    </button>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useBorderRadiusPreviewer } from "../../store";

const borderStore = useBorderRadiusPreviewer();

const cssCode = computed(() => `border-radius: ${borderStore.borderRadius};`);

const copyToClipboard = async () => {
  await navigator.clipboard.writeText(cssCode.value);
  alert("Copiado!");
};
</script>
