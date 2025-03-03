<template>
  <div class="">
    <div class="space-y-10 m-h-auto">
      <div class="space-y-5">
        <p class="text-5xl">Boder Radius Previewer</p>
        <p>
          Enter the border-radius values for each corner to customize the shape of the box.
          You can also enable the 8-value mode for more complex shapes.
        </p>
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