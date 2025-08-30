<script setup lang="ts"></script>

<template>
  <header
    class="py-5 font-[Open_Sans] text-[#F3F3F3] text-xl border-b border-[#F3F3F3] flex items-center justify-center"
  >
    <div class="max-w-[1170px] w-full flex items-center justify-between">
      <NuxtImg
        src="/logo.svg"
        width="74"
        class="cursor-pointer"
      />
      <div class="flex items-center gap-16">
        <nav>
          <ul class="flex items-center gap-8">
            <li class="cursor-pointer">О нас</li>
            <li class="cursor-pointer">Рекламодателям</li>
            <li class="cursor-pointer">Плюсы</li>
            <li class="cursor-pointer">Вакансии</li>
          </ul>
        </nav>
        <div class="flex items-center gap-6">
          <NuxtImg
            src="/inst.svg"
            width="28"
            class="cursor-pointer"
          />
          <NuxtImg
            src="/tg.svg"
            width="28"
            class="cursor-pointer"
          />
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped></style>
