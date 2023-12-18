import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import {
	type IAnswer,
	type IQuestion,
	type IResult,
	type ISessionDTO,
} from '@orthographiq/shared'
import { v4 } from 'uuid'
import { getNextQuestion } from '../helpers/question.helper'
import { config } from '../config/config'

export const useStore = defineStore('store', () => {
	const questions = ref([] as IQuestion[])
	const questionsAnswered = ref([] as IAnswer[])
	const currentQuestion = ref(undefined as unknown as IQuestion)
	const quizzFinished = ref(false)
	const quizzStarted = ref(false)

	const getQuestions = computed((): IQuestion[] => questions.value)
	const getCurrentQuestion = computed((): IQuestion => currentQuestion.value)
	const isQuizzFinished = computed((): boolean => quizzFinished.value)
	const countQuestionsAnswered = computed(
		(): number => questionsAnswered.value.length
	)
	const hasQuizzStarted = computed((): boolean => quizzStarted.value)

	function startQuizz(): void {
		quizzStarted.value = true
	}

	function loadQuestions(): void {
		fetch(config.apiUrl, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then((response: Response) => response.json())
			.then((data: IQuestion[]) => {
				questions.value = data
				setCurrentQuestion()
			})
	}

	function saveAnswer(answer: number): void {
		const questionsAnsweredIds: string[] = questionsAnswered.value.map(
			(a: IAnswer) => a.question._id.toString()
		)
		if (
			!questionsAnsweredIds.includes(currentQuestion.value._id.toString())
		) {
			questionsAnswered.value = [
				...questionsAnswered.value,
				{
					answerGiven: answer,
					question: currentQuestion.value,
					correct: answer === currentQuestion.value.correctAnswer,
				},
			]

			questions.value = questions.value.filter(
				(question: IQuestion) =>
					!questionsAnsweredIds.includes(question._id.toString()) &&
					currentQuestion.value._id !== question._id
			)
		}
		setCurrentQuestion()
	}

	function setCurrentQuestion(): void {
		if (questionsAnswered.value.length >= config.nbQuestions) {
			quizzFinished.value = true
			return undefined
		}

		currentQuestion.value = getNextQuestion(
			questions.value,
			questionsAnswered.value
		)
	}

	function prepareResults(): string {
		const sessionId: string = v4()

		fetch(config.apiUrl, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				sessionId,
				answers: questionsAnswered.value.map((answer: IAnswer) => ({
					questionId: answer.question._id.toString(),
					answerGiven: answer.answerGiven,
					correct: answer.correct,
				})),
			} as ISessionDTO),
		})

		return sessionId
	}

	function loadResults(sessionId: string): Promise<IResult> {
		return fetch(config.apiUrl + 'results/' + sessionId, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		}).then((response: Response) => {
			return response.json()
		})
	}

	return {
		getQuestions,
		getCurrentQuestion,
		loadQuestions,
		saveAnswer,
		isQuizzFinished,
		prepareResults,
		countQuestionsAnswered,
		loadResults,
		hasQuizzStarted,
		startQuizz,
		questions,
		setCurrentQuestion,
	}
})
