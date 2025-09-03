<script setup lang="ts">
import type { FeaturesCard } from "~/types"

defineProps<{
  content: FeaturesCard
}>()

const isHovered = ref(false)
</script>

<template>
  <div
    class="bg-[#131313] border border-[#F3F3F3] flex flex-col justify-between h-[200px] px-4 py-5 relative cursor-pointer"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <span class="text-[#CBCBCB] text-[26px] uppercase z-20">{{ content.number }}</span>
    <h3 class="text-[#F3F3F3] text-[26px] uppercase font-semibold w-[75%] z-20">{{ content.text }}</h3>
    <template v-if="content.number === '01'">
      <NuxtImg
        src="/f-cloud-1.png"
        class="absolute top-0 left-0 w-full h-full z-10 transition-opacity duration-300"
        :class="isHovered ? 'opacity-100' : 'opacity-0'"
      />
      <div class="absolute -right-8 -top-8 z-10">
        <div
          class="relative w-[226px] h-[269px] transition-opacity duration-300"
          :class="isHovered ? 'opacity-100' : 'opacity-0'"
        >
          <NuxtImg
            src="/facebook.svg"
            class="absolute left-0 top-0 z-10 w-[88px] h-[88px]"
          />
          <NuxtImg
            src="/google.svg"
            class="absolute right-0 top-0 z-10 w-[117px] h-[117px]"
          />
          <NuxtImg
            src="/google play.svg"
            class="absolute left-[40px] top-[96px] z-10 w-[73px] h-[73px]"
          />
          <NuxtImg
            src="/seo.svg"
            class="absolute right-[16px] bottom-[48px] z-10 w-[94px] h-[94px]"
          />
          <NuxtImg
            src="/app.svg"
            class="absolute left-0 bottom-0 z-10 w-[88px] h-[88px]"
          />
        </div>
      </div>
    </template>
	  <template v-if="content.number === '02'">
      <NuxtImg
	      src="/f-cloud-2.png"
	      class="absolute top-0 left-0 w-full h-full z-10 transition-opacity duration-300"
	      :class="isHovered ? 'opacity-100' : 'opacity-0'"
      />
      <div class="absolute -right-8 -top-8 z-10 transition-opacity duration-300">
        <div
	        class="relative w-[226px] h-[269px]"
	        :class="isHovered ? 'opacity-100' : 'opacity-0'"
        >
          <NuxtImg
	          src="/world.svg"
	          class="absolute right-[11px] top-0 z-10 w-[117px] h-[117px]"
          />
          <NuxtImg
	          src="/location.svg"
	          class="absolute left-[56px] top-[111px] z-10 w-[73px] h-[73px]"
          />
          <NuxtImg
	          src="/traffic.svg"
	          class="absolute bottom-[16px] right-[5px] w-[94px] h-[94px]"
          />
        </div>
      </div>
    </template>
	  <template v-if="content.number === '03'">
      <NuxtImg
	      src="/f-cloud-3.png"
	      class="absolute top-0 left-0 w-full h-full z-10 transition-opacity duration-300"
	      :class="isHovered ? 'opacity-100' : 'opacity-0'"
      />
      <div class="absolute -right-8 -top-8 z-10 transition-opacity duration-300">
        <div
	        class="relative w-[226px] h-[269px]"
	        :class="isHovered ? 'opacity-100' : 'opacity-0'"
        >
	        <NuxtImg
		        src="/revshare.svg"
		        class="absolute right-[27px] -top-[6px] z-10 w-[139px] h-[139px]"
	        />
	        <NuxtImg
		        src="/cpa.svg"
		        class="absolute -left-[18px] top-[51px] z-10 w-[73px] h-[73px]"
	        />
          <NuxtImg
	          src="/hybrid.svg"
	          class="absolute -left-[36px] bottom-[18px] z-10 w-[122px] h-[122px]"
          />
          <NuxtImg
	          src="/agency model.svg"
	          class="absolute right-0 -bottom-[8px] z-10 w-[135px] h-[135px]"
          />
        </div>
      </div>
    </template>
	  <template v-if="content.number === '04'">
      <NuxtImg
	      src="/f-cloud-4.png"
	      class="absolute top-0 left-0 w-full h-full z-10 transition-opacity duration-300"
	      :class="isHovered ? 'opacity-100' : 'opacity-0'"
      />
      <div class="absolute -right-8 -top-8 z-10 transition-opacity duration-300">
        <div
	        class="relative w-[226px] h-[269px]"
	        :class="isHovered ? 'opacity-100' : 'opacity-0'"
        >
          <NuxtImg
	          src="/day.svg"
	          class="absolute bottom-[140px] right-[140px] w-[147px] h-[147px]"
          />
          <NuxtImg
	          src="/month.svg"
	          class="absolute bottom-[0px] left-[50px] w-[181px] h-[181px]"
          />
        </div>
      </div>
    </template>
  </div>
</template>

<style scoped></style>
