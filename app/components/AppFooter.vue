<script setup lang="ts">
const scrollToSection = (id: string) => {
	const el = document.getElementById(id)
	if (el) {
		el.scrollIntoView({ behavior: 'smooth' })
	}
}
const scrollToTop = () => {
	window.scrollTo({top: 0, behavior: 'smooth'})
}
</script>

<template>
  <footer
    class="py-24 font-[Open_Sans] text-[#F3F3F3] text-xl flex items-center justify-center relative border-t border-[#F3F3F3] select-none"
  >
    <NuxtImg
      src="/light-4.png"
      class="absolute bottom-0 right-0 h-[1290px] z-0"
      draggable="false"
    />
    <div class="max-w-[1170px] w-full flex items-center justify-between z-10">
      <NuxtImg
        src="/footer-logo.svg"
        class="cursor-pointer"
        draggable="false"
        @click="scrollToTop"
      />
      <div class="w-[1px] self-stretch bg-[#F3F3F3]" />
      <nav>
        <ul class="flex flex-col gap-5">
          <li class="cursor-pointer relative pb-1 group w-fit" @click="scrollToSection('about')">
            О нас
            <div
              class="absolute bottom-0 left-0 w-full h-0.5 bg-[#C9FF33] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            />
          </li>
          <li class="cursor-pointer relative pb-1 group w-fit" @click="scrollToSection('advertiser')">
            Рекламодателям
            <div
              class="absolute bottom-0 left-0 w-full h-0.5 bg-[#C9FF33] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            />
          </li>
          <li class="cursor-pointer relative pb-1 group w-fit" @click="scrollToSection('features')">
            Плюсы
            <div
              class="absolute bottom-0 left-0 w-full h-0.5 bg-[#C9FF33] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            />
          </li>
          <li class="cursor-pointer relative pb-1 group w-fit" @click="scrollToSection('vacancies')">
            Вакансии
            <div
              class="absolute bottom-0 left-0 w-full h-0.5 bg-[#C9FF33] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            />
          </li>
        </ul>
      </nav>
      <div class="w-[1px] self-stretch bg-[#F3F3F3]" />
      <a
	      href="https://www.instagram.com/ywr_traffic?igsh=cDdjMXUxMm5jeXpl&utm_source=qr"
	      target="_blank"
	      rel="noopener noreferrer"
	      class="flex flex-col gap-3 items-center py-4 px-2 border-y border-[#F3F3F3] cursor-pointer"
      >
        <NuxtImg src="/inst.svg" class="w-9 h-9" draggable="false" />
        <span class="font-[Unbounded] font-black text-[#CBCBCB] text-xs uppercase">Instagram</span>
      </a>
      <a
	      href="https://t.me/ywrteam"
	      target="_blank"
	      rel="noopener noreferrer"
	      class="flex flex-col gap-3 items-center py-4 px-2 border-y border-[#F3F3F3] cursor-pointer"
      >
        <NuxtImg src="/tg.svg" class="w-9 h-9" draggable="false" />
        <span class="font-[Unbounded] font-black text-[#CBCBCB] text-xs uppercase">Telegram</span>
      </a>
    </div>
    <NuxtImg
      src="/cloud-5.png"
      class="absolute bottom-0 left-0 w-full z-0"
      draggable="false"
    />
  </footer>
</template>

<style scoped></style>
