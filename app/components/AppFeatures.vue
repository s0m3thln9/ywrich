<script setup lang="ts">
import type { FeaturesCard } from "~/types"

const features: FeaturesCard[] = [
  { number: "01", text: "Возможные источники трафика" },
  { number: "02", text: "Наш пул гео неограничен, мы льем трафик по всему миру" },
  { number: "03", text: "Модели оплат" },
  { number: "04", text: "Отличные результаты в i-Gaming" },
]
</script>

<template>
  <div class="relative flex items-center justify-center py-24 select-none">
    <NuxtImg
      src="/light-3.png"
      class="absolute top-0 left-0 h-[1304px] z-0"
      draggable="false"
    />
    <div class="max-w-[1170px] w-full flex flex-col gap-12">
      <h2 class="uppercase text-[80px] text-[#F3F3F3] font-[Unbounded] font-black">Наши плюсы</h2>
      <div class="grid grid-cols-2 gap-10 font-[Open_Sans]">
        <FeaturesCard
          v-for="(feature, index) in features"
          :key="index"
          :content="feature"
        />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
