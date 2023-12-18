import { setActivePinia, createPinia } from 'pinia'
import { mount } from '@vue/test-utils'
import ResultsDetails from '../../../components/results/ResultsDetails.vue'
import vuetify from '../../../plugins/vuetify'
import { QuestionCategory } from '../../../../../../shared/src/enums/question.enum'
import { getColorByRate } from '../../../helpers/question.helper'

describe('Testing the ResultsDetails component', () => {
	beforeEach(() => {
		setActivePinia(createPinia())
	})

	test('Testing the data displayed', async () => {
		const globalData = [
			{
				category: QuestionCategory.CONJUGAISON,
				color: getColorByRate(20),
				pct: 20,
			},
			{
				category: QuestionCategory.GRAMMAIRE,
				color: getColorByRate(30),
				pct: 30,
			},
			{
				category: QuestionCategory.ORTHOGRAPHE,
				color: getColorByRate(40),
				pct: 40,
			},
		]
		const userData = [
			{
				category: QuestionCategory.CONJUGAISON,
				color: getColorByRate(15),
				pct: 15,
			},
			{
				category: QuestionCategory.GRAMMAIRE,
				color: getColorByRate(33),
				pct: 33,
			},
			{
				category: QuestionCategory.ORTHOGRAPHE,
				color: getColorByRate(52),
				pct: 52,
			},
		]

		const wrapper = mount(ResultsDetails, {
			global: { plugins: [vuetify] },
			props: { globalData, userData },
		})
		expect(wrapper).toBeTruthy()

		// check if user data is ok
		expect(
			wrapper
				.find(
					'.v-col-md-6:first-of-type > div > div:nth-of-type(1) > .title'
				)
				.text()
				.slice(2)
		).toBe(userData[0].category)
		expect(
			wrapper
				.find(
					'.v-col-md-6:first-of-type > div > div:nth-of-type(1) .v-progress-linear__content strong'
				)
				.text()
				.slice(0, -1)
		).toBe(userData[0].pct.toString())
		expect(
			wrapper
				.find(
					'.v-col-md-6:first-of-type > div > div:nth-of-type(2) > .title'
				)
				.text()
				.slice(2)
		).toBe(userData[1].category)
		expect(
			wrapper
				.find(
					'.v-col-md-6:first-of-type > div > div:nth-of-type(2) .v-progress-linear__content strong'
				)
				.text()
				.slice(0, -1)
		).toBe(userData[1].pct.toString())
		expect(
			wrapper
				.find(
					'.v-col-md-6:first-of-type > div > div:nth-of-type(3) > .title'
				)
				.text()
				.slice(2)
		).toBe(userData[2].category)
		expect(
			wrapper
				.find(
					'.v-col-md-6:first-of-type > div > div:nth-of-type(3) .v-progress-linear__content strong'
				)
				.text()
				.slice(0, -1)
		).toBe(userData[2].pct.toString())

		// check if global data is ok
		expect(
			wrapper
				.find(
					'.v-col-md-6:last-of-type > div > div:nth-of-type(1) > .title'
				)
				.text()
				.slice(2)
		).toBe(globalData[0].category)
		expect(
			wrapper
				.find(
					'.v-col-md-6:last-of-type > div > div:nth-of-type(1) .v-progress-linear__content strong'
				)
				.text()
				.slice(0, -1)
		).toBe(globalData[0].pct.toString())
		expect(
			wrapper
				.find(
					'.v-col-md-6:last-of-type > div > div:nth-of-type(2) > .title'
				)
				.text()
				.slice(2)
		).toBe(globalData[1].category)
		expect(
			wrapper
				.find(
					'.v-col-md-6:last-of-type > div > div:nth-of-type(2) .v-progress-linear__content strong'
				)
				.text()
				.slice(0, -1)
		).toBe(globalData[1].pct.toString())
		expect(
			wrapper
				.find(
					'.v-col-md-6:last-of-type > div > div:nth-of-type(3) > .title'
				)
				.text()
				.slice(2)
		).toBe(globalData[2].category)
		expect(
			wrapper
				.find(
					'.v-col-md-6:last-of-type > div > div:nth-of-type(3) .v-progress-linear__content strong'
				)
				.text()
				.slice(0, -1)
		).toBe(globalData[2].pct.toString())
	})
})
