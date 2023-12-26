/* eslint-disable @nx/enforce-module-boundaries */
import { v4 } from 'uuid'
import {
	ISession,
	ISessionDTO,
	QuestionCategory,
	QuestionDifficulty,
} from '../../../../shared/src'
import {
	countByCategory,
	countGoodAnswersByDifficulty,
	formatResults,
	getLevel,
} from '../../src/app/helpers/session.helper'
import { questions } from '../../../../shared/src/tests/data/question.data'

describe('Testing the session helper', () => {
	it('Testing the method countGoodAnswersByDifficulty', () => {
		const session = {
			sessionId: v4(),
			level: QuestionDifficulty.EXPERT,
			answers: [
				{
					answerGiven: 1,
					correct: true,
					questionId: '1',
				},
				{
					answerGiven: 1,
					correct: true,
					questionId: '2',
				},
				{
					answerGiven: 1,
					correct: true,
					questionId: '4',
				},
			],
		} as ISessionDTO
		expect(
			countGoodAnswersByDifficulty(
				questions,
				session,
				QuestionDifficulty.EXPERT
			)
		).toBe(2)
		expect(
			countGoodAnswersByDifficulty(
				questions,
				session,
				QuestionDifficulty.INTERMEDIAIRE
			)
		).toBe(1)
		expect(
			countGoodAnswersByDifficulty(
				questions,
				session,
				QuestionDifficulty.DEBUTANT
			)
		).toBe(0)
	})

	it('Testing the method getLevel', () => {
		let session = {
			sessionId: v4(),
			level: QuestionDifficulty.EXPERT,
			answers: [
				{
					answerGiven: 1,
					correct: true,
					questionId: '1',
				},
				{
					answerGiven: 1,
					correct: true,
					questionId: '2',
				},
				{
					answerGiven: 1,
					correct: true,
					questionId: '4',
				},
			],
		} as ISessionDTO
		expect(getLevel(questions, session)).toBe(QuestionDifficulty.EXPERT)

		session = {
			sessionId: v4(),
			level: QuestionDifficulty.INTERMEDIAIRE,
			answers: [
				{
					answerGiven: 1,
					correct: true,
					questionId: '1',
				},
				{
					answerGiven: 1,
					correct: true,
					questionId: '4',
				},
			],
		} as ISessionDTO
		expect(getLevel(questions, session)).toBe(
			QuestionDifficulty.INTERMEDIAIRE
		)

		session = {
			sessionId: v4(),
			level: QuestionDifficulty.DEBUTANT,
			answers: [
				{
					answerGiven: 1,
					correct: true,
					questionId: '7',
				},
			],
		} as ISessionDTO
		expect(getLevel(questions, session)).toBe(QuestionDifficulty.DEBUTANT)

		session = {
			sessionId: v4(),
			level: QuestionDifficulty.DEBUTANT,
			answers: [
				{
					answerGiven: 1,
					correct: true,
					questionId: '1',
				},
				{
					answerGiven: 1,
					correct: true,
					questionId: '7',
				},
				{
					answerGiven: 1,
					correct: true,
					questionId: '8',
				},
			],
		} as ISessionDTO
		expect(getLevel(questions, session)).toBe(QuestionDifficulty.DEBUTANT)
	})

	it('Testing the method formatResults', () => {
		let session = {
			_id: '1',
			sessionId: v4(),
			level: QuestionDifficulty.EXPERT,
			answers: [
				{
					answerGiven: 1,
					correct: true,
					question: questions[0],
				},
				{
					answerGiven: 2,
					correct: false,
					question: questions[1],
				},
				{
					answerGiven: 1,
					correct: true,
					question: questions[2],
				},
			],
		} as ISession
		expect(formatResults(session)).toMatchObject({
			pctConjugaisonGoodAnswers: 100,
			pctGrammaireGoodAnswers: 0,
			pctOrthographeGoodAnswers: 100,
		})

		session = {
			_id: '1',
			sessionId: v4(),
			level: QuestionDifficulty.EXPERT,
			answers: [
				{
					answerGiven: 1,
					correct: true,
					question: questions[0],
				},
				{
					answerGiven: 2,
					correct: false,
					question: questions[3],
				},
				{
					answerGiven: 1,
					correct: true,
					question: questions[6],
				},
			],
		} as ISession
		expect(formatResults(session)).toMatchObject({
			pctConjugaisonGoodAnswers: 67,
			pctGrammaireGoodAnswers: 0,
			pctOrthographeGoodAnswers: 0,
		})
	})

	it('Testing the method countByCategory', () => {
		let session = {
			_id: '1',
			sessionId: v4(),
			level: QuestionDifficulty.INTERMEDIAIRE,
			answers: [
				{
					answerGiven: 1,
					correct: true,
					question: questions[0],
				},
				{
					answerGiven: 2,
					correct: false,
					question: questions[3],
				},
				{
					answerGiven: 1,
					correct: true,
					question: questions[6],
				},
			],
		} as ISession
		expect(countByCategory(session, QuestionCategory.CONJUGAISON)).toBe(3)
		expect(
			countByCategory(session, QuestionCategory.CONJUGAISON, true)
		).toBe(2)

		session = {
			_id: '1',
			sessionId: v4(),
			level: QuestionDifficulty.INTERMEDIAIRE,
			answers: [
				{
					answerGiven: 1,
					correct: true,
					question: questions[0],
				},
				{
					answerGiven: 2,
					correct: false,
					question: questions[3],
				},
				{
					answerGiven: 1,
					correct: true,
					question: questions[6],
				},
			],
		} as ISession
		expect(countByCategory(session, QuestionCategory.GRAMMAIRE)).toBe(0)
		expect(countByCategory(session, QuestionCategory.GRAMMAIRE, true)).toBe(
			0
		)
	})
})
