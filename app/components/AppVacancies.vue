<script setup lang="ts">
import type { VacanciesCard } from "~/types"

const smallCards: VacanciesCard[] = [
	{ text: "Farmer", src: "/v1.png", large: false },
	{ text: "Motion designer", src: "/v2.png", large: false },
	{ text: "SMM", src: "/v3.png", large: false },
	{ text: "Sales Manager", src: "/v4.png", large: false },
]

const largeCards: VacanciesCard[] = [
	{ text: "Team lead of buying", src: "/v5.png", large: true },
	{ text: "Media buyer (FACEBOOK)", src: "/v6.png", large: true },
	{ text: "Media buyer (GOOGLE)", src: "/v7.png", large: true },
]
</script>

<template>
  <div id="vacancies" class="relative py-24 flex items-center justify-center select-none">
    <NuxtImg
	    src="/cloud-4.png"
	    class="absolute top-0 -translate-y-1/2 right-0 h-[639px] z-30 pointer-events-none"
	    draggable="false"
    />
    <div class="max-w-[1170px] w-full flex flex-col gap-12 z-20">
      <h2 class="uppercase text-[80px] text-[#F3F3F3] font-[Unbounded] font-black">Вакансии</h2>
      <div>
        <div class="absolute w-full h-[1px] bg-[#F3F3F3] left-0 z-0" />
	      <div class="grid grid-cols-4 relative z-10">
		      <VacanciesCard
			      v-for="(vacancy, index) in smallCards"
			      :key="index"
			      :content="vacancy"
		      />
	      </div>
        <div class="grid grid-cols-3 relative z-10">
          <VacanciesCard
	          v-for="(vacancy, index) in largeCards"
	          :key="index"
	          :content="vacancy"
          />
        </div>
        <div class="absolute w-full h-[1px] bg-[#F3F3F3] left-0 -translate-y-[1px] z-0" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
