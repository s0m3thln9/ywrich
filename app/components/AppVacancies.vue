<script setup lang="ts">
import type { VacanciesCard } from "~/types"

const smallCards: VacanciesCard[] = [
  { text: "Farmer", src: "/v1.png" },
  { text: "Motion designer", src: "/v2.png" },
  { text: "SMM", src: "/v3.png" },
  { text: "Sales Manager", src: "/v4.png" },
]

const largeCards: VacanciesCard[] = [
  { text: "Team lead of buying", src: "/v5.png" },
  { text: "Media buyer (FACEBOOK)", src: "/v6.png" },
  { text: "Media buyer (GOOGLE)", src: "/v7.png" },
]
</script>

<template>
  <div
    id="vacancies"
    class="relative px-6 md:px-8 xl:px-0 py-12 pt-16 xl:py-24 flex items-center justify-center select-none"
  >
    <NuxtImg
      src="/cloud-4.png"
      class="absolute top-0 -translate-y-1/4 right-0 h-[639px] z-20 pointer-events-none"
      draggable="false"
    />
    <div class="max-w-[1170px] w-full flex flex-col gap-12 z-20">
      <h2 class="uppercase text-[36px] md:text-[50px] xl:text-[80px] text-[#F3F3F3] font-[Unbounded] font-black">
        Вакансии
      </h2>
      <div>
        <div class="absolute w-full h-[1px] bg-[#F3F3F3] left-0 z-0" />
        <div class="grid md:grid-cols-2 xl:grid-cols-4 relative z-10">
          <VacanciesCard
            v-for="(vacancy, index) in smallCards"
            :key="index"
            :content="vacancy"
          />
        </div>
        <div class="grid md:grid-cols-2 xl:grid-cols-3 relative z-10">
          <VacanciesCard
            v-for="(vacancy, index) in largeCards"
            :key="index"
            :content="vacancy"
            :class="index === 2 && 'md:col-span-2 xl:col-span-1'"
          />
        </div>
        <div class="absolute w-full h-[1px] bg-[#F3F3F3] left-0 -translate-y-[1px] z-0" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
