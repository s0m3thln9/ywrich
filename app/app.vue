<template>
  <div class="relative">
    <div class="absolute w-full min-h-screen h-full -z-10 bg-[#090909] overflow-hidden">
      <NuxtImg
        src="/lines-1.svg"
        class="absolute top-0 left-0 w-full z-0"
      />
      <NuxtImg
        src="/cloud-1.png"
        class="absolute top-0 left-0 w-full z-10"
      />
      <NuxtImg
        src="/man.png"
        class="absolute top-[70px] -right-[60px] w-[627px] z-10"
      />
      <NuxtImg
        src="/cloud-2.png"
        class="absolute top-[350px] -right-[250px] w-[1140px] z-20"
      />
    </div>
    <AppHeader />
    <AppHero />
  </div>
</template>
<script setup lang="ts"></script>
