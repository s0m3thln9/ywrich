<script setup lang="ts">
const openTelegramBot = () => {
  try {
    window.open("https://t.me/YWRteam_job_bot", "_blank", "noopener,noreferrer")
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
    id="about"
    class="relative pt-16 md:pt-24 px-6 md:px-8 xl:px-0 flex items-center justify-center select-none"
    role="region"
    aria-label="О компании YWR Team"
  >
    <NuxtImg
      src="/light-2.png"
      alt="Фоновое свечение для секции О нас"
      class="absolute top-0 md:top-0 right-0 z-0 h-[1513px]"
      draggable="false"
      loading="eager"
      role="img"
    />
    <div class="max-w-[1170px] w-full flex flex-col gap-7 xl:gap-12">
      <h2 class="font-[Unbounded] font-black text-[#F3F3F3] text-[44px] md:text-[50px] xl:text-[80px] uppercase">
        О нас
      </h2>
      <div class="flex flex-col">
        <div
          class="grid md:grid-cols-[1fr_60%] xl:grid-cols-[1fr_40%] border-y border-[#F3F3F3] max-md:gap-4 px-4 py-8 md:px-5 xl:py-10 xl:px-8"
        >
          <div class="grid xl:grid-cols-[1fr_80%]">
            <span
              class="leading-[100%] font-[Open_Sans] text-[#3D3D3D] text-[50px] md:text-[30px] xl:text-[50px] uppercase"
              aria-hidden="true"
            >
              01
            </span>
            <h3
              class="w-2/3 font-[Open_Sans] font-semibold text-[#F3F3F3] text-2xl md:text-[26px] xl:text-4xl uppercase"
            >
              Стратегии продвижения
            </h3>
          </div>
          <div>
            <p class="font-[Open_Sans] text-[#CBCBCB] text-[15px] md:text-base xl:text-lg">
              Мы заставляем наших клиентов становится лучше благодаря нашим нестандартным стратегиям к продвижению.
            </p>
          </div>
        </div>
        <div
          class="grid md:grid-cols-[1fr_60%] xl:grid-cols-[1fr_40%] border-y border-[#F3F3F3] max-md:gap-4 px-4 py-8 md:px-5 xl:py-10 xl:px-8"
        >
          <div class="grid xl:grid-cols-[1fr_80%]">
            <span
              class="leading-[100%] font-[Open_Sans] text-[#3D3D3D] text-[50px] md:text-[30px] xl:text-[50px] uppercase"
              aria-hidden="true"
            >
              02
            </span>
            <h3
              class="w-2/3 font-[Open_Sans] font-semibold text-[#F3F3F3] text-2xl md:text-[26px] xl:text-4xl uppercase"
            >
              Привлечении и монетизации трафика
            </h3>
          </div>
          <div>
            <p class="font-[Open_Sans] text-[#CBCBCB] text-[15px] md:text-base xl:text-lg">
              Наш опыт, аналитический подход и использование передовых инструментов позволяют нам находить самые
              эффективные связки офферов и рекламных каналов, обеспечивая стабильный доход для наших партнеров.
            </p>
          </div>
        </div>
        <div
          class="grid md:grid-cols-[1fr_60%] xl:grid-cols-[1fr_40%] border-y border-[#F3F3F3] max-md:gap-4 px-4 py-8 md:px-5 xl:py-10 xl:px-8"
        >
          <div class="grid xl:grid-cols-[1fr_80%]">
            <span
              class="leading-[100%] font-[Open_Sans] text-[#3D3D3D] text-[50px] md:text-[30px] xl:text-[50px] uppercase"
              aria-hidden="true"
            >
              03
            </span>
            <h3
              class="w-2/3 font-[Open_Sans] font-semibold text-[#F3F3F3] text-2xl md:text-[26px] xl:text-4xl uppercase"
            >
              Новые подходы, вертикали и GEO
            </h3>
          </div>
          <div>
            <p class="font-[Open_Sans] text-[#CBCBCB] text-[15px] md:text-base xl:text-lg">
              Мы постоянно тестируем новые подходы, вертикали и GEO, чтобы оставаться на передовой арбитража трафика.
              Наша цель — долгосрочное и взаимовыгодное сотрудничество.
            </p>
          </div>
        </div>
      </div>
      <AppButton
        content="Вступить в команду"
        custom-class="self-center"
        role="button"
        tabindex="0"
        aria-label="Вступить в команду YWR Team через Telegram бот"
        @click="openTelegramBot"
        @keydown="handleKeydown"
      />
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
