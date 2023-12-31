import {
	QuestionDifficulty,
	type IQuestion,
	type IAnswer,
} from '@orthographiq/shared'
import { config } from '../config/config'

const difficultyColors = new Map([
	[QuestionDifficulty.DEBUTANT, config.colors.beginner],
	[QuestionDifficulty.INTERMEDIAIRE, config.colors.intermediate],
	[QuestionDifficulty.EXPERT, config.colors.expert],
])

/**
 * Returns the next question not yet answered for a given difficulty
 * @param {IQuestion[]} questions The list of questions
 * @param {string[]} questionsAnsweredIds Ids of questions already answered
 * @param {DifficultyLevel} difficulty
 * @returns {IQuestion}
 */
export const filterRemainingQuestionsByDifficulty = (
	questions: IQuestion[],
	questionsAnsweredIds: string[],
	difficulty: QuestionDifficulty
): IQuestion[] => {
	return questions.filter(
		(question: IQuestion) =>
			question.difficulty === difficulty &&
			!questionsAnsweredIds.includes(question._id.toString())
	)
}

/**
 * Returns the next question
 * @param {IQuestion[]} questions The list of questions
 * @param {IAnswer[]} questionsAnswered The list of questions already answered
 * @returns
 */
export const getNextQuestion = (
	questions: IQuestion[],
	questionsAnswered: IAnswer[]
): IQuestion => {
	const questionsAnsweredIds: string[] = questionsAnswered.map(
		(answer: IAnswer) => answer.question._id.toString()
	)

	const beginnerQuestions: IQuestion[] = filterRemainingQuestionsByDifficulty(
		questions,
		questionsAnsweredIds,
		QuestionDifficulty.DEBUTANT
	)
	const expertQuestions: IQuestion[] = filterRemainingQuestionsByDifficulty(
		questions,
		questionsAnsweredIds,
		QuestionDifficulty.EXPERT
	)
	const intermediateQuestions: IQuestion[] =
		filterRemainingQuestionsByDifficulty(
			questions,
			questionsAnsweredIds,
			QuestionDifficulty.INTERMEDIAIRE
		)
	const lastAnswer: IAnswer = questionsAnswered[questionsAnswered.length - 1]

	// Always begin the quiz with an intermediate question
	if (!questionsAnswered.length) {
		return intermediateQuestions[0]
	}
	// if the last question was not an expert and was wrong, then the next question should be an easy one
	else if (
		lastAnswer.question.difficulty !== QuestionDifficulty.EXPERT &&
		!lastAnswer.correct
	) {
		return [
			...beginnerQuestions,
			...intermediateQuestions,
			...expertQuestions,
		][0]
	}
	// If the question was easy and the answer correct, or hard and the answer false, then the next question will be intermediate
	else if (
		(lastAnswer.question.difficulty === QuestionDifficulty.DEBUTANT &&
			lastAnswer.correct) ||
		(lastAnswer.question.difficulty === QuestionDifficulty.EXPERT &&
			!lastAnswer.correct)
	) {
		return [
			...intermediateQuestions,
			...expertQuestions,
			...beginnerQuestions,
		][0]
	}

	// Otherwise, we should ask an advanced question
	return [
		...expertQuestions,
		...intermediateQuestions,
		...beginnerQuestions,
	][0]
}

/**
 * Defines a color depending on the difficulty
 * @param {QuestionDifficulty} difficulty
 * @returns {string}
 */
export const getColorByLevel = (difficulty: QuestionDifficulty): string => {
	return difficultyColors.get(difficulty) || ''
}

/**
 * Defines a color depending on the good answers rate
 * @param {number} rate
 * @returns {string}
 */
export const getColorByRate = (rate: number): string => {
	return getColorByLevel(
		rate < config.maxRateBeginner
			? QuestionDifficulty.DEBUTANT
			: rate < config.maxRateIntermediate
			? QuestionDifficulty.INTERMEDIAIRE
			: QuestionDifficulty.EXPERT
	)
}
