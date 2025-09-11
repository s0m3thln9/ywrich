<script setup lang="ts">
const scrollToSection = (id: string) => {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: "smooth" })
  }
}
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" })
}
const handleKeydown = (event: KeyboardEvent, action: () => void) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault()
    action()
  }
}
</script>

<template>
  <footer
    class="py-12 xl:py-24 px-6 md:px-8 xl:px-0 font-[Open_Sans] text-[#F3F3F3] text-xl flex items-center justify-center relative border-t border-[#F3F3F3] select-none"
    role="contentinfo"
    aria-label="Подвал сайта YWR Team"
  >
    <NuxtImg
      src="/light-4.png"
      alt="Фоновое свечение справа"
      class="absolute bottom-0 right-0 h-[1290px] z-0"
      draggable="false"
      loading="eager"
      role="img"
    />
    <NuxtImg
      src="/light-4.png"
      alt="Фоновое свечение слева"
      class="absolute bottom-0 translate-y-20 left-0 h-[1290px] rotate-180 z-0 md:hidden"
      draggable="false"
      loading="eager"
      role="img"
    />
    <div
      class="max-w-[1170px] w-full flex flex-col md:flex-row items-center max-md:gap-5 md:items-start justify-between z-10"
    >
      <NuxtImg
        src="/footer-logo.svg"
        alt="Логотип YWR Team"
        class="cursor-pointer w-[136px] xl:w-[276px] h-fit"
        draggable="false"
        role="link"
        tabindex="0"
        aria-label="Прокрутить страницу вверх"
        loading="eager"
        @click="scrollToTop"
        @keydown="handleKeydown($event, scrollToTop)"
      />
      <div class="max-md:h-[1px] max-md:w-full md:w-[1px] md:self-stretch bg-[#F3F3F3]" />
      <nav aria-label="Основная навигация по сайту">
        <ul class="flex flex-col gap-5 max-md:items-center">
          <li
            class="cursor-pointer relative pb-1 group w-fit"
            @click.prevent="scrollToSection('about')"
            @keydown="handleKeydown($event, () => scrollToSection('about'))"
          >
            О нас
            <div
              class="absolute bottom-0 left-0 w-full h-0.5 bg-[#C9FF33] opacity-0 transition-opacity duration-300 md:group-hover:opacity-100"
            />
          </li>
          <li
            class="cursor-pointer relative pb-1 group w-fit"
            @click.prevent="scrollToSection('advertiser')"
            @keydown="handleKeydown($event, () => scrollToSection('advertiser'))"
          >
            Рекламодателям
            <div
              class="absolute bottom-0 left-0 w-full h-0.5 bg-[#C9FF33] opacity-0 transition-opacity duration-300 md:group-hover:opacity-100"
            />
          </li>
          <li
            class="cursor-pointer relative pb-1 group w-fit"
            @click.prevent="scrollToSection('features')"
            @keydown="handleKeydown($event, () => scrollToSection('features'))"
          >
            Плюсы
            <div
              class="absolute bottom-0 left-0 w-full h-0.5 bg-[#C9FF33] opacity-0 transition-opacity duration-300 md:group-hover:opacity-100"
            />
          </li>
          <li
            class="cursor-pointer relative pb-1 group w-fit"
            @click.prevent="scrollToSection('vacancies')"
            @keydown="handleKeydown($event, () => scrollToSection('vacancies'))"
          >
            Вакансии
            <div
              class="absolute bottom-0 left-0 w-full h-0.5 bg-[#C9FF33] opacity-0 transition-opacity duration-300 md:group-hover:opacity-100"
            />
          </li>
        </ul>
      </nav>
      <div class="max-md:h-[1px] max-md:w-full md:w-[1px] md:self-stretch bg-[#F3F3F3]" />
      <a
        href="https://www.instagram.com/ywr_traffic?igsh=cDdjMXUxMm5jeXpl&utm_source=qr"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Открыть Instagram YWR Team"
        class="flex-col gap-3 items-center py-4 px-2 border-y border-[#F3F3F3] cursor-pointer h-fit hidden md:flex"
      >
        <NuxtImg
          src="/inst.svg"
          alt="Иконка Instagram"
          class="w-9 h-9"
          draggable="false"
          loading="eager"
          role="img"
        />
        <span class="font-[Unbounded] font-black text-[#CBCBCB] text-xs uppercase">Instagram</span>
      </a>
      <a
        href="https://t.me/ywrteam"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Открыть Telegram YWR Team"
        class="flex-col gap-3 items-center py-4 px-2 border-y border-[#F3F3F3] cursor-pointer h-fit hidden md:flex"
      >
        <NuxtImg
          src="/tg.svg"
          alt="Иконка Telegram"
          class="w-9 h-9"
          draggable="false"
          loading="eager"
          role="img"
        />
        <span class="font-[Unbounded] font-black text-[#CBCBCB] text-xs uppercase">Telegram</span>
      </a>
      <div class="flex items-center justify-between w-full md:hidden">
        <a
          href="https://www.instagram.com/ywr_traffic?igsh=cDdjMXUxMm5jeXpl&utm_source=qr"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Открыть Instagram YWR Team"
          class="flex flex-col gap-3 items-center py-4 px-2 border-y border-[#F3F3F3] cursor-pointer h-fit"
        >
          <NuxtImg
            src="/inst.svg"
            alt="Иконка Instagram"
            class="w-9 h-9"
            draggable="false"
            loading="eager"
            role="img"
          />
          <span class="font-[Unbounded] font-black text-[#CBCBCB] text-xs uppercase">Instagram</span>
        </a>
        <a
          href="https://t.me/ywrteam"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Открыть Telegram YWR Team"
          class="flex flex-col gap-3 items-center py-4 px-2 border-y border-[#F3F3F3] cursor-pointer h-fit"
        >
          <NuxtImg
            src="/tg.svg"
            alt="Иконка Telegram"
            class="w-9 h-9"
            draggable="false"
            loading="eager"
            role="img"
          />
          <span class="font-[Unbounded] font-black text-[#CBCBCB] text-xs uppercase">Telegram</span>
        </a>
      </div>
    </div>
    <NuxtImg
      src="/cloud-5.png"
      alt="Фоновое облако"
      class="absolute bottom-0 left-0 w-full z-0 hidden md:flex"
      draggable="false"
      loading="eager"
      role="img"
    />
    <NuxtImg
      src="/cloud-6.png"
      alt="Фоновое облако"
      class="absolute bottom-0 left-0 w-full z-0 md:hidden"
      draggable="false"
      loading="eager"
      role="img"
    />
  </footer>
</template>

<style scoped>
a:focus-visible,
[role="link"]:focus-visible {
  outline: 2px solid #c9ff33;
  outline-offset: 4px;
}
</style>
