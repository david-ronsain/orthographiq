import { QuestionCategory, QuestionDifficulty } from '../../enums/question.enum'
import { IQuestion } from '../../types/question.type'

export const questions: IQuestion[] = [
	{
		_id: '1',
		category: QuestionCategory.CONJUGAISON,
		correctAnswer: 1,
		difficulty: QuestionDifficulty.EXPERT,
		explanation: '',
		options: ['a', 'b'],
		question: 'a',
	},
	{
		_id: '2',
		category: QuestionCategory.GRAMMAIRE,
		correctAnswer: 1,
		difficulty: QuestionDifficulty.EXPERT,
		explanation: '',
		options: ['b', 'c'],
		question: 'b',
	},
	{
		_id: '3',
		category: QuestionCategory.ORTHOGRAPHE,
		correctAnswer: 1,
		difficulty: QuestionDifficulty.EXPERT,
		explanation: '',
		options: ['c', 'd'],
		question: 'c',
	},
	{
		_id: '4',
		category: QuestionCategory.CONJUGAISON,
		correctAnswer: 1,
		difficulty: QuestionDifficulty.INTERMEDIAIRE,
		explanation: '',
		options: ['d', 'e'],
		question: 'd',
	},
	{
		_id: '5',
		category: QuestionCategory.GRAMMAIRE,
		correctAnswer: 1,
		difficulty: QuestionDifficulty.INTERMEDIAIRE,
		explanation: '',
		options: ['e', 'f'],
		question: 'e',
	},
	{
		_id: '6',
		category: QuestionCategory.ORTHOGRAPHE,
		correctAnswer: 1,
		difficulty: QuestionDifficulty.INTERMEDIAIRE,
		explanation: '',
		options: ['f', 'g'],
		question: 'f',
	},
	{
		_id: '7',
		category: QuestionCategory.CONJUGAISON,
		correctAnswer: 1,
		difficulty: QuestionDifficulty.DEBUTANT,
		explanation: '',
		options: ['g', 'h'],
		question: 'g',
	},
	{
		_id: '8',
		category: QuestionCategory.GRAMMAIRE,
		correctAnswer: 1,
		difficulty: QuestionDifficulty.DEBUTANT,
		explanation: '',
		options: ['h', 'i'],
		question: 'h',
	},
	{
		_id: '9',
		category: QuestionCategory.ORTHOGRAPHE,
		correctAnswer: 1,
		difficulty: QuestionDifficulty.DEBUTANT,
		explanation: '',
		options: ['i', 'j'],
		question: 'i',
	},
]
