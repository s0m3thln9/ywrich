<script setup lang="ts">
import type { FeaturesCard } from "~/types"

defineProps<{
  content: FeaturesCard
}>()

const isHovered = ref(false)
</script>

<template>
  <div
    class="bg-[#131313] border border-[#F3F3F3] flex flex-col xl:justify-between h-[332px] md:h-[322px] xl:h-[200px] px-4 py-5 relative cursor-pointer"
    role="group"
    :aria-labelledby="`feature-${content.number}`"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <span class="text-[#CBCBCB] text-[26px] uppercase z-20">{{ content.number }}</span>
    <h3
      :id="`feature-${content.number}`"
      class="text-[#F3F3F3] text-[22px] xl:text-[26px] uppercase font-semibold xl:w-[75%] z-20"
    >
      {{ content.text }}
    </h3>
    <template v-if="content.number === '01'">
      <NuxtImg
        src="/f-cloud-1-xl.png"
        alt=""
        aria-hidden="true"
        class="hidden xl:block absolute top-0 left-0 w-full h-full z-10 transition-opacity duration-500"
        :class="isHovered ? 'opacity-100' : 'opacity-0'"
        loading="eager"
        role="img"
      />
      <NuxtImg
        src="/f-cloud-1-md.png"
        alt=""
        aria-hidden="true"
        class="hidden md:block xl:hidden absolute top-0 left-0 w-full h-full z-10 transition-opacity duration-500"
        loading="eager"
        role="img"
      />
      <NuxtImg
        src="/f-cloud-1.png"
        alt=""
        aria-hidden="true"
        class="md:hidden absolute top-0 left-0 w-full h-full z-10 transition-opacity duration-500"
        loading="eager"
        role="img"
      />
      <div class="absolute right-5 xl:-right-8 -bottom-7 md:-bottom-4 xl:-top-8 z-10">
        <div class="xl:hidden relative w-[223px] h-[235px]">
          <NuxtImg
            src="/facebook.svg"
            alt=""
            aria-hidden="true"
            class="absolute left-4 top-8 z-10 w-[75px] h-[75px]"
            loading="eager"
            role="img"
          />
          <NuxtImg
            src="/google.svg"
            aria-hidden="true"
            alt=""
            class="absolute right-4 top-2 z-10 w-[100px] h-[100px]"
            loading="eager"
            role="img"
          />
          <NuxtImg
            src="/google play.svg"
            alt=""
            aria-hidden="true"
            class="absolute left-[72px] top-[92px] z-10 w-[60px] h-[60px]"
            loading="eager"
            role="img"
          />
          <NuxtImg
            src="/seo.svg"
            alt=""
            aria-hidden="true"
            class="absolute right-3 bottom-10 z-10 w-[82px] h-[82px]"
            loading="eager"
            role="img"
          />
          <NuxtImg
            src="/app.svg"
            alt=""
            aria-hidden="true"
            class="absolute left-10 bottom-2 z-10 w-[77px] h-[77px]"
            loading="eager"
            role="img"
          />
        </div>
        <div
          class="hidden xl:block relative w-[226px] h-[269px] transition-opacity duration-500"
          :class="isHovered ? 'opacity-100' : 'opacity-0'"
        >
          <NuxtImg
            src="/facebook.svg"
            alt=""
            aria-hidden="true"
            class="absolute left-0 top-0 z-10 w-[88px] h-[88px]"
            loading="eager"
            role="img"
          />
          <NuxtImg
            src="/google.svg"
            alt=""
            aria-hidden="true"
            class="absolute right-0 top-0 z-10 w-[117px] h-[117px]"
            loading="eager"
            role="img"
          />
          <NuxtImg
            src="/google play.svg"
            alt=""
            aria-hidden="true"
            class="absolute left-[40px] top-[96px] z-10 w-[73px] h-[73px]"
            loading="eager"
            role="img"
          />
          <NuxtImg
            src="/seo.svg"
            alt=""
            aria-hidden="true"
            class="absolute right-[16px] bottom-[48px] z-10 w-[94px] h-[94px]"
            loading="eager"
            role="img"
          />
          <NuxtImg
            src="/app.svg"
            alt=""
            aria-hidden="true"
            class="absolute left-0 bottom-0 z-10 w-[88px] h-[88px]"
            loading="eager"
            role="img"
          />
        </div>
      </div>
    </template>
    <template v-if="content.number === '02'">
      <NuxtImg
        src="/f-cloud-2-xl.png"
        alt=""
        aria-hidden="true"
        class="hidden xl:block absolute top-0 left-0 w-full h-full z-10 transition-opacity duration-500"
        :class="isHovered ? 'opacity-100' : 'opacity-0'"
        loading="eager"
        role="img"
      />
      <NuxtImg
        src="/f-cloud-2-md.png"
        alt=""
        aria-hidden="true"
        class="hidden md:block xl:hidden absolute top-0 left-0 w-full h-full z-10 transition-opacity duration-500"
        loading="eager"
        role="img"
      />
      <NuxtImg
        src="/f-cloud-2.png"
        alt=""
        aria-hidden="true"
        class="md:hidden absolute top-0 left-0 w-full h-full z-10 transition-opacity duration-500"
        loading="eager"
        role="img"
      />
      <div class="absolute right-4 xl:-right-8 -bottom-3 xl:-top-8 z-10 transition-opacity duration-300">
        <div class="xl:hidden relative w-[226px] h-[171px]">
          <NuxtImg
            src="/world.svg"
            alt=""
            aria-hidden="true"
            class="absolute left-0 top-5 z-10 w-[117px] h-[117px]"
            loading="eager"
            role="img"
          />
          <NuxtImg
            src="/location.svg"
            alt=""
            aria-hidden="true"
            class="absolute right-3 top-0 z-10 w-[73px] h-[73px]"
            loading="eager"
            role="img"
          />
          <NuxtImg
            src="/traffic.svg"
            alt=""
            aria-hidden="true"
            class="absolute bottom-0 right-4 w-[94px] h-[94px]"
            loading="eager"
            role="img"
          />
        </div>
        <div
          class="hidden xl:block relative w-[226px] h-[269px]"
          :class="isHovered ? 'opacity-100' : 'opacity-0'"
        >
          <NuxtImg
            src="/world.svg"
            alt=""
            aria-hidden="true"
            class="absolute right-[11px] top-0 z-10 w-[117px] h-[117px]"
            loading="eager"
            role="img"
          />
          <NuxtImg
            src="/location.svg"
            alt=""
            aria-hidden="true"
            class="absolute left-[56px] top-[111px] z-10 w-[73px] h-[73px]"
            loading="eager"
            role="img"
          />
          <NuxtImg
            src="/traffic.svg"
            alt=""
            aria-hidden="true"
            class="absolute bottom-[16px] right-[5px] w-[94px] h-[94px]"
            loading="eager"
            role="img"
          />
        </div>
      </div>
    </template>
    <template v-if="content.number === '03'">
      <NuxtImg
        src="/f-cloud-3-xl.png"
        alt=""
        aria-hidden="true"
        class="hidden xl:block absolute top-0 left-0 w-full h-full z-10 transition-opacity duration-500"
        :class="isHovered ? 'opacity-100' : 'opacity-0'"
        loading="eager"
        role="img"
      />
      <NuxtImg
        src="/f-cloud-3-md.png"
        alt=""
        aria-hidden="true"
        class="hidden md:block xl:hidden absolute top-0 left-0 w-full h-full z-10 transition-opacity duration-500"
        loading="eager"
        role="img"
      />
      <NuxtImg
        src="/f-cloud-3.png"
        alt=""
        aria-hidden="true"
        class="md:hidden absolute top-0 left-0 w-full h-full z-10 transition-opacity duration-500"
        loading="eager"
        role="img"
      />
      <div class="absolute right-4 xl:-right-8 -bottom-4 md:-bottom-2 xl:-top-8 z-10 transition-opacity duration-300">
        <div class="xl:hidden relative w-[235px] h-[255px]">
          <NuxtImg
            src="/revshare.svg"
            alt=""
            aria-hidden="true"
            class="absolute right-0 top-0 z-10 w-[124px] h-[124px]"
            loading="eager"
            role="img"
          />
          <NuxtImg
            src="/cpa.svg"
            alt=""
            aria-hidden="true"
            class="absolute left-9 top-6 z-10 w-[66px] h-[66px]"
            loading="eager"
            role="img"
          />
          <NuxtImg
            src="/hybrid.svg"
            alt=""
            aria-hidden="true"
            class="absolute left-2 bottom-12 z-10 w-[110px] h-[110px]"
            loading="eager"
            role="img"
          />
          <NuxtImg
            src="/agency model.svg"
            alt=""
            aria-hidden="true"
            class="absolute right-0 bottom-0 z-10 w-[122px] h-[122px]"
            loading="eager"
            role="img"
          />
        </div>
        <div
          class="hidden xl:block relative w-[226px] h-[269px]"
          :class="isHovered ? 'opacity-100' : 'opacity-0'"
        >
          <NuxtImg
            src="/revshare.svg"
            alt=""
            aria-hidden="true"
            class="absolute right-[27px] -top-[6px] z-10 w-[139px] h-[139px]"
            loading="eager"
            role="img"
          />
          <NuxtImg
            src="/cpa.svg"
            alt=""
            aria-hidden="true"
            class="absolute -left-[18px] top-[51px] z-10 w-[73px] h-[73px]"
            loading="eager"
            role="img"
          />
          <NuxtImg
            src="/hybrid.svg"
            alt=""
            aria-hidden="true"
            class="absolute -left-[36px] bottom-[18px] z-10 w-[122px] h-[122px]"
            loading="eager"
            role="img"
          />
          <NuxtImg
            src="/agency model.svg"
            alt=""
            aria-hidden="true"
            class="absolute right-0 -bottom-[8px] z-10 w-[135px] h-[135px]"
            loading="eager"
            role="img"
          />
        </div>
      </div>
    </template>
    <template v-if="content.number === '04'">
      <NuxtImg
        src="/f-cloud-4-xl.png"
        alt=""
        aria-hidden="true"
        class="hidden xl:block absolute top-0 left-0 w-full h-full z-10 transition-opacity duration-500"
        :class="isHovered ? 'opacity-100' : 'opacity-0'"
        loading="eager"
        role="img"
      />
      <NuxtImg
        src="/f-cloud-4-md.png"
        alt=""
        aria-hidden="true"
        class="hidden md:block xl:hidden absolute top-0 left-0 w-full h-full z-10 transition-opacity duration-500"
        loading="eager"
        role="img"
      />
      <NuxtImg
        src="/f-cloud-4.png"
        alt=""
        aria-hidden="true"
        class="md:hidden absolute top-0 left-0 w-full h-full z-10 transition-opacity duration-500"
        loading="eager"
        role="img"
      />
      <div
        class="absolute right-2 md:right-4 xl:-right-8 -bottom-16 md:-bottom-5 xl:-top-8 z-10 transition-opacity duration-300"
      >
        <div class="xl:hidden relative w-[243px] h-[235px]">
          <NuxtImg
            src="/day.svg"
            alt=""
            aria-hidden="true"
            class="absolute top-0 left-0 w-[124px] h-[124px]"
            loading="eager"
            role="img"
          />
          <NuxtImg
            src="/month.svg"
            alt=""
            aria-hidden="true"
            class="absolute bottom-1 right-1 w-[144px] h-[144px]"
            loading="eager"
            role="img"
          />
        </div>
        <div
          class="hidden xl:flex relative w-[226px] h-[269px]"
          :class="isHovered ? 'opacity-100' : 'opacity-0'"
        >
          <NuxtImg
            src="/day.svg"
            alt=""
            aria-hidden="true"
            class="absolute bottom-[140px] right-[140px] w-[147px] h-[147px]"
            loading="eager"
            role="img"
          />
          <NuxtImg
            src="/month.svg"
            alt=""
            aria-hidden="true"
            class="absolute bottom-[0px] left-[50px] w-[181px] h-[181px]"
            loading="eager"
            role="img"
          />
        </div>
      </div>
    </template>
  </div>
</template>

<style scoped></style>
