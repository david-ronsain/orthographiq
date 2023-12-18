<script setup lang="ts">
	import { ref } from 'vue'
	import { useStore } from '../../store/store'
	import { storeToRefs } from 'pinia'
	import {
		mdiArrowRightDropCircle,
		mdiCheckCircleOutline,
		mdiCheckboxBlankCircleOutline,
		mdiCloseCircleOutline,
		mdiHelpCircleOutline,
	} from '@mdi/js'
	import { watch } from 'vue'
	import { computed } from 'vue'
	import { QuestionDifficulty } from '@orthographiq/shared'

	const store = useStore()

	let answer = ref(0)
	const { getCurrentQuestion } = storeToRefs(store)

	const borderColor = computed(() =>
		getCurrentQuestion.value.difficulty === QuestionDifficulty.EXPERT
			? 'blue-darken-4'
			: getCurrentQuestion.value.difficulty ===
			  QuestionDifficulty.INTERMEDIAIRE
			? 'blue-darken-2'
			: 'blue'
	)

	function iconToShow(index: number) {
		return answer.value !== 0 &&
			index + 1 === getCurrentQuestion.value.correctAnswer
			? mdiCheckCircleOutline
			: answer.value !== 0 &&
			  answer.value === index + 1 &&
			  answer.value !== getCurrentQuestion.value.correctAnswer
			? mdiCloseCircleOutline
			: mdiCheckboxBlankCircleOutline
	}
	function getBtnClass(index: number): string {
		return answer.value !== 0 &&
			index + 1 === getCurrentQuestion.value.correctAnswer
			? 'text-green'
			: answer.value !== 0 &&
			  answer.value === index + 1 &&
			  answer.value !== getCurrentQuestion.value.correctAnswer
			? 'text-red'
			: ''
	}
	function saveAnswer(answer: number): void {
		store.saveAnswer(answer)
		answer = 0
	}

	watch(getCurrentQuestion, () => {
		answer.value = 0
	})
</script>

<template>
	<v-row>
		<v-col
			cols="12"
			class="pa-1 pa-lg-3">
			<div class="quizz main d-flex align-center justify-center">
				<v-card
					color="grey-lighten-5"
					:data-color="borderColor"
					border
					rounded
					elevation="1"
					class="main-quizz">
					<v-card-title>
						<span
							v-html="
								getCurrentQuestion.question
									.charAt(0)
									.toUpperCase() +
								getCurrentQuestion.question.slice(1)
							" />
					</v-card-title>

					<v-card-text class="pb-0">
						<div
							class="d-flex flex-column flex-md-row flex-wrap justify-space-around align-start answers-wrap">
							<div
								class="v-col v-col-12 v-col-md-5"
								v-for="(
									option, index
								) in getCurrentQuestion.options"
								:key="index">
								<v-btn
									block
									class="bg-blue-lighten-5 justify-start answer"
									:disabled="answer !== 0"
									:class="getBtnClass(index)"
									@click="answer = index + 1"
									variant="text">
									<v-icon
										size="16"
										class="mr-2"
										:class="getBtnClass(index)">
										{{ iconToShow(index) }}
									</v-icon>
									{{
										option.charAt(0).toUpperCase() +
										option.slice(1)
									}}
								</v-btn>
							</div>
						</div>

						<div
							v-if="
								answer !== 0 &&
								answer !== getCurrentQuestion.correctAnswer
							"
							class="d-flex flex-row pa-2 rounded bg-blue-darken-2 mt-1 text-white explanation">
							<v-icon
								size="20"
								class="mr-2">
								{{ mdiHelpCircleOutline }}
							</v-icon>
							<div>{{ getCurrentQuestion.explanation }}</div>
						</div>
					</v-card-text>

					<v-card-actions>
						<v-btn
							variant="outlined"
							color="blue-darken-2"
							class="mx-auto mt-1"
							:disabled="answer === 0"
							height="40"
							@click="saveAnswer(answer)">
							<v-icon
								size="16"
								class="mr-2">
								{{ mdiArrowRightDropCircle }}
							</v-icon>
							Suivant
						</v-btn>
					</v-card-actions>
				</v-card>
			</div>
		</v-col>
	</v-row>
</template>

<style lang="scss">
	.answer .v-btn__content {
		white-space: break-spaces;
		padding: 8px 0;
	}
	.main-quizz {
		border-left-width: 4px;

		&[data-color='blue-darken-2'] {
			border-left-color: #1976d2;
		}
		&[data-color='blue-darken-4'] {
			border-left-color: #0d47a1;
		}
		&[data-color='blue'] {
			border-left-color: #2196f3;
		}
	}
</style>

<style scoped lang="scss">
	.answer {
		min-height: 36px;
		height: auto;
	}
</style>
