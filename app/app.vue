<script setup lang="ts">
import gsap from "gsap"

const currentBp = ref("sm")

function getBreakpoint() {
	if (typeof window === "undefined") return "sm"
	const w = window.innerWidth
	if (w >= 1280) return "xl"
	if (w >= 768) return "md"
	return "sm"
}

function runAnimation() {
	gsap.killTweensOf([".light", ".cloud-1", ".cloud-2", ".man"])
	gsap.set([".light", ".cloud-1", ".cloud-2", ".man"], { clearProps: "all" })
	
	const tl = gsap.timeline({ defaults: { duration: 1.5, ease: "power3.out" } })
	tl.from(".light", { x: -200, opacity: 0 })
		.from(".cloud-1", { x: 200, opacity: 0 }, "-=1")
		.from(".cloud-2", { x: 200, opacity: 0 }, "-=1.2")
		.from(".man", { x: 200, opacity: 0 }, "-=1.2")
}

function handleResize() {
	const newBp = getBreakpoint()
	if (newBp !== currentBp.value) {
		currentBp.value = newBp
		runAnimation()
	}
}

onMounted(() => {
	currentBp.value = getBreakpoint()
	runAnimation()
	window.addEventListener("resize", handleResize)
})

onUnmounted(() => {
	window.removeEventListener("resize", handleResize)
})
</script>


<template>
  <div class="relative overflow-hidden">
    <div class="absolute w-full min-h-screen h-full -z-10 bg-[#090909] overflow-hidden top-0 left-0">
      <NuxtImg
        src="/lines-1.svg"
        class="absolute top-0 left-0 w-full z-0 md:hidden"
        draggable="false"
      />
      <NuxtImg
        src="/lines-1-md.svg"
        class="absolute top-0 left-0 z-0 w-full hidden md:block xl:hidden"
        draggable="false"
      />
      <NuxtImg
        src="/lines-1-xl.svg"
        class="absolute top-0 left-0 z-0 w-full hidden xl:block"
        draggable="false"
      />
      <NuxtImg
        src="/light-1.png"
        class="absolute top-[200px] md:top-20 xl:top-0 md:-left-10 xl:left-0 z-[5] md:h-[1200px] xl:h-[1565px] light"
        draggable="false"
      />
      <NuxtImg
        src="/lines-2.svg"
        class="absolute top-0 translate-y-[70%] left-0 w-full z-0 md:hidden"
        draggable="false"
      />
      <NuxtImg
        src="/lines-2-md.svg"
        class="absolute top-0 translate-y-[70%] left-0 z-0 w-full hidden md:block xl:hidden"
        draggable="false"
      />
      <NuxtImg
        src="/lines-2-xl.svg"
        class="absolute top-0 translate-y-[70%] left-0 z-0 w-full hidden xl:block"
        draggable="false"
      />
      <NuxtImg
	      src="/lines-3.svg"
	      class="absolute top-0 translate-y-[167%] left-0 w-full z-0 md:hidden"
	      draggable="false"
      />
      <NuxtImg
	      src="/lines-3-md.svg"
	      class="absolute top-0 translate-y-[167%] left-0 z-0 w-full hidden md:block xl:hidden"
	      draggable="false"
      />
      <NuxtImg
	      src="/lines-3-xl.svg"
	      class="absolute top-0 translate-y-[167%] left-0 z-0 w-full hidden xl:block"
	      draggable="false"
      />
	    <NuxtImg
		    src="/lines-4.svg"
		    class="absolute top-0 translate-y-[267%] left-0 w-full z-0 md:hidden"
		    draggable="false"
	    />
	    <NuxtImg
		    src="/lines-4.svg"
		    class="absolute top-0 translate-y-[367%] left-0 w-full z-0 md:hidden"
		    draggable="false"
	    />
      <NuxtImg
        src="/cloud-1.png"
        class="absolute top-0 left-0 w-full z-20 cloud-1"
        draggable="false"
      />
      <div class="absolute md:top-4 xl:top-10 -right-[160px] md:-right-[200px] xl:-right-[60px]">
        <div class="relative w-[1140px] aspect-[1140/949]">
          <NuxtImg
            src="/man.png"
            class="absolute top-10 right-10 w-[360px] md:w-[578px] xl:w-[627px] z-10 man"
            draggable="false"
          />
          <NuxtImg
            src="/cloud-2.png"
            class="absolute bottom-1/2 max-md:-translate-x-[160px] max-md:translate-y-1/3 md:-bottom-[15%] xl:-bottom-1/3 right-0 w-[320px] md:w-[940px] xl:w-[1140px] z-20 cloud-2"
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

<style scoped></style>
