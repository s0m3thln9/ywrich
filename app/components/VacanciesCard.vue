<script setup lang="ts">
	import type { VacanciesCard } from "~/types"
	defineProps<{
		content: VacanciesCard
	}>()
	const isHovered = ref(false);
</script>

<template>
	<div
		class="flex flex-col gap-5 pb-5 cursor-pointer bg-[#131313] hover:bg-[#C9FF33] border border-[#F3F3F3] hover:border-[#C9FF33] text-[#F3F3F3] hover:text-[#101010] z-20"
		@mouseenter="isHovered = true"
		@mouseleave="isHovered = false"
	>
		<div class="flex flex-col bg-[#131313]">
			<NuxtImg
				:src="content.src"
				draggable="false"
				:class="content.large && 'px-12'"
			/>
		</div>
		<div class="flex items-center justify-between p-4">
			<h4 class="font-[Open_Sans] text-[22px] font-bold uppercase">{{ content.text }}</h4>
			<NuxtImg
				v-if="isHovered"
				src="/arrow.svg"
				draggable="false"
				width="25"
			/>
			<NuxtImg
				v-else
				src="/big-arrow.svg"
				draggable="false"
				width="25"
			/>
		</div>
	</div>
</template>

<style scoped>
</style>