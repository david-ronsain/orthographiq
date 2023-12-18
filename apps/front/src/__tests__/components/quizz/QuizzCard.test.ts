import { setActivePinia, createPinia } from 'pinia'
import { useStore } from '../../../store/store'
import { mount } from '@vue/test-utils'
import QuizzCard from '../../../components/quizz/QuizzCard.vue'
import vuetify from '../../../plugins/vuetify'
import { questions } from '../../../../../../shared/src/tests/data/question.data'

describe('Testing the QuizzCard component', () => {
	beforeEach(() => {
		setActivePinia(createPinia())
	})

	test('Trying to answer correctly', async () => {
		const store = useStore()
		store.$patch(() => (store.questions = questions))
		store.setCurrentQuestion()
		const currentQuestion = store.getCurrentQuestion
		const wrapper = mount(QuizzCard, { global: { plugins: [vuetify] } })

		const nextButtonDisabled = wrapper.find(
			'.v-card--actions .v-btn:not(.v-btn--disabled)'
		)
		expect(nextButtonDisabled).toBeTruthy()

		const button = wrapper.find(
			`.v-col:nth-of-type(${currentQuestion.correctAnswer}) > .v-btn`
		)
		const spyButton = vi.spyOn(button, 'trigger')
		await button.trigger('click')

		expect(wrapper).toBeTruthy()
		expect(button).toBeTruthy()
		expect(spyButton).toHaveBeenCalledOnce()

		expect(wrapper.find(`.v-col > .v-btn.text-green`)).toBeTruthy()

		const nextButton = wrapper.find(
			'.v-card-actions .v-btn:not(.v-btn--disabled)'
		)
		expect(button).toBeTruthy()
		nextButton.trigger('click')

		expect(store.getCurrentQuestion).not.toMatchObject(currentQuestion)
	})

	test('Trying to answer incorrectly', async () => {
		const store = useStore()
		store.$patch(() => (store.questions = questions))
		store.setCurrentQuestion()
		const currentQuestion = store.getCurrentQuestion
		const wrapper = mount(QuizzCard, { global: { plugins: [vuetify] } })

		const nextButtonDisabled = wrapper.find(
			'.v-card--actions .v-btn:not(.v-btn--disabled)'
		)
		expect(nextButtonDisabled).toBeTruthy()

		const incorrectAnswerIndex = currentQuestion.options.findIndex(
			(value: string, index: number) =>
				index !== currentQuestion.correctAnswer - 1
		)
		const button = wrapper.find(
			`.v-col:nth-of-type(${incorrectAnswerIndex + 1}) > .v-btn`
		)
		const spyButton = vi.spyOn(button, 'trigger')
		await button.trigger('click')

		expect(wrapper).toBeTruthy()
		expect(button).toBeTruthy()
		expect(spyButton).toHaveBeenCalledOnce()

		expect(wrapper.find(`.v-col > .v-btn.text-green`)).toBeTruthy()
		expect(wrapper.find(`.v-col > .v-btn.text-red`)).toBeTruthy()
		expect(wrapper.find('.explanation')).toBeTruthy()

		const nextButton = wrapper.find(
			'.v-card-actions .v-btn:not(.v-btn--disabled)'
		)
		expect(button).toBeTruthy()
		nextButton.trigger('click')

		expect(store.getCurrentQuestion).not.toMatchObject(currentQuestion)
	})
})
