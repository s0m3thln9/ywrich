<script setup lang="ts">
const openTelegramBot = () => {
  window.open("https://t.me/YWRteam_job_bot", "_blank")
}
</script>

<template>
  <div
    class="pt-[140px] md:pt-[200px] xl:pt-[180px] pb-12 px-6 md:px-8 xl:px-0 flex items-center justify-center select-none"
  >
    <div class="max-w-[1170px] w-full">
      <div class="flex flex-col">
        <span class="font-[Unbounded] text-5xl md:text-[70px] xl:text-[100px] text-[#F3F3F3] font-black uppercase"
          >Ywr</span
        >
        <div class="flex flex-col border-l border-[#F3F3F3] ml-[22px] pl-6 md:ml-8 md:pl-14 xl:ml-11 xl:pl-16">
          <span class="font-[Unbounded] md:text-[70px] text-5xl xl:text-[100px] text-[#F3F3F3] font-black uppercase"
            >Team</span
          >
          <span class="font-[Open_Sans] text-[15px] md:text-xl text-[#F3F3F3] uppercase mt-4 max-w-[520px]"
            >международная медиабаинговая компания являющаяся одним из лидеров в i-Gaming</span
          >
          <AppButton
            content="Вступить в команду"
            extended
            custom-class="hidden md:flex mt-9"
            @click="openTelegramBot"
          />
        </div>
        <AppButton
          content="Вступить в команду"
          extended
          custom-class="flex md:hidden mt-9"
          @click="openTelegramBot"
        />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
