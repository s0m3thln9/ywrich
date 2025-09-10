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
  <div
    id="features"
    class="relative flex items-center justify-center px-6 md:px-8 xl:px-0 pt-12 xl:pt-24 select-none"
  >
    <NuxtImg
      src="/light-3.png"
      class="absolute top-0 left-0 h-[1304px] z-0"
      draggable="false"
    />
    <div class="max-w-[1170px] w-full flex flex-col gap-10 xl:gap-12 z-30">
      <h2 class="uppercase text-[44px] md:text-[50px] xl:text-[80px] text-[#F3F3F3] font-[Unbounded] font-black">
        Наши плюсы
      </h2>
      <div class="grid md:grid-cols-2 gap-y-16 md:gap-y-11 md:gap-x-7 xl:gap-10 font-[Open_Sans]">
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
