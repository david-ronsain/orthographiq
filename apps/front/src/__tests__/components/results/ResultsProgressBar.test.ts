import { setActivePinia, createPinia } from 'pinia'
import { mount } from '@vue/test-utils'
import ResultsProgressBar from '../../../components/results/ResultsProgressBar.vue'
import vuetify from '../../../plugins/vuetify'
import { QuestionCategory } from '../../../../../../shared/src/enums/question.enum'
import { getColorByRate } from '../../../helpers/question.helper'

describe('Testing the ResultsDetails component', () => {
	beforeEach(() => {
		setActivePinia(createPinia())
	})

	test('Testing the data displayed', async () => {
		const wrapper = mount(ResultsProgressBar, {
			global: { plugins: [vuetify] },
			props: {
				color: getColorByRate(20),
				pctGoodAnswers: 20,
				title: QuestionCategory.CONJUGAISON,
			},
		})
		expect(wrapper).toBeTruthy()

		expect(wrapper.find('.title').text().slice(2)).toBe(
			QuestionCategory.CONJUGAISON
		)
		expect(wrapper.find('strong').text().slice(0, -1)).toBe('20')
	})
})
