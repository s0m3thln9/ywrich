<template>
  <div class="relative">
    <div class="absolute w-full min-h-screen h-full -z-10 bg-[#090909] overflow-hidden top-0 left-0">
      <NuxtImg
        src="/lines-1.svg"
        class="absolute top-0 left-0 w-full object-cover z-0"
      />
      <NuxtImg
        src="/lines-2.svg"
        class="absolute top-0 translate-y-[80%] left-0 w-full object-cover z-0"
      />
      <NuxtImg
        src="/cloud-1.png"
        class="absolute top-0 left-0 w-full z-20"
      />
      <div class="absolute top-10 -right-[60px]">
        <div class="relative w-[1140px] aspect-[1140/949]">
          <NuxtImg
            src="/man.png"
            class="absolute top-10 right-10 w-[627px] z-10"
          />
          <NuxtImg
            src="/cloud-2.png"
            class="absolute -bottom-1/3 right-0 w-[1140px] z-20"
          />
        </div>
      </div>
    </div>
    <AppHeader />
    <AppHero />
    <AppAbout />
    <AppAdvertiser />
    <AppFeatures />
    <AppVacancies />
  </div>
</template>
<script setup lang="ts"></script>
