import { setActivePinia, createPinia } from 'pinia'
import { mount, flushPromises } from '@vue/test-utils'
import Quizz from '../../../src/views/Quizz.vue'
import vuetify from '../../plugins/vuetify'
import { questions } from '../../../../../shared/src/tests/data/question.data'
import { type IQuestion } from '../../../../../shared/src/types/question.type'

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
