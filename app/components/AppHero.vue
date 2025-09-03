<script setup lang="ts">
const openTelegramBot = () => {
	window.open("https://t.me/YWRteam_job_bot", "_blank")
}
</script>

<template>
  <div class="pt-24 pb-12 flex items-center justify-center select-none">
    <div class="max-w-[1170px] w-full">
      <div class="flex flex-col">
        <span class="font-[Unbounded] text-[100px] text-[#F3F3F3] font-black uppercase">Ywr</span>
        <div class="flex flex-col border-l border-[#F3F3F3] ml-11 pl-16">
          <span class="font-[Unbounded] text-[100px] text-[#F3F3F3] font-black uppercase">Team</span>
          <span class="font-[Open_Sans] text-xl text-[#F3F3F3] uppercase mt-4 max-w-[520px]"
            >международная медиабаинговая компания являющаяся одним из лидеров в i-Gaming</span
          >
          <AppButton
            content="Вступить в команду"
            extended
            custom-class="mt-12"
            @click="openTelegramBot"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
