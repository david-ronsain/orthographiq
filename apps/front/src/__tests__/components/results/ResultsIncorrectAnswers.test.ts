import { setActivePinia, createPinia } from 'pinia'
import { mount } from '@vue/test-utils'
import ResultsIncorrectAnswers from '../../../components/results/ResultsIncorrectAnswers.vue'
import vuetify from '../../../plugins/vuetify'
import type { IAnswer } from '@orthographiq/shared'
import { questions } from '../../../../../../shared/src/tests/data/question.data'

describe('Testing the ResultsIncorrectAnswers component', () => {
	beforeEach(() => {
		setActivePinia(createPinia())
	})

	test('Testing the data displayed', async () => {
		const answers: IAnswer[] = [
			{
				question: questions[3],
				correct: true,
				answerGiven: questions[3].correctAnswer,
			},
			{
				question: questions[0],
				correct: false,
				answerGiven:
					questions[0].options.findIndex(
						(value: string, index: number) =>
							index !== questions[0].correctAnswer - 1
					) + 1,
			},
			{
				question: questions[1],
				correct: false,
				answerGiven:
					questions[1].options.findIndex(
						(value: string, index: number) =>
							index !== questions[1].correctAnswer - 1
					) + 1,
			},
			{
				question: questions[2],
				correct: false,
				answerGiven:
					questions[2].options.findIndex(
						(value: string, index: number) =>
							index !== questions[2].correctAnswer - 1
					) + 1,
			},
		]
		const wrapper = mount(ResultsIncorrectAnswers, {
			global: { plugins: [vuetify] },
			props: { answers },
		})
		expect(wrapper).toBeTruthy()

		expect(wrapper.findAllComponents('.v-expansion-panel').length).toBe(
			answers.filter((anwser: IAnswer) => !anwser.correct).length
		)
	})
})
