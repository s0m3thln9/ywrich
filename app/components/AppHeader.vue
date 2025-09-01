<script setup lang="ts"></script>

<template>
  <header
    class="py-5 font-[Open_Sans] text-[#F3F3F3] text-xl border-b border-[#F3F3F3] flex items-center justify-center select-none"
  >
    <div class="max-w-[1170px] w-full flex items-center justify-between">
      <NuxtImg
        src="/logo.svg"
        width="74"
        class="cursor-pointer"
        draggable="false"
      />
      <div class="flex items-center gap-16">
        <nav>
          <ul class="flex items-center gap-8">
            <li class="cursor-pointer relative pb-1 group">
              О нас
              <div
                class="absolute bottom-0 left-0 w-full h-0.5 bg-[#C9FF33] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />
            </li>
            <li class="cursor-pointer relative pb-1 group">
              Рекламодателям
              <div
                class="absolute bottom-0 left-0 w-full h-0.5 bg-[#C9FF33] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />
            </li>
            <li class="cursor-pointer relative pb-1 group">
              Плюсы
              <div
                class="absolute bottom-0 left-0 w-full h-0.5 bg-[#C9FF33] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />
            </li>
            <li class="cursor-pointer relative pb-1 group">
              Вакансии
              <div
                class="absolute bottom-0 left-0 w-full h-0.5 bg-[#C9FF33] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />
            </li>
          </ul>
        </nav>
        <div class="flex items-center gap-6">
          <NuxtImg
            src="/inst.svg"
            class="cursor-pointer w-7 h-7"
            draggable="false"
          />
          <NuxtImg
            src="/tg.svg"
            class="cursor-pointer w-7 h-7"
            draggable="false"
          />
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped></style>
