<script setup lang="ts">
	import { useRoute } from 'vue-router'
	import { useStore } from '../store/store'
	import { onMounted, ref } from 'vue'
	import {
		QuestionDifficulty,
		QuestionCategory,
		type IAnswer,
	} from '@orthographiq/shared'
	import ResultsIncorrectAnswers from '../components/results/ResultsIncorrectAnswers.vue'
	import ResultsDetails from '../components/results/ResultsDetails.vue'
	import { mdiLightbulbVariantOutline } from '@mdi/js'
	import { getColorByLevel, getColorByRate } from '../helpers/question.helper'
	import { storeToRefs } from 'pinia'
	import { watch } from 'vue'
	import router from '../router'

	const store = useStore()
	const route = useRoute()
	const { areResultsLoading, areResultsWithError, getResults } =
		storeToRefs(store)

	const level = ref('' as unknown as QuestionDifficulty)
	const progressBars = ref<
		Array<{ category: QuestionCategory; color: string; pct: number }>
	>([])
	const globalProgressBars = ref<
		Array<{ category: QuestionCategory; color: string; pct: number }>
	>([])
	const shouldFocusOn = ref<Array<QuestionCategory>>([])

	watch(getResults, (newValue) => {
		if (newValue && newValue.session) {
			level.value = getResults.value.session.level
			progressBars.value = [
				{
					category: QuestionCategory.ORTHOGRAPHE,
					color: getColorByRate(
						getResults.value.pctOrthographeGoodAnswers
					),
					pct: getResults.value.pctOrthographeGoodAnswers,
				},
				{
					category: QuestionCategory.GRAMMAIRE,
					color: getColorByRate(
						getResults.value.pctGrammaireGoodAnswers
					),
					pct: getResults.value.pctGrammaireGoodAnswers,
				},
				{
					category: QuestionCategory.CONJUGAISON,
					color: getColorByRate(
						getResults.value.pctConjugaisonGoodAnswers
					),
					pct: getResults.value.pctConjugaisonGoodAnswers,
				},
			]
			globalProgressBars.value = [
				{
					category: QuestionCategory.ORTHOGRAPHE,
					color: getColorByRate(
						getResults.value.globalPctOrthographe
					),
					pct: getResults.value.globalPctOrthographe,
				},
				{
					category: QuestionCategory.GRAMMAIRE,
					color: getColorByRate(getResults.value.globalPctGrammaire),
					pct: getResults.value.globalPctGrammaire,
				},
				{
					category: QuestionCategory.CONJUGAISON,
					color: getColorByRate(
						getResults.value.globalPctConjugaison
					),
					pct: getResults.value.globalPctConjugaison,
				},
			]

			const toSort = [...progressBars.value]
			toSort
				.filter((progress) => progress.pct < 50)
				.sort((a, b) => a.pct - b.pct)
				.forEach((progress) =>
					shouldFocusOn.value.push(progress.category)
				)
			if (!shouldFocusOn.value.length) {
				toSort
					.sort((a, b) => a.pct - b.pct)
					.slice(0, 1)
					.forEach((progress) =>
						shouldFocusOn.value.push(progress.category)
					)
			}
		}
	})

	onMounted(async () => {
		await store.loadResults(route.params.sessionId?.toString())
	})
</script>

<template>
	<v-row>
		<v-col
			cols="12"
			class="pa-1 pa-lg-3">
			<div class="quizz d-flex align-center justify-center">
				<v-skeleton-loader
					v-if="areResultsLoading"
					class="mx-auto border loading"
					max-width="600"
					type="article" />

				<v-alert
					v-else-if="areResultsWithError"
					class="not-loaded"
					color="error"
					closable
					@click:close="router.push({ name: 'quizz' })">
					Impossible de charger les résultats de votre test
				</v-alert>

				<v-card
					v-else
					class="loaded"
					color="grey-lighten-5"
					border
					rounded
					elevation="1">
					<v-card-title>
						Voici les résultats de votre test
					</v-card-title>

					<v-card-text>
						<v-row class="text-body-1 level">
							<v-col cols="12">
								Votre niveau:
								<strong
									:class="`text-${getColorByLevel(level)}`">
									{{ level }}
								</strong>
							</v-col>
						</v-row>

						<ResultsDetails
							:user-data="progressBars"
							:global-data="globalProgressBars" />

						<v-row>
							<v-col cols="12">
								<v-alert
									class="text-body-1"
									color="blue-darken-2"
									density="compact"
									:icon="mdiLightbulbVariantOutline">
									Voici les axes sur lesquels nous vous
									conseillons de travailler pour le moment:
									<strong>{{
										shouldFocusOn.join(', ')
									}}</strong>
								</v-alert>
							</v-col>
						</v-row>

						<ResultsIncorrectAnswers
							class="mt-1 answers"
							v-if="getResults.session.answers.filter((answer: IAnswer) => ! answer.correct).length"
							:answers="getResults.session.answers.filter((answer: IAnswer) => ! answer.correct)" />
					</v-card-text>
				</v-card>
			</div>
		</v-col>
	</v-row>
</template>

<style scoped lang="scss">
	.v-alert {
		color: white !important;
	}
</style>
