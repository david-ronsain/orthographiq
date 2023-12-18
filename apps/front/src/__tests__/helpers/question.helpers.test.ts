import { QuestionDifficulty, type IAnswer } from '../../../../../shared/src'
import { questions } from '../../../../../shared/src/tests/data/question.data'
import {
	filterRemainingQuestionsByDifficulty,
	getColorByLevel,
	getColorByRate,
	getNextQuestion,
} from '../../helpers/question.helper'

describe('Testing method filterRemainingQuestionsByDifficulty', () => {
	it('should return 3 easy questions', () => {
		expect(
			filterRemainingQuestionsByDifficulty(
				questions,
				[],
				QuestionDifficulty.DEBUTANT
			)
		).toMatchObject([questions[6], questions[7], questions[8]])
		expect(
			filterRemainingQuestionsByDifficulty(
				questions,
				[questions[0]._id.toString()],
				QuestionDifficulty.DEBUTANT
			)
		).toMatchObject([questions[6], questions[7], questions[8]])
	})

	it('should return only 2 easy questions', () => {
		expect(
			filterRemainingQuestionsByDifficulty(
				questions,
				[questions[8]._id.toString()],
				QuestionDifficulty.DEBUTANT
			)
		).toMatchObject([questions[6], questions[7]])
	})
})

describe('Testing method getNextQuestion', () => {
	it('should give an intermediate question if none has already been answered', () => {
		expect(getNextQuestion(questions, []).difficulty).toBe(
			QuestionDifficulty.INTERMEDIAIRE
		)
	})

	it('should give an expert question if the intermediate has been correctly answered', () => {
		const answers: IAnswer[] = [
			{
				answerGiven: questions[3].correctAnswer,
				correct: true,
				question: questions[3],
			},
		]
		expect(getNextQuestion(questions, answers).difficulty).toBe(
			QuestionDifficulty.EXPERT
		)
	})

	it('should give an beginner question if the intermediate has been incorrectly answered', () => {
		const answers: IAnswer[] = [
			{
				answerGiven: 4,
				correct: false,
				question: questions[3],
			},
		]
		expect(getNextQuestion(questions, answers).difficulty).toBe(
			QuestionDifficulty.DEBUTANT
		)
	})

	it('should give an expert question if the first expert has been correctly answered', () => {
		const answers: IAnswer[] = [
			{
				answerGiven: questions[0].correctAnswer,
				correct: true,
				question: questions[0],
			},
		]
		expect(getNextQuestion(questions, answers).difficulty).toBe(
			QuestionDifficulty.EXPERT
		)
	})

	it('should give an intermediate question if the expert has been incorrectly answered', () => {
		const answers: IAnswer[] = [
			{
				answerGiven: 4,
				correct: false,
				question: questions[0],
			},
		]
		expect(getNextQuestion(questions, answers).difficulty).toBe(
			QuestionDifficulty.INTERMEDIAIRE
		)
	})

	it('should give an intermediate question if the first beginner has been correctly answered', () => {
		const answers: IAnswer[] = [
			{
				answerGiven: questions[6].correctAnswer,
				correct: true,
				question: questions[6],
			},
		]
		expect(getNextQuestion(questions, answers).difficulty).toBe(
			QuestionDifficulty.INTERMEDIAIRE
		)
	})

	it('should give an beginner question if the beginner has been incorrectly answered', () => {
		const answers: IAnswer[] = [
			{
				answerGiven: 4,
				correct: false,
				question: questions[6],
			},
		]
		expect(getNextQuestion(questions, answers).difficulty).toBe(
			QuestionDifficulty.DEBUTANT
		)
	})
})

describe('Testing method getColorByLevel', () => {
	it('should be blue', () => {
		expect(getColorByLevel(QuestionDifficulty.DEBUTANT)).toBe('blue')
	})

	it('should be blue-darken-2', () => {
		expect(getColorByLevel(QuestionDifficulty.INTERMEDIAIRE)).toBe(
			'blue-darken-2'
		)
	})

	it('should be blue-darken-4', () => {
		expect(getColorByLevel(QuestionDifficulty.EXPERT)).toBe('blue-darken-4')
	})
})

describe('Testing method getColorByRate', () => {
	it('should be blue', () => {
		expect(getColorByRate(20)).toBe('blue')
	})

	it('should be blue-darken-2', () => {
		expect(getColorByRate(50)).toBe('blue-darken-2')
	})

	it('should be blue-darken-4', () => {
		expect(getColorByRate(75)).toBe('blue-darken-4')
	})
})
