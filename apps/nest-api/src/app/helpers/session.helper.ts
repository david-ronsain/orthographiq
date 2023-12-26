import {
	IAnswer,
	IAnswerDTO,
	IQuestion,
	ISession,
	ISessionDTO,
	QuestionCategory,
	QuestionDifficulty,
} from '@orthographiq/shared'
import { config } from '../config/config'

/**
 * Determines the overall session level
 * @param {IQuestion[]} questions The list of questions
 * @param {ISession} session The ansers given
 * @returns {QuestionDifficulty}
 */
export const getLevel = (
	questions: IQuestion[],
	session: ISessionDTO
): QuestionDifficulty => {
	const nbExpertGoodAnswers = countGoodAnswersByDifficulty(
		questions,
		session,
		QuestionDifficulty.EXPERT
	)
	const nbIntermediateGoodAnswers = countGoodAnswersByDifficulty(
		questions,
		session,
		QuestionDifficulty.INTERMEDIAIRE
	)
	const nbBeginnerGoodAnswers = countGoodAnswersByDifficulty(
		questions,
		session,
		QuestionDifficulty.DEBUTANT
	)

	const max = Math.max(
		nbExpertGoodAnswers,
		nbIntermediateGoodAnswers,
		nbBeginnerGoodAnswers
	)
	return max === nbExpertGoodAnswers &&
		nbExpertGoodAnswers >= config.answers.minExpert
		? QuestionDifficulty.EXPERT
		: max === nbIntermediateGoodAnswers &&
		  nbIntermediateGoodAnswers >= config.answers.minIntermediate
		? QuestionDifficulty.INTERMEDIAIRE
		: QuestionDifficulty.DEBUTANT
}

/**
 * Returns the number of correct answers
 * @param {IQuestion[]} questions The list of questions
 * @param {ISession} session The answers
 * @param {QuestionDifficulty} difficulty
 * @returns
 */
export const countGoodAnswersByDifficulty = (
	questions: IQuestion[],
	session: ISessionDTO,
	difficulty: QuestionDifficulty
): number => {
	return session.answers.filter((answer: IAnswerDTO) => {
		const question = questions.find(
			(question: IQuestion) =>
				question._id.toString() === answer.questionId.toString()
		)
		return question
			? question.difficulty === difficulty && answer.correct
			: false
	}).length
}

/**
 * Formats the results to display
 * @param {ISession} session The session's answers with their questions
 * @returns
 */
export const formatResults = (
	session: ISession
): {
	pctConjugaisonGoodAnswers: number
	pctGrammaireGoodAnswers: number
	pctOrthographeGoodAnswers: number
} => {
	const nbConjugaisonGoodAnswers = countByCategory(
		session,
		QuestionCategory.CONJUGAISON,
		true
	)
	const nbConjugaisonQuestions = countByCategory(
		session,
		QuestionCategory.CONJUGAISON
	)
	const pctConjugaisonGoodAnswers =
		nbConjugaisonQuestions > 0
			? Math.round(
					(nbConjugaisonGoodAnswers / nbConjugaisonQuestions) * 100
			  )
			: 0

	const nbGrammaireGoodAnswers = countByCategory(
		session,
		QuestionCategory.GRAMMAIRE,
		true
	)
	const nbGrammaireQuestions = countByCategory(
		session,
		QuestionCategory.GRAMMAIRE
	)
	const pctGrammaireGoodAnswers =
		nbGrammaireQuestions > 0
			? Math.round((nbGrammaireGoodAnswers / nbGrammaireQuestions) * 100)
			: 0

	const nbOrthographeGoodAnswers = countByCategory(
		session,
		QuestionCategory.ORTHOGRAPHE,
		true
	)
	const nbOrthographeQuestions = countByCategory(
		session,
		QuestionCategory.ORTHOGRAPHE
	)
	const pctOrthographeGoodAnswers =
		nbOrthographeQuestions > 0
			? Math.round(
					(nbOrthographeGoodAnswers / nbOrthographeQuestions) * 100
			  )
			: 0

	return {
		pctConjugaisonGoodAnswers,
		pctGrammaireGoodAnswers,
		pctOrthographeGoodAnswers,
	}
}

/**
 * Count a number of questions for a given category
 * @param {ISession} session The list of answers with their questions
 * @param {QuestionCategory} category Category of questions
 * @param {boolean} correctAnswersOnly Returns only the number of correctly answered questions
 * @returns
 */
export const countByCategory = (
	session: ISession,
	category: QuestionCategory,
	correctAnswersOnly = false
) => {
	return session.answers.filter(
		(answer: IAnswer) =>
			answer.question.category === category &&
			((answer.correct && correctAnswersOnly) || !correctAnswersOnly)
	).length
}
