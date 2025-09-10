<script setup lang="ts">
import type { VacanciesCard } from "~/types"

defineProps<{
  content: VacanciesCard
}>()

const isHovered = ref(false)

const openTelegramBot = () => {
  window.open("https://t.me/YWRteam_job_bot", "_blank")
}
</script>

<template>
  <div
    class="flex flex-col gap-5 pb-5 cursor-pointer bg-[#131313] md:hover:bg-[#C9FF33] border border-[#F3F3F3] md:hover:border-[#C9FF33] text-[#F3F3F3] md:hover:text-[#101010] z-20 transition-all duration-300"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
    @click="openTelegramBot"
  >
    <div class="flex flex-col bg-[#131313]">
      <NuxtImg
        :src="content.src"
        draggable="false"
        class="w-[292px] h-[240px] mx-auto"
      />
    </div>
    <div class="flex items-center justify-between p-4">
      <h4 class="font-[Open_Sans] text-[22px] font-bold uppercase">{{ content.text }}</h4>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        viewBox="0 0 25 25"
        :class="['transition-colors duration-300 ease-in-out', isHovered ? 'md:text-[#2C2C2C]' : 'text-[#C9FF33]']"
      >
        <path
          d="M1.1817 24.3182L23.8181 1.68195M23.8181 0.68195L23.8181 17.1402M23.8181 1.68195L8.35987 1.68195"
          stroke="currentColor"
          stroke-width="2"
        />
      </svg>
    </div>
  </div>
</template>

<style scoped></style>
