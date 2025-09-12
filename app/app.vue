<script setup lang="ts">
import gsap from "gsap"

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "YWR Team",
  description: "Международная медиабаинговая компания, лидер в i-Gaming",
  url: "https://ywrich.com",
  logo: "https://ywrich.com/logo.svg",
  sameAs: ["https://www.instagram.com/ywr_traffic?igsh=cDdjMXUxMm5jeXpl&utm_source=qr", "https://t.me/ywrteam"],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
  },
}

useSeoMeta({
  title: "YWR Team - Лидер медиабаинга в i-Gaming | Арбитраж трафика",
  description:
    "YWR Team - международная медиабаинговая компания, лидер в i-Gaming. Нестандартные стратегии продвижения, привлечение и монетизация трафика по всему миру.",
  keywords: "медиабаинг, i-Gaming, арбитраж трафика, YWR Team, маркетинг",
  author: "YWR Team",
  robots: "index,follow",
  ogTitle: "YWR Team - Международная медиабаинговая компания i-Gaming",
  ogDescription:
    "Мы заставляем клиентов становиться лучше благодаря нестандартным стратегиям продвижения. Лидеры арбитража трафика в i-Gaming с глобальным охватом.",
  ogImage: `https://ywrich.com/og.png`,
  ogImageWidth: "1200",
  ogImageHeight: "630",
  ogImageAlt: "YWR Team - логотип компании",
  ogUrl: "https://ywrich.com",
  ogType: "website",
  ogSiteName: "YWR Team",
  ogLocale: "ru_RU",
  twitterTitle: "YWR Team - Лидер медиабаинга в i-Gaming",
  twitterDescription:
    "Международная медиабаинговая компания. Нестандартные стратегии, эффективный арбитраж трафика, работа по всему миру.",
  twitterImage: `https://ywrich.com/twitter.png`,
  twitterImageAlt: "YWR Team - превью для Twitter",
  twitterCard: "summary_large_image",
  twitterSite: "@ywr_team",
  viewport: "width=device-width, initial-scale=1.0",
  themeColor: "#090909",
})

useHead({
  htmlAttrs: {
    lang: "ru",
    dir: "ltr",
  },
  link: [
    {
      rel: "icon",
      type: "image/jpeg",
      href: "/icon.jpg",
    },
    {
      rel: "preload",
      as: "image",
      href: "/man.png",
    },
    {
      rel: "preload",
      as: "image",
      href: "/cloud-1.png",
    },
    {
      rel: "preload",
      as: "image",
      href: "/light-1.png",
    },
  ],
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify(structuredData),
    },
  ],
})

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
    <a
      href="#main-content"
      class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:text-black focus:rounded"
    >
      Перейти к основному содержимому
    </a>
    <div
      class="absolute w-full min-h-screen h-full -z-10 bg-[#090909] overflow-hidden top-0 left-0"
      aria-hidden="true"
      role="presentation"
    >
      <NuxtImg
        src="/lines-1.svg"
        alt=""
        class="absolute top-0 left-0 w-full z-0 md:hidden"
        draggable="false"
        loading="eager"
        role="presentation"
        aria-hidden="true"
      />
      <NuxtImg
        src="/lines-1-md.svg"
        alt=""
        class="absolute top-0 left-0 z-0 w-full hidden md:block xl:hidden"
        draggable="false"
        loading="eager"
        role="presentation"
        aria-hidden="true"
      />
      <NuxtImg
        src="/lines-1-xl.svg"
        alt=""
        class="absolute top-0 left-0 z-0 w-full hidden xl:block"
        draggable="false"
        loading="eager"
        role="presentation"
        aria-hidden="true"
      />
      <NuxtImg
        src="/light-1.png"
        alt=""
        class="absolute top-[200px] md:top-20 xl:top-0 md:-left-10 xl:left-0 z-[5] md:h-[1200px] xl:h-[1565px] light"
        draggable="false"
        loading="eager"
        role="presentation"
        aria-hidden="true"
      />
      <NuxtImg
        src="/lines-2.svg"
        class="absolute top-0 translate-y-[70%] left-0 w-full z-0 md:hidden"
        draggable="false"
        loading="lazy"
        role="presentation"
        aria-hidden="true"
      />
      <NuxtImg
        src="/lines-2-md.svg"
        alt=""
        class="absolute top-0 translate-y-[70%] left-0 z-0 w-full hidden md:block xl:hidden"
        draggable="false"
        loading="lazy"
        role="presentation"
        aria-hidden="true"
      />
      <NuxtImg
        src="/lines-2-xl.svg"
        alt=""
        class="absolute top-0 translate-y-[70%] left-0 z-0 w-full hidden xl:block"
        draggable="false"
        loading="lazy"
        role="presentation"
        aria-hidden="true"
      />
      <NuxtImg
        src="/lines-3.svg"
        alt=""
        class="absolute top-0 translate-y-[167%] left-0 w-full z-0 md:hidden"
        draggable="false"
        loading="lazy"
        role="presentation"
        aria-hidden="true"
      />
      <NuxtImg
        src="/lines-3-md.svg"
        alt=""
        class="absolute top-0 translate-y-[167%] left-0 z-0 w-full hidden md:block xl:hidden"
        draggable="false"
        loading="lazy"
        role="presentation"
        aria-hidden="true"
      />
      <NuxtImg
        src="/lines-3-xl.svg"
        alt=""
        class="absolute top-0 translate-y-[167%] left-0 z-0 w-full hidden xl:block"
        draggable="false"
        loading="lazy"
        role="presentation"
        aria-hidden="true"
      />
      <NuxtImg
        src="/lines-4.svg"
        alt=""
        class="absolute top-0 translate-y-[267%] left-0 w-full z-0 md:hidden"
        draggable="false"
        loading="lazy"
        role="presentation"
        aria-hidden="true"
      />
      <NuxtImg
        src="/lines-4.svg"
        alt=""
        class="absolute top-0 translate-y-[367%] left-0 w-full z-0 md:hidden"
        draggable="false"
        loading="lazy"
        role="presentation"
        aria-hidden="true"
      />
      <NuxtImg
        src="/cloud-1.png"
        alt="Декоративное облако"
        class="absolute top-0 left-0 w-full z-20 cloud-1"
        draggable="false"
        loading="eager"
        role="img"
      />
      <div
        class="absolute md:top-4 xl:top-10 -right-[160px] md:-right-[200px] xl:-right-[60px]"
        role="img"
        aria-label="Иллюстрация профессионала в облачной среде"
      >
        <div class="relative w-[1140px] aspect-[1140/949]">
          <NuxtImg
            src="/man.png"
            alt="Профессионал YWR Team"
            class="absolute top-10 right-10 w-[360px] md:w-[578px] xl:w-[627px] z-10 man"
            draggable="false"
            loading="eager"
            role="img"
          />
          <NuxtImg
            src="/cloud-2.png"
            alt="Декоративное облако с эффектами"
            class="absolute bottom-1/2 max-md:-translate-x-[160px] max-md:translate-y-1/3 md:-bottom-[15%] xl:-bottom-1/3 right-0 w-[320px] md:w-[940px] xl:w-[1140px] z-20 cloud-2"
            draggable="false"
            loading="eager"
            role="img"
          />
        </div>
      </div>
    </div>
    <AppHeader />
    <div
      id="main-content"
      role="main"
    >
      <AppHero />
      <AppAbout />
      <AppAdvertiser />
      <AppFeatures />
      <AppVacancies />
    </div>
    <AppFooter />
  </div>
</template>

<style scoped>
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

.focus\:not-sr-only:focus {
  position: static;
  width: auto;
  height: auto;
  padding: 0.5rem 1rem;
  margin: 0;
  overflow: visible;
  clip: auto;
  white-space: normal;
}

*:focus-visible {
  outline: 2px solid #ffffff;
  outline-offset: 2px;
}
</style>
