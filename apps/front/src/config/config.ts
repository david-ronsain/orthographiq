export const config = {
	nbQuestions: parseInt(import.meta.env.VITE_NB_QUESTIONS || 40),
	apiUrl: import.meta.env.VITE_API_URL || '',
	maxRateBeginner: parseInt(import.meta.env.VITE_MAX_RATE_BEGINNER || 34),
	maxRateIntermediate: parseInt(
		import.meta.env.VITE_MAX_RATE_INTERMEDIATE || 67
	),
	colors: {
		beginner: import.meta.env.VITE_COLOR_BEGINNER || 'blue',
		intermediate:
			import.meta.env.VITE_COLOR_INTERMEDIATE || 'blue-darken-2',
		expert: import.meta.env.VITE_COLOR_EXPERT || 'blue-darken-4',
	},
}
