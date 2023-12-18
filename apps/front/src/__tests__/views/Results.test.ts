import { setActivePinia, createPinia } from 'pinia'
import { mount, flushPromises } from '@vue/test-utils'
import Results from '../../../src/views/Results.vue'
import vuetify from '../../plugins/vuetify'
import { questions } from '../../../../../shared/src/tests/data/question.data'
import { QuestionDifficulty, type IResult } from '@orthographiq/shared'
import { v4 } from 'uuid'
import router from '../../router/'

const result: IResult = {
	globalPctConjugaison: 10,
	globalPctGrammaire: 20,
	globalPctOrthographe: 30,
	pctConjugaisonGoodAnswers: 12,
	pctGrammaireGoodAnswers: 18,
	pctOrthographeGoodAnswers: 30,
	session: {
		_id: 'a',
		sessionId: v4(),
		level: QuestionDifficulty.DEBUTANT,
		answers: [
			{
				question: questions[6],
				correct: true,
				answerGiven: questions[6].correctAnswer,
			},
			{
				question: questions[7],
				correct: true,
				answerGiven: questions[7].correctAnswer,
			},
			{
				question: questions[8],
				correct: true,
				answerGiven: questions[8].correctAnswer,
			},
		],
	},
}

global.fetch = vi.fn(() =>
	Promise.resolve({
		json: () => Promise.resolve(result),
	})
)

describe('Testing the Results view', () => {
	beforeEach(() => {
		setActivePinia(createPinia())
	})

	test('Testing the data displayed', async () => {
		const wrapper = mount(Results, {
			global: { plugins: [vuetify, router] },
		})
		expect(wrapper).toBeTruthy()

		await flushPromises()

		expect(wrapper.find('.level strong').text()).toBe(result.session.level)
		expect(wrapper.find('.progress')).toBeTruthy()
		expect(wrapper.findAll('.questions').length).toBe(0)
	})
})
