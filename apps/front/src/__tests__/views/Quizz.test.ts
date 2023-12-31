import { setActivePinia, createPinia } from 'pinia'
import { mount, flushPromises } from '@vue/test-utils'
import Quizz from '../../../src/views/Quizz.vue'
import vuetify from '../../plugins/vuetify'
import { questions, type IQuestion } from '@orthographiq/shared'

global.fetch = vi.fn(() =>
	Promise.resolve({
		json: () => Promise.resolve(questions as IQuestion[]),
	})
)

describe('Testing the Quizz view', () => {
	beforeEach(() => {
		setActivePinia(createPinia())
	})

	test('Testing the data displayed', async () => {
		const wrapper = mount(Quizz, { global: { plugins: [vuetify] } })
		expect(wrapper).toBeTruthy()

		await flushPromises()
		expect(wrapper.find('.presentation')).toBeTruthy()
		wrapper.find('.v-btn').trigger('click')

		await flushPromises()
		expect(wrapper.find('.main')).toBeTruthy()
	})
})
