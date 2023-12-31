<script setup lang="ts">
	import { type IAnswer } from '@orthographiq/shared'
	import { computed, type PropType } from 'vue'

	const props = defineProps({
		answers: {
			type: Array as PropType<IAnswer[]>,
			required: true,
		},
	})
	const filteredIncorrectAnswers = computed(() =>
		props.answers.filter((answer: IAnswer) => !answer.correct)
	)
</script>

<template>
	<v-row>
		<v-col
			class="questions"
			cols="12">
			<h1 class="text-body-1">
				Vous pouvez retrouver ci-dessous les questions auxquelles vous
				avez répondu incorrectement
			</h1>
			<v-expansion-panels class="mt-2">
				<v-expansion-panel
					v-for="answer in filteredIncorrectAnswers"
					:key="`question-${answer.question._id}`">
					<v-expansion-panel-title>
						<span v-html="answer.question.question" />
					</v-expansion-panel-title>
					<v-expansion-panel-text>
						<div class="text-green">
							La bonne réponse est:
							<strong class="good-answer">{{
								answer.question.options[
									answer.question.correctAnswer - 1
								]
							}}</strong>
						</div>
						<div>
							Explication: {{ answer.question.explanation }}
						</div>
					</v-expansion-panel-text>
				</v-expansion-panel>
			</v-expansion-panels>
		</v-col>
	</v-row>
</template>

<style scoped lang="scss">
	.questions {
		height: 100%;
	}
</style>

<style lang="scss">
	.v-expansion-panel-title__overlay {
		background-color: #90caf9 !important;
	}
	.main-panel > div {
		padding: 0;
	}
</style>
