<script setup lang="ts">
const openTelegramBot = () => {
  try {
    window.open("https://t.me/YWR_offers_bot", "_blank", "noopener,noreferrer")
  } catch (error) {
    console.error("Ошибка при открытии Telegram бота:", error)
  }
}

const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault()
    openTelegramBot()
  }
}
</script>

<template>
  <section
    id="advertiser"
    class="relative px-6 md:px-8 xl:px-0 pt-16 xl:pt-24 flex items-center justify-center select-none"
    role="region"
    aria-label="Информация для рекламодателей YWR Team"
  >
    <NuxtImg
      src="/cloud-3.png"
      alt="Фоновое облако для секции рекламодателей"
      class="hidden md:block absolute top-0 left-0 w-full z-10 translate-y-24"
      draggable="false"
      loading="eager"
      role="img"
    />
    <NuxtImg
      src="/light-adv.png"
      alt="Фоновое свечение для мобильной версии"
      class="md:hidden absolute top-0 -right-20 h-[1000px] z-10"
      draggable="false"
      loading="eager"
      role="img"
    />
    <div class="max-w-[1170px] w-full flex flex-col gap-5 z-20">
      <h2 class="uppercase text-[20px] md:text-[50px] xl:text-[80px] text-[#F3F3F3] font-[Unbounded] font-black">
        Рекламодателям
      </h2>
      <div class="flex flex-col items-center md:flex-row gap-10">
        <NuxtImg
          src="/chain.png"
          alt="Цепь — символ партнерства"
          class="hidden xl:block w-[534px] h-[591px] -ml-40"
          draggable="false"
          loading="eager"
          role="img"
        />
        <NuxtImg
          src="/chain-md.png"
          alt="Цепь — символ партнерства (мобильная версия)"
          class="w-[220px] h-[220px] md:w-auto md:h-auto xl:hidden"
          draggable="false"
          loading="eager"
          role="img"
        />
        <div
          class="flex flex-col gap-7 xl:gap-12 font-[Open_Sans] border-y border-[#F3F3F3] px-4 md:pl-5 md:pr-0 xl:pr-0 xl:pl-16 py-5 md:pt-16 md:pb-8 xl:pb-16"
        >
          <div class="flex flex-col gap-2.5 md:gap-3 xl:gap-5">
            <h3 class="uppercase text-[40px] xl:text-4xl text-[#C9FF33] font-extrabold">YWR team</h3>
            <p class="uppercase text-[15px] md:text-lg xl:text-[22px] text-[#CBCBCB]">
              международная медиабаинговая компания являющаяся одним из лидеров в i-Gaming
            </p>
            <p class="uppercase text-[15px] md:text-lg xl:text-[22px] text-[#CBCBCB]">
              мы заставляем наших клиентов становится лучше благодаря нашим нестандартным стратегиям к продвижению
            </p>
          </div>
          <div class="flex md:hidden xl:flex flex-col gap-3 border-l border-[#F3F3F3] xl:ml-10 pl-4 xl:pl-6">
            <h4 class="uppercase text-[22px] xl:text-[32px] text-[#F3F3F3] font-extrabold">вы рекламодатель ?</h4>
            <p class="uppercase text-[15px] xl:text-[22px] text-[#CBCBCB]">
              оставьте информацию о себе и мы обязательно найдем решение для
              <span class="text-[#C9FF33] font-bold">продвижения вашего продукта</span>
            </p>
            <AppButton
              content="Оставить информацию"
              extended
              custom-class="hidden xl:flex xl:mt-9"
              role="button"
              tabindex="0"
              aria-label="Оставить информацию для YWR Team через Telegram бот"
              @click="openTelegramBot"
              @keydown="handleKeydown"
            />
            <AppButton
              content="Оставить информацию"
              custom-class="xl:hidden mt-4"
              custom-inner-class="px-3"
              role="button"
              tabindex="0"
              aria-label="Оставить информацию для YWR Team через Telegram бот"
              @click="openTelegramBot"
              @keydown="handleKeydown"
            />
          </div>
        </div>
      </div>
      <div class="hidden md:flex xl:hidden flex-col gap-3 border-l border-[#F3F3F3] pl-6">
        <h4 class="uppercase text-[30px] text-[#F3F3F3] font-extrabold">вы рекламодатель ?</h4>
        <p class="uppercase text-xl text-[#CBCBCB]">
          оставьте информацию о себе и мы обязательно найдем решение для
          <span class="text-[#C9FF33] font-bold">продвижения вашего продукта</span>
        </p>
        <AppButton
          content="Оставить информацию"
          extended
          custom-class="mt-6"
          role="button"
          tabindex="0"
          aria-label="Оставить информацию для YWR Team через Telegram бот"
          @click="openTelegramBot"
          @keydown="handleKeydown"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
[role="button"]:focus-visible {
  outline: 2px solid #ffffff;
  outline-offset: 4px;
}

[role="button"] {
  transition:
    transform 0.2s ease,
    opacity 0.2s ease;
}

[role="button"]:hover {
  transform: translateY(-2px);
}

[role="button"]:active {
  transform: translateY(0);
}
</style>
