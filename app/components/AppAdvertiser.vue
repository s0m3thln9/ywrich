<script setup lang="ts">

</script>

<template>
  <div class="relative py-14 flex items-center justify-center">
    <div class="max-w-[1170px] w-full flex flex-col gap-10">
	    <h2 class="uppercase text-[80px] text-[#F3F3F3] font-[Unbounded] font-black">Рекламодателям</h2>
	    <div class="flex gap-10">
		    <NuxtImg
			    src="/chain.png"
			    class="w-[534px] h-[591px] -ml-40"
		    />
		    <div class="flex flex-col gap-12 font-[Open_Sans] border-y border-[#F3F3F3] pl-16 py-16">
			    <div class="flex flex-col gap-5">
				    <h3 class="uppercase text-4xl text-[#C9FF33] font-extrabold">YWR team</h3>
				    <p class="uppercase text-[22px] text-[#CBCBCB]">международная медиабаинговая компания являющаяся одним из лидеров в i-Gaming</p>
				    <p class="uppercase text-[22px] text-[#CBCBCB]">мы заставляем наших клиентов становится лучше благодаря нашим нестандартным стратегиям к продвижению</p>
			    </div>
			    <div class="flex flex-col gap-3 border-l border-[#F3F3F3] ml-10 pl-6">
				    <h4 class="uppercase text-[32px] text-[#F3F3F3] font-extrabold">вы рекламодатель ?</h4>
				    <p class="uppercase text-[22px] text-[#CBCBCB]">оставьте информацию о себе и мы обязательно найдем решение для
					    <span class="text-[#C9FF33] font-bold">продвижения вашего продукта</span></p>
				    <AppButton content="Оставить информацию" extended custom-class="mt-12" />
			    </div>
        </div>
	    </div>
    </div>
  </div>
</template>

<style scoped>

</style>