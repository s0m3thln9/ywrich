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
    class="pt-[140px] md:pt-[200px] xl:pt-[180px] px-6 md:px-8 xl:px-0 flex items-center justify-center select-none"
    role="banner"
    aria-label="Главная секция"
  >
    <div class="max-w-[1170px] w-full">
      <div class="flex flex-col">
        <h1 class="sr-only">YWR Team - международная медиабаинговая компания, лидер в i-Gaming</h1>
        <span
          class="font-[Unbounded] text-5xl md:text-[70px] xl:text-[100px] text-[#F3F3F3] font-black uppercase"
          aria-hidden="true"
        >
          Ywr
        </span>
        <div class="flex flex-col border-l border-[#F3F3F3] ml-[22px] pl-6 md:ml-8 md:pl-14 xl:ml-11 xl:pl-16">
          <span
            class="font-[Unbounded] md:text-[70px] text-5xl xl:text-[100px] text-[#F3F3F3] font-black uppercase"
            aria-hidden="true"
          >
            Team
          </span>
          <p
            class="font-[Open_Sans] text-[15px] md:text-xl text-[#F3F3F3] uppercase mt-4 max-w-[520px]"
            role="text"
          >
            международная медиабаинговая компания являющаяся одним из лидеров в i-Gaming
          </p>
          <AppButton
            content="Вступить в команду"
            extended
            custom-class="hidden md:flex mt-9"
            role="button"
            tabindex="0"
            aria-label="Вступить в команду YWR Team через Telegram бот"
            @click="openTelegramBot"
            @keydown="handleKeydown"
          />
        </div>
        <AppButton
          content="Вступить в команду"
          extended
          custom-class="flex md:hidden mt-9"
          role="button"
          tabindex="0"
          aria-label="Вступить в команду YWR Team через Telegram бот"
          @click="openTelegramBot"
          @keydown="handleKeydown"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

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
