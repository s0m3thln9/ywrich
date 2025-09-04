<script setup lang="ts">
import gsap from 'gsap'

onMounted(() => {
	const tl = gsap.timeline({ defaults: { duration: 1.5, ease: 'power3.out' } })
	
	tl.from('.light', { x: -200, opacity: 0 })
		.from('.cloud-1', { x: 200, opacity: 0 }, '-=1')
		.from('.cloud-2', { x: 200, opacity: 0 }, '-=1.2')
		.from('.man', { x: 200, opacity: 0 }, '-=1.2')
})
</script>

<template>
  <div class="relative">
    <div class="absolute w-full min-h-screen h-full -z-10 bg-[#090909] overflow-hidden top-0 left-0">
      <NuxtImg
	      src="/lines-1.svg"
	      class="absolute top-0 left-0 w-full object-cover z-0"
	      draggable="false"
      />
      <NuxtImg
	      src="/light-1.png"
	      class="absolute top-0 left-0 z-0 h-[1565px]"
	      draggable="false"
      />
      <NuxtImg
	      src="/lines-2.svg"
	      class="absolute top-0 translate-y-[70%] left-0 w-full object-cover z-0"
	      draggable="false"
      />
      <NuxtImg
	      src="/lines-3.svg"
	      class="absolute top-0 translate-y-[167%] left-0 w-full object-cover z-0"
	      draggable="false"
      />
      <NuxtImg
	      src="/cloud-1.png"
	      class="absolute top-0 left-0 w-full z-20"
	      draggable="false"
      />
      <div class="absolute top-10 -right-[60px]">
        <div class="relative w-[1140px] aspect-[1140/949]">
          <NuxtImg
	          src="/man.png"
	          class="absolute top-10 right-10 w-[627px] z-10"
	          draggable="false"
          />
          <NuxtImg
	          src="/cloud-2.png"
	          class="absolute -bottom-1/3 right-0 w-[1140px] z-20"
	          draggable="false"
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
    <AppFooter />
  </div>
</template>

<style scoped>
</style>
