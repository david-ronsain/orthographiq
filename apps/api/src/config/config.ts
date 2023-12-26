export const config = {
	host: process.env.NODE_HOST ?? 'localhost',
	port: process.env.NODE_PORT ?? '3000',
	env: process.env.NODE_ENV ?? 'dev',
	answers: {
		minExpert: parseInt(process.env.NODE_MIN_EXPERT_GOOD_ANSWERS) ?? 0,
		minIntermediate:
			parseInt(process.env.NODE_MIN_INTERMEDIATE_GOOD_ANSWERS) ?? 0,
		nbAnswers: parseInt(process.env.VITE_NB_QUESTIONS)
	},
	db: {
		host: process.env.NODE_MONGO_HOST ?? 'localhost',
		port: parseInt(process.env.NODE_MONGO_PORT) ?? 27017,
		name: process.env.NODE_MONGO_DB ?? '',
	},
}
