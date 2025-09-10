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
</script>

<template>
  <footer
    class="py-12 xl:py-24 px-6 md:px-8 xl:px-0 font-[Open_Sans] text-[#F3F3F3] text-xl flex items-center justify-center relative border-t border-[#F3F3F3] select-none"
  >
    <NuxtImg
      src="/light-4.png"
      class="absolute bottom-0 right-0 h-[1290px] z-0"
      draggable="false"
    />
	  <NuxtImg
		  src="/light-4.png"
		  class="absolute bottom-0 translate-y-20 left-0 h-[1290px] rotate-180 z-0 md:hidden"
		  draggable="false"
	  />
    <div
      class="max-w-[1170px] w-full flex flex-col md:flex-row items-center max-md:gap-5 md:items-start justify-between z-10"
    >
      <NuxtImg
        src="/footer-logo.svg"
        class="cursor-pointer w-[136px] xl:w-[276px] h-fit"
        draggable="false"
        @click="scrollToTop"
      />
      <div class="max-md:h-[1px] max-md:w-full md:w-[1px] md:self-stretch bg-[#F3F3F3]" />
      <nav>
        <ul class="flex flex-col gap-5 max-md:items-center">
          <li
            class="cursor-pointer relative pb-1 group w-fit"
            @click="scrollToSection('about')"
          >
            О нас
            <div
              class="absolute bottom-0 left-0 w-full h-0.5 bg-[#C9FF33] opacity-0 transition-opacity duration-300 md:group-hover:opacity-100"
            />
          </li>
          <li
            class="cursor-pointer relative pb-1 group w-fit"
            @click="scrollToSection('advertiser')"
          >
            Рекламодателям
            <div
              class="absolute bottom-0 left-0 w-full h-0.5 bg-[#C9FF33] opacity-0 transition-opacity duration-300 md:group-hover:opacity-100"
            />
          </li>
          <li
            class="cursor-pointer relative pb-1 group w-fit"
            @click="scrollToSection('features')"
          >
            Плюсы
            <div
              class="absolute bottom-0 left-0 w-full h-0.5 bg-[#C9FF33] opacity-0 transition-opacity duration-300 md:group-hover:opacity-100"
            />
          </li>
          <li
            class="cursor-pointer relative pb-1 group w-fit"
            @click="scrollToSection('vacancies')"
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
        class="flex-col gap-3 items-center py-4 px-2 border-y border-[#F3F3F3] cursor-pointer h-fit hidden md:flex"
      >
        <NuxtImg
          src="/inst.svg"
          class="w-9 h-9"
          draggable="false"
        />
        <span class="font-[Unbounded] font-black text-[#CBCBCB] text-xs uppercase">Instagram</span>
      </a>
      <a
        href="https://t.me/ywrteam"
        target="_blank"
        rel="noopener noreferrer"
        class="flex-col gap-3 items-center py-4 px-2 border-y border-[#F3F3F3] cursor-pointer h-fit hidden md:flex"
      >
        <NuxtImg
          src="/tg.svg"
          class="w-9 h-9"
          draggable="false"
        />
        <span class="font-[Unbounded] font-black text-[#CBCBCB] text-xs uppercase">Telegram</span>
      </a>
      <div class="flex items-center justify-between w-full md:hidden">
        <a
          href="https://www.instagram.com/ywr_traffic?igsh=cDdjMXUxMm5jeXpl&utm_source=qr"
          target="_blank"
          rel="noopener noreferrer"
          class="flex flex-col gap-3 items-center py-4 px-2 border-y border-[#F3F3F3] cursor-pointer h-fit"
        >
          <NuxtImg
            src="/inst.svg"
            class="w-9 h-9"
            draggable="false"
          />
          <span class="font-[Unbounded] font-black text-[#CBCBCB] text-xs uppercase">Instagram</span>
        </a>
        <a
          href="https://t.me/ywrteam"
          target="_blank"
          rel="noopener noreferrer"
          class="flex flex-col gap-3 items-center py-4 px-2 border-y border-[#F3F3F3] cursor-pointer h-fit"
        >
          <NuxtImg
            src="/tg.svg"
            class="w-9 h-9"
            draggable="false"
          />
          <span class="font-[Unbounded] font-black text-[#CBCBCB] text-xs uppercase">Telegram</span>
        </a>
      </div>
    </div>
    <NuxtImg
      src="/cloud-5.png"
      class="absolute bottom-0 left-0 w-full z-0 hidden md:flex"
      draggable="false"
    />
	  <NuxtImg
		  src="/cloud-6.png"
		  class="absolute bottom-0 left-0 w-full z-0 md:hidden"
		  draggable="false"
	  />
  </footer>
</template>

<style scoped></style>
