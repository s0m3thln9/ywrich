<script setup lang="ts">
const hasScrolled = ref(false)
const isMobileMenuOpen = ref(false)

const openTelegramBot = () => {
  window.open("https://t.me/YWRteam_job_bot", "_blank")
}

const scrollToSection = (id: string) => {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: "smooth" })
  }
  closeMobileMenu()
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" })
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

const handleResize = () => {
  if (isMobileMenuOpen.value) {
    closeMobileMenu()
  }
}

const handleScroll = () => {
  hasScrolled.value = window.scrollY > 10
}

onMounted(() => {
  window.addEventListener("resize", handleResize)
  window.addEventListener("scroll", handleScroll)
})

onUnmounted(() => {
  window.removeEventListener("resize", handleResize)
  window.removeEventListener("scroll", handleScroll)
})

watch(isMobileMenuOpen, (isOpen) => {
  if (isOpen) {
    document.body.style.overflow = "hidden"
  } else {
    document.body.style.overflow = ""
  }
})
</script>

<template>
  <header
    class="fixed top-0 left-0 w-full z-50 px-6 py-4 md:py-5 md:px-8 xl:px-0 font-[Open_Sans] text-[#F3F3F3] text-xl border-b border-[#F3F3F3] flex items-center justify-center select-none transition-all duration-300"
    :class="hasScrolled ? 'bg-[#090909]' : 'bg-transparent'"
  >
    <div class="max-w-[1170px] w-full flex items-center justify-between relative z-[60]">
      <NuxtImg
        src="/logo.svg"
        width="74"
        class="cursor-pointer w-[54px] md:w-[74px]"
        draggable="false"
        @click="scrollToTop"
      />
      <button
        class="md:hidden relative w-[26px] h-[18px] cursor-pointer"
        aria-label="Toggle menu"
        @click="toggleMobileMenu"
      >
        <span
          :class="[
            'absolute left-0 h-0.5 bg-[#C9FF33] rounded-full transition-all duration-300',
            isMobileMenuOpen ? 'top-1/2 w-[20px] rotate-45 -translate-y-0.5' : 'top-0 w-full',
          ]"
        />
        <span
          :class="[
            'absolute h-0.5 bg-[#C9FF33] rounded-full transition-all duration-300',
            isMobileMenuOpen
              ? 'top-1/2 left-0 w-[20px] -rotate-45 -translate-y-0.5'
              : 'top-[8px] left-[5.14px] w-[19.86px]',
          ]"
        />
        <span
          :class="[
            'absolute bottom-0 h-0.5 bg-[#C9FF33] rounded-full transition-all duration-300',
            isMobileMenuOpen ? 'left-[11.29px] w-[13.71px] opacity-0' : 'left-[11.29px] w-[13.71px] opacity-100',
          ]"
        />
      </button>
      <div class="hidden md:flex items-center md:gap-10 xl:gap-16">
        <nav>
          <ul class="flex items-center md:gap-5 xl:gap-8">
            <li
              class="cursor-pointer relative pb-1 group"
              @click="scrollToSection('about')"
            >
              О нас
              <div
                class="absolute bottom-0 left-0 w-full h-0.5 bg-[#C9FF33] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />
            </li>
            <li
              class="cursor-pointer relative pb-1 group"
              @click="scrollToSection('advertiser')"
            >
              Рекламодателям
              <div
                class="absolute bottom-0 left-0 w-full h-0.5 bg-[#C9FF33] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />
            </li>
            <li
              class="cursor-pointer relative pb-1 group"
              @click="scrollToSection('features')"
            >
              Плюсы
              <div
                class="absolute bottom-0 left-0 w-full h-0.5 bg-[#C9FF33] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />
            </li>
            <li
              class="cursor-pointer relative pb-1 group"
              @click="scrollToSection('vacancies')"
            >
              Вакансии
              <div
                class="absolute bottom-0 left-0 w-full h-0.5 bg-[#C9FF33] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />
            </li>
          </ul>
        </nav>
        <div class="flex items-center gap-6">
          <a
            href="https://www.instagram.com/ywr_traffic?igsh=cDdjMXUxMm5jeXpl&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <NuxtImg
              src="/inst.svg"
              class="cursor-pointer w-7 h-7"
              draggable="false"
            />
          </a>
          <a
            href="https://t.me/ywrteam"
            target="_blank"
            rel="noopener noreferrer"
          >
            <NuxtImg
              src="/tg.svg"
              class="cursor-pointer w-7 h-7"
              draggable="false"
            />
          </a>
        </div>
      </div>
    </div>
    <div
      :class="[
        'md:hidden fixed top-0 left-0 w-screen h-screen transition-all duration-300 z-50 bg-[#090909f2]',
        isMobileMenuOpen ? 'opacity-100 visible translate-x-0' : 'opacity-0 invisible translate-x-full',
      ]"
    >
      <div class="w-full border-b border-[#F3F3F3] absolute top-[60px] z-[60]" />
      <div
        :class="[
          'w-full h-full flex flex-col mt-[60px] items-end gap-9 px-6 py-5 transition-all duration-300 delay-100',
          isMobileMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8',
        ]"
      >
        <div class="flex flex-col gap-10">
          <nav>
            <ul class="flex flex-col gap-6 items-end">
              <li
                class="cursor-pointer relative pb-1 group w-fit"
                @click="scrollToSection('about')"
              >
                О нас
                <div
                  class="absolute bottom-0 left-0 w-full h-0.5 bg-[#C9FF33] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
              </li>
              <li
                class="cursor-pointer relative pb-1 group w-fit"
                @click="scrollToSection('advertiser')"
              >
                Рекламодателям
                <div
                  class="absolute bottom-0 left-0 w-full h-0.5 bg-[#C9FF33] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
              </li>
              <li
                class="cursor-pointer relative pb-1 group w-fit"
                @click="scrollToSection('features')"
              >
                Плюсы
                <div
                  class="absolute bottom-0 left-0 w-full h-0.5 bg-[#C9FF33] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
              </li>
              <li
                class="cursor-pointer relative pb-1 group w-fit"
                @click="scrollToSection('vacancies')"
              >
                Вакансии
                <div
                  class="absolute bottom-0 left-0 w-full h-0.5 bg-[#C9FF33] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
              </li>
            </ul>
          </nav>
          <div class="w-[220px] h-[1px] bg-[#FFFFFF]" />
          <div class="flex items-center justify-end gap-7">
            <a
              href="https://www.instagram.com/ywr_traffic?igsh=cDdjMXUxMm5jeXpl&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <NuxtImg
                src="/inst.svg"
                class="cursor-pointer w-8 h-8 hover:opacity-80 transition-opacity duration-200"
                draggable="false"
              />
            </a>
            <a
              href="https://t.me/ywrteam"
              target="_blank"
              rel="noopener noreferrer"
            >
              <NuxtImg
                src="/tg.svg"
                class="cursor-pointer w-8 h-8 hover:opacity-80 transition-opacity duration-200"
                draggable="false"
              />
            </a>
          </div>
        </div>
        <AppButton
          content="Вступить в команду"
          custom-class="text-sm"
          extended
          @click="openTelegramBot"
        />
      </div>
    </div>
  </header>
</template>

<style scoped></style>
