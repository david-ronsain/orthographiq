import { setActivePinia, createPinia, defineStore } from 'pinia'
import { createTestingPinia } from '@pinia/testing'
import { mount, flushPromises, VueWrapper } from '@vue/test-utils'
import Results from '../../../src/views/Results.vue'
import { questions } from '../../../../../shared/src/tests/data/question.data'
import { QuestionDifficulty, type IResult } from '@orthographiq/shared'
import { v4 } from 'uuid'
import router from '../../router/'
import vuetify from '../../plugins/vuetify'

let wrapper: VueWrapper

const results: IResult = {
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

const useStore = defineStore('store', {
	state: () => ({
		resultsLoading: true,
		results,
		resultsWithError: false,
	}),
	getters: {
		areResultsLoading: (state) => state.resultsLoading,
		areResultsWithError: (state) => state.resultsWithError,
		getResults: (state) => state.results,
	},
	actions: {
		loadResults: vi.fn(),
	},
})
let store = useStore(createTestingPinia())

global.fetch = vi.fn(() =>
	Promise.resolve({
		json: () => Promise.resolve(results),
	})
)

describe('Testing the Results view', () => {
	beforeEach(() => {
		vi.resetAllMocks()
		store = useStore(createTestingPinia())
	})

	it('should display the loader', async () => {
		wrapper = mount(Results, {
			global: {
				plugins: [vuetify, router],
				provide: [store],
			},
		})
		await flushPromises()

		expect(wrapper.exists()).toBe(true)
		expect(wrapper.find('.loading').exists()).toBe(true)
	})

	it('should display the error state', async () => {
		store.loadResults.mockImplementation(() => {
			store.$patch({
				resultsLoading: false,
				resultsWithError: true,
			})
		})
		wrapper = mount(Results, {
			global: {
				plugins: [vuetify, router],
				provide: [store],
			},
		})
		await flushPromises()

		expect(wrapper.exists()).toBe(true)
		expect(wrapper.find('.not-loaded').exists()).toBe(true)
	})

	it('should display the results', async () => {
		store.loadResults.mockImplementation(() => {
			store.$patch({
				resultsLoading: false,
				resultsWithError: false,
			})
		})
		wrapper = mount(Results, {
			global: {
				plugins: [vuetify, router],
				provide: [store],
			},
		})
		await flushPromises()

		expect(wrapper.exists()).toBe(true)
		expect(wrapper.find('.loaded').exists()).toBe(true)
	})
})
