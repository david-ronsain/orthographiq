<script setup lang="ts">
	import type { QuestionCategory } from '@orthographiq/shared'
	import type { PropType } from 'vue'
	import ResultsProgressBar from './ResultsProgressBar.vue'

	defineProps({
		userData: {
			type: Array as PropType<
				{ category: QuestionCategory; color: string; pct: number }[]
			>,
		},
		globalData: {
			type: Array as PropType<
				{ category: QuestionCategory; color: string; pct: number }[]
			>,
		},
	})
</script>

<template>
	<v-row class="mt-0 progress">
		<v-col
			cols="12"
			md="6"
			class="my-lg-1">
			<div class="d-flex flex-column">
				<h1 class="flex-grow-1 pb-1 text-body-1">
					Voici le détail de vos réponses par catégorie
				</h1>
				<ResultsProgressBar
					v-for="(progress, index) in userData"
					:key="'user-' + progress.category"
					:class="index > 0 ? 'mt-2' : ''"
					:color="progress.color"
					:pct-good-answers="progress.pct"
					:title="progress.category" />
			</div>
		</v-col>
		<v-col
			cols="12"
			md="6"
			class="my-lg-1">
			<div class="d-flex flex-column">
				<h1 class="flex-grow-1 pb-1 text-body-1">
					Voici les résultats des gens avec un niveau similaire
				</h1>
				<ResultsProgressBar
					v-for="(progress, index) in globalData"
					:key="'global-' + progress.category"
					:class="index > 0 ? 'mt-2' : ''"
					:color="progress.color"
					:pct-good-answers="progress.pct"
					:title="progress.category" />
			</div>
		</v-col>
	</v-row>
</template>

<style scoped lang="scss">
	.v-col-12 > div {
		height: 100%;
	}
</style>
