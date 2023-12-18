import { setActivePinia, createPinia } from 'pinia'
import { useStore } from '../../../store/store'
import { mount } from '@vue/test-utils'
import QuizzPrensentationCard from '../../../components/quizz/QuizzPrensentationCard.vue'
import vuetify from '../../../plugins/vuetify'

describe('Testing the QuizzPresentationCard component', () => {
	beforeEach(() => {
		setActivePinia(createPinia())
	})

	it('should start the quizz', async () => {
		const store = useStore()
		const wrapper = mount(QuizzPrensentationCard, {
			global: { plugins: [vuetify] },
		})
		const button = wrapper.find('.v-btn')
		const spyButton = vi.spyOn(button, 'trigger')
		await button.trigger('click')

		expect(wrapper).toBeTruthy()
		expect(spyButton).toHaveBeenCalledOnce()
		expect(store.hasQuizzStarted).toBe(true)
	})
})
