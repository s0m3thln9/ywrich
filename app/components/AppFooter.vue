<script setup lang="ts"></script>

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
      />
      <div class="w-[1px] self-stretch bg-[#F3F3F3]" />
      <nav>
        <ul class="flex flex-col gap-5">
          <li class="cursor-pointer relative pb-1 group w-fit">
            О нас
            <div
              class="absolute bottom-0 left-0 w-full h-0.5 bg-[#C9FF33] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            />
          </li>
          <li class="cursor-pointer relative pb-1 group w-fit">
            Рекламодателям
            <div
              class="absolute bottom-0 left-0 w-full h-0.5 bg-[#C9FF33] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            />
          </li>
          <li class="cursor-pointer relative pb-1 group w-fit">
            Плюсы
            <div
              class="absolute bottom-0 left-0 w-full h-0.5 bg-[#C9FF33] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            />
          </li>
          <li class="cursor-pointer relative pb-1 group w-fit">
            Вакансии
            <div
              class="absolute bottom-0 left-0 w-full h-0.5 bg-[#C9FF33] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            />
          </li>
        </ul>
      </nav>
      <div class="w-[1px] self-stretch bg-[#F3F3F3]" />
      <div class="flex flex-col gap-3 items-center py-4 px-2 border-y border-[#F3F3F3] cursor-pointer">
        <NuxtImg
          src="inst.svg"
          class="w-9 h-9"
          draggable="false"
        />
        <span class="font-[Unbounded] font-black text-[#CBCBCB] text-xs uppercase">Instagram</span>
      </div>
      <div class="flex flex-col gap-3 items-center py-4 px-2 border-y border-[#F3F3F3] cursor-pointer">
        <NuxtImg
          src="/tg.svg"
          class="w-9 h-9"
          draggable="false"
        />
        <span class="font-[Unbounded] font-black text-[#CBCBCB] text-xs uppercase">Telegram</span>
      </div>
    </div>
    <NuxtImg
      src="/cloud-5.png"
      class="absolute bottom-0 left-0 w-full z-0"
      draggable="false"
    />
  </footer>
</template>

<style scoped></style>
