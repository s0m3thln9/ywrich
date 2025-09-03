<script setup lang="ts">
const openTelegramBot = () => {
	window.open("https://t.me/YWR_offers_bot", "_blank")
}
</script>

<template>
  <div id="advertiser" class="relative pt-24 flex items-center justify-center select-none">
    <NuxtImg
      src="/cloud-3.png"
      class="absolute top-0 left-0 w-full z-10 translate-y-24"
      draggable="false"
    />
    <div class="max-w-[1170px] w-full flex flex-col gap-5 z-20">
      <h2 class="uppercase text-[80px] text-[#F3F3F3] font-[Unbounded] font-black">Рекламодателям</h2>
      <div class="flex gap-10">
        <NuxtImg
          src="/chain.png"
          class="w-[534px] h-[591px] -ml-40"
          draggable="false"
        />
        <div class="flex flex-col gap-12 font-[Open_Sans] border-y border-[#F3F3F3] pl-16 py-16">
          <div class="flex flex-col gap-5">
            <h3 class="uppercase text-4xl text-[#C9FF33] font-extrabold">YWR team</h3>
            <p class="uppercase text-[22px] text-[#CBCBCB]">
              международная медиабаинговая компания являющаяся одним из лидеров в i-Gaming
            </p>
            <p class="uppercase text-[22px] text-[#CBCBCB]">
              мы заставляем наших клиентов становится лучше благодаря нашим нестандартным стратегиям к продвижению
            </p>
          </div>
          <div class="flex flex-col gap-3 border-l border-[#F3F3F3] ml-10 pl-6">
            <h4 class="uppercase text-[32px] text-[#F3F3F3] font-extrabold">вы рекламодатель ?</h4>
            <p class="uppercase text-[22px] text-[#CBCBCB]">
              оставьте информацию о себе и мы обязательно найдем решение для
              <span class="text-[#C9FF33] font-bold">продвижения вашего продукта</span>
            </p>
            <AppButton
              content="Оставить информацию"
              extended
              custom-class="mt-12"
              @click="openTelegramBot"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
