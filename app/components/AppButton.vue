<script setup lang="ts">
defineProps<{
  content: string
  extended?: boolean
  customClass?: string
}>()
</script>

<template>
  <button
    class="flex items-center gap-1 w-fit relative overflow-hidden group select-none"
    :class="customClass"
  >
    <span class="px-7 py-2 font-[Open_Sans] font-bold text-[#0F0F0F] bg-[#F3F3F3] rounded-[1px]">
      <span class="relative z-10">{{ content }}</span>
    </span>
    <span
      v-show="extended"
      class="bg-[#F3F3F3] rounded-[1px] h-10 w-10 flex justify-center items-center"
    >
      <span class="relative z-10">
        <NuxtImg
          src="/arrow.svg"
          class="w-[14px]"
          draggable="false"
        />
      </span>
    </span>
    <span
      class="absolute inset-y-0 left-1/2 opacity-0 transform -translate-x-1/2 z-0 bg-[#C9FF33] w-0 group-hover:w-full group-hover:opacity-100 transition-all duration-300 ease-in-out rounded-[1px]"
    />
  </button>
</template>

<style scoped></style>
