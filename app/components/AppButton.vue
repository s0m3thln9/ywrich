<script setup lang="ts">
defineProps<{
  content: string
  extended?: boolean
  customClass?: string
  customInnerClass?: string
}>()
</script>

<template>
  <button
    type="button"
    class="flex items-center gap-1 w-fit relative overflow-hidden group select-none"
    :class="customClass"
    :aria-label="content"
  >
    <span
      class="py-2 font-[Open_Sans] flex items-center justify-center font-bold text-[#0F0F0F] bg-[#C9FF33] md:bg-[#F3F3F3] h-10 rounded-[1px]"
      :class="customInnerClass ? customInnerClass : 'px-7'"
    >
      <span class="relative z-10">{{ content }}</span>
    </span>
    <span
      v-show="extended"
      class="bg-[#C9FF33] md:bg-[#F3F3F3] rounded-[1px] h-10 w-10 flex justify-center items-center"
    >
      <span class="relative z-10">
        <NuxtImg
          src="/arrow.svg"
          alt=""
          class="w-[14px]"
          draggable="false"
          loading="eager"
          role="img"
        />
      </span>
    </span>
    <span
      aria-hidden="true"
      class="absolute inset-y-0 left-1/2 md:opacity-0 transform -translate-x-1/2 z-0 bg-[#C9FF33] md:w-0 md:group-hover:w-full md:group-hover:opacity-100 transition-all duration-300 ease-in-out rounded-[1px]"
    />
  </button>
</template>

<style scoped></style>
