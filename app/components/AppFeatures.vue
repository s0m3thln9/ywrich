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
  <section
    id="features"
    class="relative flex items-center justify-center px-6 md:px-8 xl:px-0 pt-12 xl:pt-24 select-none"
    role="region"
    aria-label="Преимущества компании YWR Team"
  >
    <NuxtImg
      src="/light-3.png"
      alt="Фоновое свечение для секции Наши плюсы"
      class="absolute top-0 left-0 h-[1304px] z-0"
      draggable="false"
      loading="eager"
      role="img"
    />
    <div class="max-w-[1170px] w-full flex flex-col gap-10 xl:gap-12 z-30">
      <h2 class="uppercase text-[44px] md:text-[50px] xl:text-[80px] text-[#F3F3F3] font-[Unbounded] font-black">
        Наши плюсы
      </h2>
      <div
        class="grid md:grid-cols-2 gap-y-16 md:gap-y-11 md:gap-x-7 xl:gap-10 font-[Open_Sans]"
        role="list"
      >
        <FeaturesCard
          v-for="(feature, index) in features"
          :key="index"
          :content="feature"
          role="listitem"
        />
      </div>
    </div>
  </section>
</template>

<style scoped></style>
