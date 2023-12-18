import { ISession } from './session.type'

export type IResult = {
	session: ISession
	pctConjugaisonGoodAnswers: number
	pctGrammaireGoodAnswers: number
	pctOrthographeGoodAnswers: number
	globalPctConjugaison: number
	globalPctOrthographe: number
	globalPctGrammaire: number
}
