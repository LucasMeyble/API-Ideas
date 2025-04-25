<template>
  <div class="flex flex-col items-center gap-6">
    <div class="flex gap-4">
      <div v-for="(color, index) in colors" :key="index" class="w-16 h-16 rounded-full transition-all duration-300"
        :class="[
          `bg-${color}-500`,
          store.currentLight === index ? 'brightness-125' : 'brightness-50'
        ]"></div>
    </div>
    <div class="flex items-center gap-4 mt-6">
      <button @click="toggle" class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        {{ store.running ? 'Stop' : 'Start' }}
      </button>

      <label class="flex items-center gap-2 text-gray-700">
        Interval (ms):
        <input type="number" v-model.number="store.interval" class="border px-2 py-1 rounded w-24" />
      </label>
    </div>
  </div>
</template>
<script setup>
import { ref, watch, onUnmounted } from 'vue';
import { useChristmasLigthsStore } from "../../store";

const store = useChristmasLigthsStore();
const timer = ref(null);
const colors = [
  'red',
  'yellow',
  'blue',
  'green',
  'red',
  'yellow',
  'blue',
  'green',
]

function startInterval() {
  timer.value = setInterval(() => {
    store.nextLight()
  }, store.interval)
}

function stopInterval() {
  if (timer.value) {
    clearInterval(timer.value)
    timer.value = null
  }
}

function toggle() {
  store.toggleRunning()
  if (store.running) startInterval()
  else stopInterval()
}

watch(() => store.interval, () => {
  if (store.running) {
    stopInterval()
    startInterval()
  }
})

onUnmounted(() => stopInterval())

</script>