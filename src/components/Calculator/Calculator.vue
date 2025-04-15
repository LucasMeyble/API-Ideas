<style>
button {
  @apply w-full h-12 text-lg font-bold rounded;
}
</style>

<template>
  <div class="flex flex-col items-center justify-center text-white">
    <div class="w-64 bg-gray-800 p-4 rounded-lg shadow-lg">
      <div class="text-right text-3xl bg-gray-700 p-2 rounded">{{ store.display }}</div>
      <div class="grid grid-cols-4 gap-2 mt-4">
        <button @click="store.clearAll" class="bg-red-500">AC</button>
        <button @click="store.clear" class="bg-yellow-500">C</button>
        <button @click="store.toggleSign" class="bg-gray-600">+/-</button>
        <button @click="store.setOperation('/')" class="bg-blue-500">/</button>

        <button v-for="n in [7, 8, 9]" :key="n" @click="store.addDigit(n.toString())" class="bg-gray-700">{{ n
        }}</button>
        <button @click="store.setOperation('-')" class="bg-blue-500">-</button>

        <button v-for="n in [4, 5, 6]" :key="n" @click="store.addDigit(n.toString())" class="bg-gray-700">{{ n
        }}</button>
        <button @click="store.setOperation('+')" class="bg-blue-500">+</button>

        <button v-for="n in [1, 2, 3]" :key="n" @click="store.addDigit(n.toString())" class="bg-gray-700">{{ n
        }}</button>
        <button @click="store.calculateResult" class="row-span-2 bg-green-500">=</button>

        <button @click="store.addDigit('0')" class="col-span-2 bg-gray-700">0</button>
        <button @click="store.addDecimal" class="bg-gray-700">.</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCalculatorStore } from "../../store";
const store = useCalculatorStore();
</script>