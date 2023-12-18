import {
	IQuestionDTO,
	QuestionCategory,
	QuestionDifficulty,
} from '@orthographiq/shared'

export const questionsData: IQuestionDTO[] = [
	{
		question:
			'Quelle est la conjugaison correcte du verbe "rendre" à la troisième personne du pluriel à l\'imparfait du subjonctif?',
		options: [
			"qu'ils rendaient",
			"qu'ils rendent",
			"qu'ils rendissent",
			"qu'ils renda",
		],
		correctAnswer: 3,
		difficulty: QuestionDifficulty.EXPERT,
		category: QuestionCategory.CONJUGAISON,
		explanation:
			'Pour conjuguer le verbe "rendre" à la troisième personne du pluriel à l\'imparfait du subjonctif, la forme correcte est "qu\'ils rendissent". Cette forme est utilisée pour exprimer une action incertaine ou souhaitée dans le passé. La terminaison correcte pour la troisième personne du pluriel à l\'imparfait du subjonctif est "-issent". Ainsi, la réponse correcte est "qu\'ils rendissent".',
	},
	{
		question: 'Quel est l\'antonyme du mot "efficace"?',
		options: ['inefficace', 'efficace', 'efficacité', 'efficient'],
		correctAnswer: 1,
		difficulty: QuestionDifficulty.EXPERT,
		category: QuestionCategory.ORTHOGRAPHE,
		explanation:
			'L\'antonyme du mot "efficace" est "inefficace", signifiant non efficace ou peu performant. Les autres options ne sont pas des antonymes, car "efficace" est déjà opposé à l\'inefficacité.',
	},
	{
		question:
			'Conjuguez le verbe "survenir" à la première personne du singulier au passé simple.',
		options: ['je survis', 'je survienne', 'je survins', 'je survenais'],
		correctAnswer: 3,
		difficulty: QuestionDifficulty.EXPERT,
		category: QuestionCategory.CONJUGAISON,
		explanation:
			'La conjugaison correcte du verbe "survenir" à la première personne du singulier au passé simple est "je survins". Cette forme exprime une action ponctuelle et achevée dans le passé. Ainsi, la réponse correcte est "je survins".',
	},
	{
		question:
			'Quel est le pronom relatif dans la phrase : "La personne dont je parle est absente."?',
		options: ['La', 'dont', 'je', 'absente'],
		correctAnswer: 2,
		difficulty: QuestionDifficulty.EXPERT,
		category: QuestionCategory.GRAMMAIRE,
		explanation:
			'Le pronom relatif dans la phrase est "dont". Il relie la personne mentionnée à l\'action de parler. Dans ce contexte, "dont" remplace le complément du verbe "parler", indiquant la personne à propos de laquelle on parle. Ainsi, la réponse correcte est "dont".',
	},
	{
		question:
			'Quelle est la forme correcte de la phrase : "Ils _____ en train de réfléchir."?',
		options: ['sont', 'seront', 'étaient', 'avaient'],
		correctAnswer: 1,
		difficulty: QuestionDifficulty.EXPERT,
		category: QuestionCategory.CONJUGAISON,
		explanation:
			'La forme correcte de la phrase est "Ils sont en train de réfléchir.". Cette construction est utilisée pour indiquer une action en cours au moment du discours. Ainsi, la réponse correcte est "sont".',
	},
	{
		question:
			'Quelle est la nature du mot souligné dans la phrase : "Il était très <span style="text-decoration: underline">compétent</span>."?',
		options: ['adjectif', 'verbe', 'nom', 'adverbe'],
		correctAnswer: 1,
		difficulty: QuestionDifficulty.EXPERT,
		category: QuestionCategory.GRAMMAIRE,
		explanation:
			'Le mot souligné, "compétent", est un adjectif. Il qualifie le pronom "Il" en fournissant une caractéristique supplémentaire. Ainsi, la réponse correcte est "adjectif".',
	},
	{
		question:
			'Conjuguez le verbe "avoir" à la troisième personne du singulier au futur antérieur.',
		options: ['il aura', 'il avait', 'il aura eu', 'il a eu'],
		correctAnswer: 3,
		difficulty: QuestionDifficulty.EXPERT,
		category: QuestionCategory.CONJUGAISON,
		explanation:
			'La conjugaison correcte du verbe "avoir" à la troisième personne du singulier au futur antérieur est "il aura eu". Cette forme indique une action future achevée avant une autre action future. Ainsi, la réponse correcte est "il aura eu".',
	},
	{
		question: 'Quel est le contraire du mot "intelligent"?',
		options: ['intelligent', 'ignorant', 'savant', 'rusé'],
		correctAnswer: 2,
		difficulty: QuestionDifficulty.EXPERT,
		category: QuestionCategory.ORTHOGRAPHE,
		explanation:
			'Le contraire du mot "intelligent" est "ignorant", signifiant dépourvu de connaissance ou d\'intelligence. Les autres options ne sont pas des antonymes de "intelligent".',
	},
	{
		question:
			'Conjuguez le verbe "devoir" à la deuxième personne du pluriel au conditionnel passé.',
		options: [
			'vous deviez',
			'vous devrez',
			'vous devriez',
			'vous auriez dû',
		],
		correctAnswer: 4,
		difficulty: QuestionDifficulty.EXPERT,
		category: QuestionCategory.CONJUGAISON,
		explanation:
			'La conjugaison correcte du verbe "devoir" à la deuxième personne du pluriel au conditionnel passé est "vous auriez dû". Cette forme est utilisée pour exprimer une action conditionnelle qui aurait dû se produire dans le passé. Ainsi, la réponse correcte est "vous auriez dû".',
	},
	{
		question:
			'Quel mot complète correctement la phrase : "Elle a réussi _____ examen."?',
		options: ['son', 'sont', 'sa', 'ses'],
		correctAnswer: 1,
		difficulty: QuestionDifficulty.EXPERT,
		category: QuestionCategory.GRAMMAIRE,
		explanation:
			'Le mot qui complète correctement la phrase est "son". La phrase correcte est : "Elle a réussi son examen.". Dans ce contexte, "son" est utilisé pour montrer à qui appartient l\'examen réussi. Ainsi, la réponse correcte est "sa".',
	},
	{
		category: QuestionCategory.GRAMMAIRE,
		question:
			"Quelle est la règle d'accord du participe passé avec l'auxiliaire \"être\" dans une phrase où le sujet est un pronom relatif et le complément d'objet direct est au féminin pluriel?",
		options: [
			"Il s'accorde avec le sujet en genre et en nombre.",
			"Il s'accorde avec le pronom relatif en genre et en nombre.",
			"Il s'accorde avec le complément d'objet direct en genre et en nombre.",
			'Il reste invariable.',
		],
		correctAnswer: 3,
		difficulty: QuestionDifficulty.EXPERT,
		explanation:
			"La règle d'accord du participe passé avec l'auxiliaire \"être\" dans une phrase où le sujet est un pronom relatif et le complément d'objet direct est au féminin pluriel est qu'il s'accorde avec le complément d'objet direct en genre et en nombre. Ainsi, la réponse correcte est \"Il s'accorde avec le complément d'objet direct en genre et en nombre.\".",
	},
	{
		category: QuestionCategory.CONJUGAISON,
		question:
			'Conjuguez le verbe "férir" à la deuxième personne du singulier au subjonctif passé.',
		options: ['tu férisses', 'tu fériras', 'tu as féri', 'tu férirais'],
		correctAnswer: 1,
		difficulty: QuestionDifficulty.EXPERT,
		explanation:
			'La conjugaison correcte du verbe "férir" à la deuxième personne du singulier au subjonctif passé est "tu férisses". Ainsi, la réponse correcte est "tu férisses".',
	},
	{
		category: QuestionCategory.GRAMMAIRE,
		question:
			'Quelle est la fonction du complément souligné dans la phrase : "Elle a grandi <span style="text-decoration: underline">sans ses parents</span>."?',
		options: [
			"complément d'objet direct",
			"complément d'objet indirect",
			'complément circonstanciel',
			'complément de phrase',
		],
		correctAnswer: 3,
		difficulty: QuestionDifficulty.EXPERT,
		explanation:
			'Le complément souligné, "sans ses parents", est un complément circonstanciel. Il indique les circonstances dans lesquelles l\'action de grandir a eu lieu. Ainsi, la réponse correcte est "complément circonstanciel".',
	},
	{
		category: QuestionCategory.CONJUGAISON,
		question:
			'Conjuguez le verbe "dérober" à la troisième personne du pluriel au conditionnel présent.',
		options: [
			'ils dérobent',
			'ils déroberont',
			'ils ont dérobé',
			'ils déroberaient',
		],
		correctAnswer: 4,
		difficulty: QuestionDifficulty.EXPERT,
		explanation:
			'La conjugaison correcte du verbe "dérober" à la troisième personne du pluriel au conditionnel présent est "ils déroberaient". Ainsi, la réponse correcte est "ils déroberaient".',
	},
	{
		category: QuestionCategory.ORTHOGRAPHE,
		question:
			'Quelle est la forme correcte : "La situation est _________."',
		options: ['alarmant', 'alarmante', 'alarmantes', 'alarmants'],
		correctAnswer: 2,
		difficulty: QuestionDifficulty.EXPERT,
		explanation:
			'La forme correcte est "La situation est alarmante.". L\'adjectif "alarmante" s\'accorde en genre et en nombre avec le nom "situation". Ainsi, la réponse correcte est "alarmante".',
	},
	{
		category: QuestionCategory.CONJUGAISON,
		question:
			'Conjuguez le verbe "emboîter" à la première personne du singulier au passé antérieur.',
		options: [
			"j'emboîte",
			"j'emboîtais",
			"j'aurai emboîté",
			"j'emboîterai",
		],
		correctAnswer: 3,
		difficulty: QuestionDifficulty.EXPERT,
		explanation:
			'La conjugaison correcte du verbe "emboîter" à la première personne du singulier au passé antérieur est "j\'aurai emboîté". Ainsi, la réponse correcte est "j\'aurai emboîté".',
	},
	{
		category: QuestionCategory.GRAMMAIRE,
		question:
			'Quelle est la nature du mot souligné dans la phrase : "Il est <span style="text-decoration: underline">particulièrement</span> intelligent."?',
		options: ['adjectif', 'verbe', 'nom', 'adverbe'],
		correctAnswer: 4,
		difficulty: QuestionDifficulty.EXPERT,
		explanation:
			'Le mot souligné, "particulièrement", est un adverbe. Il modifie l\'adjectif "intelligent" en exprimant le degré de l\'intelligence. Ainsi, la réponse correcte est "adverbe".',
	},
	{
		category: QuestionCategory.CONJUGAISON,
		question:
			'Conjuguez le verbe "faillir" à la deuxième personne du pluriel à l\'imparfait du subjonctif.',
		options: [
			'vous faillissez',
			'vous faillissiez',
			'vous faillirez',
			'vous faillir',
		],
		correctAnswer: 2,
		difficulty: QuestionDifficulty.EXPERT,
		explanation:
			'La conjugaison correcte du verbe "faillir" à la deuxième personne du pluriel à l\'imparfait du subjonctif est "vous faillisiez". Ainsi, la réponse correcte est "vous faillisiez".',
	},
	{
		category: QuestionCategory.ORTHOGRAPHE,
		question:
			'Quelle est la forme correcte : "Elle a _________ un discours."',
		options: ['prononcé', 'prononçais', 'prononce', 'prononça'],
		correctAnswer: 1,
		difficulty: QuestionDifficulty.EXPERT,
		explanation:
			'La forme correcte est "Elle a prononcé un discours.". Le verbe "prononcer" est utilisé ici à la forme féminine et singulière. Ainsi, la réponse correcte est "prononcé".',
	},
	{
		category: QuestionCategory.GRAMMAIRE,
		question:
			'Quelle est la fonction du complément souligné dans la phrase : "Il a réussi <span style="text-decoration: underline">malgré ses difficultés</span>."?',
		options: [
			"complément d'objet direct",
			"complément d'objet indirect",
			'complément circonstanciel',
			'complément de phrase',
		],
		correctAnswer: 3,
		difficulty: QuestionDifficulty.EXPERT,
		explanation:
			'Le complément souligné, "malgré ses difficultés", est un complément circonstanciel. Il indique les circonstances dans lesquelles l\'action de réussir a eu lieu. Ainsi, la réponse correcte est "complément circonstanciel".',
	},
	{
		category: QuestionCategory.GRAMMAIRE,
		question:
			"Quelle est la règle d'accord du participe passé avec l'auxiliaire \"avoir\" dans une phrase où le complément d'objet direct est placé avant le verbe et est au pluriel?",
		options: [
			"Il s'accorde avec le sujet en genre et en nombre.",
			"Il s'accorde avec le complément d'objet direct en genre et en nombre.",
			'Il reste invariable.',
			"Il s'accorde seulement en genre avec le complément d'objet direct.",
		],
		correctAnswer: 2,
		difficulty: QuestionDifficulty.EXPERT,
		explanation:
			"La règle d'accord du participe passé avec l'auxiliaire \"avoir\" dans une phrase où le complément d'objet direct est placé avant le verbe et est au pluriel est qu'il s'accorde avec le complément d'objet direct en genre et en nombre. Ainsi, la réponse correcte est \"Il s'accorde avec le complément d'objet direct en genre et en nombre.\".",
	},
	{
		category: QuestionCategory.CONJUGAISON,
		question:
			'Conjuguez le verbe "déconfire" à la première personne du pluriel au passé simple.',
		options: [
			'nous déconfîmes',
			'nous déconfaisons',
			'nous avons déconfit',
			'nous déconfaîmes',
		],
		correctAnswer: 1,
		difficulty: QuestionDifficulty.EXPERT,
		explanation:
			'La conjugaison correcte du verbe "déconfire" à la première personne du pluriel au passé simple est "nous déconfîmes". Ainsi, la réponse correcte est "nous déconfîmes".',
	},
	{
		category: QuestionCategory.GRAMMAIRE,
		question:
			'Quelle est la fonction du complément souligné dans la phrase : "Il parle <span style="text-decoration: underline">d\'une voix grave</span>."?',
		options: [
			"complément d'objet direct",
			"complément d'objet indirect",
			'complément circonstanciel',
			'complément de phrase',
		],
		correctAnswer: 3,
		difficulty: QuestionDifficulty.EXPERT,
		explanation:
			'Le complément souligné, "d\'une voix grave", est un complément circonstanciel. Il indique la manière dont l\'action de parler est réalisée. Ainsi, la réponse correcte est "complément circonstanciel".',
	},
	{
		category: QuestionCategory.CONJUGAISON,
		question:
			'Conjuguez le verbe "échoir" à la troisième personne du singulier au conditionnel passé.',
		options: ['il échut', 'il échure', 'il a échu', 'il écherrait'],
		correctAnswer: 1,
		difficulty: QuestionDifficulty.EXPERT,
		explanation:
			'La conjugaison correcte du verbe "échoir" à la troisième personne du singulier au conditionnel passé est "il échut". Ainsi, la réponse correcte est "il échut".',
	},
	{
		category: QuestionCategory.ORTHOGRAPHE,
		question:
			'Quelle est la forme correcte : "Son raisonnement était _________."',
		options: [
			'convainquant',
			'convaincant',
			'convaincquant',
			'convainkant',
		],
		correctAnswer: 1,
		difficulty: QuestionDifficulty.EXPERT,
		explanation:
			'La forme correcte est "Son raisonnement était convaincant.". L\'adjectif "convaincant" est la forme correcte pour exprimer que le raisonnement était persuasif. Ainsi, la réponse correcte est "convaincant".',
	},
	{
		category: QuestionCategory.CONJUGAISON,
		question:
			'Conjuguez le verbe "percevoir" à la deuxième personne du pluriel à l\'imparfait du subjonctif.',
		options: [
			'vous perceviez',
			'vous percevez',
			'vous percevrez',
			'vous percevoir',
		],
		correctAnswer: 1,
		difficulty: QuestionDifficulty.EXPERT,
		explanation:
			'La conjugaison correcte du verbe "percevoir" à la deuxième personne du pluriel à l\'imparfait du subjonctif est "vous perceviez". Ainsi, la réponse correcte est "vous perceviez".',
	},
	{
		category: QuestionCategory.GRAMMAIRE,
		question:
			'Quelle est la nature du mot souligné dans la phrase : "Elle est <span style="text-decoration: underline">incroyablement</span> persévérante."?',
		options: ['adjectif', 'verbe', 'nom', 'adverbe'],
		correctAnswer: 4,
		difficulty: QuestionDifficulty.EXPERT,
		explanation:
			'Le mot souligné, "incroyablement", est un adverbe. Il modifie l\'adjectif "persévérante" en exprimant le degré de persévérance. Ainsi, la réponse correcte est "adverbe".',
	},
	{
		category: QuestionCategory.CONJUGAISON,
		question:
			'Conjuguez le verbe "débattre" à la première personne du singulier au futur antérieur.',
		options: [
			"j'aurai débattu",
			"j'ai débattu",
			'je débats',
			'je débattrai',
		],
		correctAnswer: 1,
		difficulty: QuestionDifficulty.EXPERT,
		explanation:
			'La conjugaison correcte du verbe "débattre" à la première personne du singulier au futur antérieur est "j\'aurai débattu". Ainsi, la réponse correcte est "j\'aurai débattu".',
	},
	{
		category: QuestionCategory.ORTHOGRAPHE,
		question:
			'Quelle est la forme correcte : "Il a _________ la question."',
		options: ['posé', 'pôsé', 'pauzé', 'pohsé'],
		correctAnswer: 1,
		difficulty: QuestionDifficulty.EXPERT,
		explanation:
			'La forme correcte est "Il a posé la question.". Le verbe "poser" est orthographié avec un "e" à la fin. Ainsi, la réponse correcte est "posé".',
	},
	{
		category: QuestionCategory.GRAMMAIRE,
		question:
			'Quelle est la fonction du complément souligné dans la phrase : "Il a agi <span style="text-decoration: underline">avec une extrême prudence</span>."?',
		options: [
			"complément d'objet direct",
			"complément d'objet indirect",
			'complément circonstanciel',
			'complément de phrase',
		],
		correctAnswer: 3,
		difficulty: QuestionDifficulty.EXPERT,
		explanation:
			'Le complément souligné, "avec une extrême prudence", est un complément circonstanciel. Il indique la manière dont l\'action d\'agir a été réalisée. Ainsi, la réponse correcte est "complément circonstanciel".',
	},
	{
		category: QuestionCategory.GRAMMAIRE,
		question:
			'Quelle est la règle d\'accord du participe passé avec l\'auxiliaire "avoir" dans une phrase où le sujet est un pronom relatif?',
		options: [
			"Il s'accorde avec le sujet en genre et en nombre.",
			"Il s'accorde avec le pronom relatif en genre et en nombre.",
			'Il reste invariable.',
			"Il s'accorde seulement en genre avec le pronom relatif.",
		],
		correctAnswer: 2,
		difficulty: QuestionDifficulty.EXPERT,
		explanation:
			"La règle d'accord du participe passé avec l'auxiliaire \"avoir\" dans une phrase où le sujet est un pronom relatif est qu'il s'accorde avec le pronom relatif en genre et en nombre. Ainsi, la réponse correcte est \"Il s'accorde avec le pronom relatif en genre et en nombre.\".",
	},
	{
		category: QuestionCategory.CONJUGAISON,
		question:
			'Conjuguez le verbe "ébaubir" à la deuxième personne du pluriel au conditionnel présent.',
		options: [
			'vous ébaubissez',
			'vous ébaubiriez',
			'vous ébaubissiez',
			'vous avez ébaubi',
		],
		correctAnswer: 2,
		difficulty: QuestionDifficulty.EXPERT,
		explanation:
			'La conjugaison correcte du verbe "ébaubir" à la deuxième personne du pluriel au conditionnel présent est "vous ébaubirez". Ainsi, la réponse correcte est "vous ébaubirez".',
	},
	{
		category: QuestionCategory.GRAMMAIRE,
		question:
			'Quelle est la fonction du complément souligné dans la phrase : "Il était impossible <span style="text-decoration: underline">de le voir</span>."?',
		options: [
			"complément d'objet direct",
			"complément d'objet indirect",
			'complément circonstanciel',
			'complément de phrase',
		],
		correctAnswer: 3,
		difficulty: QuestionDifficulty.EXPERT,
		explanation:
			'Le complément souligné, "de le voir", est un complément circonstanciel. Il indique la manière dont l\'impossibilité était présente. Ainsi, la réponse correcte est "complément circonstanciel".',
	},
	{
		category: QuestionCategory.CONJUGAISON,
		question:
			'Conjuguez le verbe "surgir" à la première personne du singulier au subjonctif imparfait.',
		options: ['je surgis', 'je surgissais', "j'ai surgi", 'je surgirais'],
		correctAnswer: 2,
		difficulty: QuestionDifficulty.EXPERT,
		explanation:
			'La conjugaison correcte du verbe "surgir" à la première personne du singulier au subjonctif imparfait est "je surgissais". Ainsi, la réponse correcte est "je surgissais".',
	},
	{
		category: QuestionCategory.ORTHOGRAPHE,
		question:
			'Quelle est la forme correcte : "La réunion était _________."',
		options: ['fructueuse', 'fructueux', 'fructueuses', 'fructueuxes'],
		correctAnswer: 1,
		difficulty: QuestionDifficulty.EXPERT,
		explanation:
			'La forme correcte est "La réunion était fructueuse.". L\'adjectif "fructueuse" s\'accorde en genre et en nombre avec le nom "réunion". Ainsi, la réponse correcte est "fructueuse".',
	},
	{
		category: QuestionCategory.CONJUGAISON,
		question:
			'Conjuguez le verbe "instruire" à la troisième personne du pluriel au passé simple.',
		options: [
			'ils instruisent',
			'ils instruisaient',
			'ils ont instruit',
			'ils instruiront',
		],
		correctAnswer: 2,
		difficulty: QuestionDifficulty.EXPERT,
		explanation:
			'La conjugaison correcte du verbe "instruire" à la troisième personne du pluriel au passé simple est "ils instruisaient". Ainsi, la réponse correcte est "ils instruisaient".',
	},
	{
		category: QuestionCategory.GRAMMAIRE,
		question:
			'Quelle est la nature du mot souligné dans la phrase : "Elle est <span style="text-decoration: underline">excessivement</span> intelligente."?',
		options: ['adjectif', 'verbe', 'nom', 'adverbe'],
		correctAnswer: 4,
		difficulty: QuestionDifficulty.EXPERT,
		explanation:
			'Le mot souligné, "excessivement", est un adverbe. Il modifie l\'adjectif "intelligente" en exprimant le degré de l\'intelligence. Ainsi, la réponse correcte est "adverbe".',
	},
	{
		category: QuestionCategory.CONJUGAISON,
		question:
			'Conjuguez le verbe "déroger" à la deuxième personne du singulier au plus-que-parfait.',
		options: [
			'tu déroges',
			'tu avais dérogé',
			'tu dérogeas',
			'tu aurais dérogé',
		],
		correctAnswer: 2,
		difficulty: QuestionDifficulty.EXPERT,
		explanation:
			'La conjugaison correcte du verbe "déroger" à la deuxième personne du singulier au plus-que-parfait est "tu avais dérogé". Ainsi, la réponse correcte est "tu avais dérogé".',
	},
	{
		category: QuestionCategory.ORTHOGRAPHE,
		question: 'Quelle est la forme correcte : "Il a _________ ses idées."',
		options: ['changer', 'changé', 'changent', 'changées'],
		correctAnswer: 2,
		difficulty: QuestionDifficulty.EXPERT,
		explanation:
			'La forme correcte est "Il a changé ses idées.". Le verbe "changer" doit être utilisé ici à la forme masculine et singulière pour correspondre au sujet "Il". Ainsi, la réponse correcte est "changé".',
	},
	{
		category: QuestionCategory.GRAMMAIRE,
		question:
			'Quelle est la fonction du complément souligné dans la phrase : "Il a réussi <span style="text-decoration: underline">grâce à ses efforts constants</span>."?',
		options: [
			"complément d'objet direct",
			"complément d'objet indirect",
			'complément circonstanciel',
			'complément de phrase',
		],
		correctAnswer: 3,
		difficulty: QuestionDifficulty.EXPERT,
		explanation:
			'Le complément souligné, "grâce à ses efforts constants", est un complément circonstanciel. Il indique les circonstances dans lesquelles l\'action de réussir a eu lieu. Ainsi, la réponse correcte est "complément circonstanciel".',
	},
	{
		category: QuestionCategory.CONJUGAISON,
		question:
			'Conjuguez le verbe "partir" à la deuxième personne du singulier à l\'imparfait.',
		options: ['tu partais', 'tu partiras', 'tu es parti', 'tu as parti'],
		correctAnswer: 1,
		difficulty: QuestionDifficulty.INTERMEDIAIRE,
		explanation:
			'La conjugaison correcte du verbe "partir" à la deuxième personne du singulier à l\'imparfait est "tu partais". Ainsi, la réponse correcte est "tu partais".',
	},
	{
		category: QuestionCategory.ORTHOGRAPHE,
		question:
			'Quelle est la forme correcte : "Ils ont mangé tous les chocolats. Il ne reste plus _________."',
		options: ['rien', 'quelque chose', 'aucun', 'quelques-uns'],
		correctAnswer: 1,
		difficulty: QuestionDifficulty.INTERMEDIAIRE,
		explanation:
			'La forme correcte est "Ils ont mangé tous les chocolats. Il ne reste plus rien.". Le mot "rien" est utilisé pour indiquer l\'absence totale de quelque chose. Ainsi, la réponse correcte est "rien".',
	},
	{
		category: QuestionCategory.GRAMMAIRE,
		question:
			'Quelle est la fonction du complément souligné dans la phrase : "Elle a offert un cadeau magnifique <span style="text-decoration: underline">à sa sœur</span>."?',
		options: [
			"complément d'objet direct",
			"complément d'objet indirect",
			'complément circonstanciel',
			'complément de phrase',
		],
		correctAnswer: 2,
		difficulty: QuestionDifficulty.INTERMEDIAIRE,
		explanation:
			'Le complément souligné, "à sa sœur", est un complément d\'objet indirect. Il complète le verbe "offert" en indiquant à qui le cadeau a été offert. Ainsi, la réponse correcte est "complément d\'objet indirect".',
	},
	{
		category: QuestionCategory.CONJUGAISON,
		question:
			'Conjuguez le verbe "écrire" à la troisième personne du pluriel au futur simple.',
		options: [
			'ils écrivent',
			'ils écriront',
			'ils écrivaient',
			'ils ont écrit',
		],
		correctAnswer: 2,
		difficulty: QuestionDifficulty.INTERMEDIAIRE,
		explanation:
			'La conjugaison correcte du verbe "écrire" à la troisième personne du pluriel au futur simple est "ils écriront". Ainsi, la réponse correcte est "ils écriront".',
	},
	{
		category: QuestionCategory.ORTHOGRAPHE,
		question:
			'Quelle est la forme correcte du pluriel : "un chef-d\'œuvre"?',
		options: [
			"des chefs-d'œuvre",
			"des chefs-d'œuvres",
			"des chef-d'œuvres",
			"des chef-d'œuvre",
		],
		correctAnswer: 2,
		difficulty: QuestionDifficulty.INTERMEDIAIRE,
		explanation:
			'La forme correcte du pluriel de "un chef-d\'œuvre" est "des chefs-d\'œuvre". Ainsi, la réponse correcte est "des chefs-d\'œuvre".',
	},
	{
		category: QuestionCategory.CONJUGAISON,
		question:
			'Conjuguez le verbe "aller" à la première personne du pluriel au passé simple.',
		options: [
			'nous allons',
			'nous irons',
			'nous allâmes',
			'nous sommes allés',
		],
		correctAnswer: 3,
		difficulty: QuestionDifficulty.INTERMEDIAIRE,
		explanation:
			'La conjugaison correcte du verbe "aller" à la première personne du pluriel au passé simple est "nous allâmes". Ainsi, la réponse correcte est "nous allâmes".',
	},
	{
		category: QuestionCategory.GRAMMAIRE,
		question:
			'Quelle est la nature du mot souligné dans la phrase : "Elle est très <span style="text-decoration: underline">intelligente</span>."?',
		options: ['adjectif', 'verbe', 'nom', 'adverbe'],
		correctAnswer: 1,
		difficulty: QuestionDifficulty.INTERMEDIAIRE,
		explanation:
			'Le mot souligné, "intelligente", est un adjectif. Il qualifie le sujet "Elle" en exprimant une caractéristique. Ainsi, la réponse correcte est "adjectif".',
	},
	{
		category: QuestionCategory.CONJUGAISON,
		question:
			'Conjuguez le verbe "choisir" à la deuxième personne du singulier au conditionnel présent.',
		options: [
			'tu choisis',
			'tu choisissais',
			'tu choisirais',
			'tu as choisi',
		],
		correctAnswer: 3,
		difficulty: QuestionDifficulty.INTERMEDIAIRE,
		explanation:
			'La conjugaison correcte du verbe "choisir" à la deuxième personne du singulier au conditionnel présent est "tu choisirais". Ainsi, la réponse correcte est "tu choisirais".',
	},
	{
		category: QuestionCategory.ORTHOGRAPHE,
		question: 'Quel est le pluriel du mot "animal"?',
		options: ['animaux', 'animas', 'animauxes', 'animal'],
		correctAnswer: 1,
		difficulty: QuestionDifficulty.INTERMEDIAIRE,
		explanation:
			'Le pluriel du mot "animal" est "animaux". Il s\'agit de la forme correcte pour indiquer plus d\'un animal. Ainsi, la réponse correcte est "animaux".',
	},
	{
		category: QuestionCategory.GRAMMAIRE,
		question:
			'Quelle est la fonction du complément souligné dans la phrase : "Il a réussi <span style="text-decoration: underline">malgré les difficultés</span>."?',
		options: [
			"complément d'objet direct",
			"complément d'objet indirect",
			'complément circonstanciel',
			'complément de phrase',
		],
		correctAnswer: 3,
		difficulty: QuestionDifficulty.INTERMEDIAIRE,
		explanation:
			'Le complément souligné, "malgré les difficultés", est un complément circonstanciel. Il indique les circonstances dans lesquelles l\'action a eu lieu. Ainsi, la réponse correcte est "complément circonstanciel".',
	},
	{
		category: QuestionCategory.CONJUGAISON,
		question:
			'Conjuguez le verbe "vouloir" à la deuxième personne du pluriel au subjonctif présent.',
		options: [
			'vous voulez',
			'vous veuillez',
			'vous vouliez',
			'vous voudrez',
		],
		correctAnswer: 3,
		difficulty: QuestionDifficulty.INTERMEDIAIRE,
		explanation:
			'La conjugaison correcte du verbe "vouloir" à la deuxième personne du pluriel au subjonctif présent est "vous vouliez". Ainsi, la réponse correcte est "vous vouliez".',
	},
	{
		category: QuestionCategory.GRAMMAIRE,
		question:
			'Quelle est la nature du mot souligné dans la phrase : "La fête était <span style="text-decoration: underline">joyeuse</span>."?',
		options: ['adjectif', 'verbe', 'nom', 'adverbe'],
		correctAnswer: 1,
		difficulty: QuestionDifficulty.INTERMEDIAIRE,
		explanation:
			'Le mot souligné, "joyeuse", est un adjectif. Il qualifie le nom "fête" en exprimant une caractéristique. Ainsi, la réponse correcte est "adjectif".',
	},
	{
		category: QuestionCategory.CONJUGAISON,
		question:
			'Conjuguez le verbe "finir" à la première personne du pluriel au passé composé.',
		options: [
			'nous finissons',
			'nous finirons',
			'nous avons fini',
			'nous finissions',
		],
		correctAnswer: 3,
		difficulty: QuestionDifficulty.INTERMEDIAIRE,
		explanation:
			'La conjugaison correcte du verbe "finir" à la première personne du pluriel au passé composé est "nous avons fini". Ainsi, la réponse correcte est "nous avons fini".',
	},
	{
		category: QuestionCategory.ORTHOGRAPHE,
		question:
			'Quelle est la forme correcte : "J\'ai vu beaucoup d\'oiseaux. Certains étaient _________."',
		options: ['rouge', 'rouges', 'rougeâts', 'rouger'],
		correctAnswer: 2,
		difficulty: QuestionDifficulty.INTERMEDIAIRE,
		explanation:
			'La forme correcte est "J\'ai vu beaucoup d\'oiseaux. Certains étaient rouges.". L\'adjectif "rouges" s\'accorde en genre et en nombre avec le nom "oiseaux". Ainsi, la réponse correcte est "rouges".',
	},
	{
		category: QuestionCategory.CONJUGAISON,
		question:
			'Conjuguez le verbe "recevoir" à la deuxième personne du singulier à l\'imparfait.',
		options: ['tu reçois', 'tu recevais', 'tu recevras', 'tu as reçu'],
		correctAnswer: 2,
		difficulty: QuestionDifficulty.INTERMEDIAIRE,
		explanation:
			'La conjugaison correcte du verbe "recevoir" à la deuxième personne du singulier à l\'imparfait est "tu recevais". Ainsi, la réponse correcte est "tu recevais".',
	},
	{
		category: QuestionCategory.ORTHOGRAPHE,
		question:
			'Quelle est la forme correcte du pluriel : "un chef-d\'orchestre"?',
		options: [
			"des chefs-d'orchestres",
			"des chefs-d'orchestre",
			"des chef-d'orchestres",
			"des chef-d'orchestre",
		],
		correctAnswer: 1,
		difficulty: QuestionDifficulty.INTERMEDIAIRE,
		explanation:
			'La forme correcte du pluriel de "un chef-d\'orchestre" est "des chefs-d\'orchestre". Ainsi, la réponse correcte est "des chefs-d\'orchestre".',
	},
	{
		category: QuestionCategory.CONJUGAISON,
		question:
			'Conjuguez le verbe "pouvoir" à la première personne du pluriel au futur simple.',
		options: [
			'nous pouvons',
			'nous pourrions',
			'nous pourrons',
			'nous avons pu',
		],
		correctAnswer: 3,
		difficulty: QuestionDifficulty.INTERMEDIAIRE,
		explanation:
			'La conjugaison correcte du verbe "pouvoir" à la première personne du pluriel au futur simple est "nous pourrons". Ainsi, la réponse correcte est "nous pourrons".',
	},
	{
		category: QuestionCategory.GRAMMAIRE,
		question:
			'Quelle est la fonction du complément souligné dans la phrase : "Il a donné <span style="text-decoration: underline">une réponse brillante</span>."?',
		options: [
			"complément d'objet direct",
			"complément d'objet indirect",
			'complément circonstanciel',
			'complément de phrase',
		],
		correctAnswer: 1,
		difficulty: QuestionDifficulty.INTERMEDIAIRE,
		explanation:
			'Le complément souligné, "une réponse brillante", est un complément d\'objet direct. Il complète le verbe "a donné" en indiquant quoi a été donné. Ainsi, la réponse correcte est "complément d\'objet direct".',
	},
	{
		category: QuestionCategory.CONJUGAISON,
		question:
			'Conjuguez le verbe "aller" à la deuxième personne du pluriel au passé simple.',
		options: [
			'vous alliez',
			'vous irez',
			'vous allâtes',
			'vous êtes allés',
		],
		correctAnswer: 3,
		difficulty: QuestionDifficulty.INTERMEDIAIRE,
		explanation:
			'La conjugaison correcte du verbe "aller" à la deuxième personne du pluriel au passé simple est "vous allâtes". Ainsi, la réponse correcte est "vous allâtes".',
	},
	{
		category: QuestionCategory.ORTHOGRAPHE,
		question: 'Quel est le pluriel du mot "oiseau"?',
		options: ['oiseaux', 'oiseaus', 'oiseauxes', 'oisseau'],
		correctAnswer: 1,
		difficulty: QuestionDifficulty.INTERMEDIAIRE,
		explanation:
			'Le pluriel du mot "oiseau" est "oiseaux". Il s\'agit de la forme correcte pour indiquer plus d\'un oiseau. Ainsi, la réponse correcte est "oiseaux".',
	},
	{
		category: QuestionCategory.GRAMMAIRE,
		question:
			'Quelle est la nature du mot souligné dans la phrase : "Il est <span style="text-decoration: underline">extrêmement</span> rapide."?',
		options: ['adjectif', 'verbe', 'nom', 'adverbe'],
		correctAnswer: 4,
		difficulty: QuestionDifficulty.INTERMEDIAIRE,
		explanation:
			'Le mot souligné, "extrêmement", est un adverbe. Il modifie l\'adjectif "rapide" en exprimant le degré de la rapidité. Ainsi, la réponse correcte est "adverbe".',
	},
	{
		question:
			'Quelle est la nature du mot souligné dans la phrase : "Le soleil brille <span style="text-decoration: underline">intensément</span>."?',
		options: ['adjectif', 'verbe', 'nom', 'adverbe'],
		correctAnswer: 4,
		difficulty: QuestionDifficulty.INTERMEDIAIRE,
		category: QuestionCategory.GRAMMAIRE,
		explanation:
			'Le mot souligné, "intensément", est un adverbe. Il modifie le verbe "brille" en indiquant comment le soleil brille. Ainsi, la réponse correcte est "adverbe".',
	},
	{
		question:
			'Conjuguez le verbe "partir" à la deuxième personne du singulier au passé composé.',
		options: ['tu es parti', 'tu partais', 'tu as parti', 'tu partiras'],
		correctAnswer: 1,
		difficulty: QuestionDifficulty.INTERMEDIAIRE,
		category: QuestionCategory.CONJUGAISON,
		explanation:
			'La conjugaison correcte du verbe "partir" à la deuxième personne du singulier au passé composé est "tu es parti". Cette forme utilise l\'auxiliaire "être" suivi du participe passé du verbe "partir". Ainsi, la réponse correcte est "tu es parti".',
	},
	{
		question: 'Quel est le synonyme du mot "précipité"?',
		options: ['lent', 'clair', 'rapide', 'solide'],
		correctAnswer: 3,
		difficulty: QuestionDifficulty.INTERMEDIAIRE,
		category: QuestionCategory.ORTHOGRAPHE,
		explanation:
			'Le synonyme du mot "précipité" est "rapide", indiquant une action ou un mouvement qui se produit rapidement. Les autres options ne sont pas des synonymes de "précipité".',
	},
	{
		question:
			'Quelle est la forme correcte de la phrase : "Nous avons fini le travail."?',
		options: [
			'Nous finir le travail.',
			'Nous finissons le travail.',
			'Nous finirons le travail.',
			'Nous fini le travail.',
		],
		correctAnswer: 3,
		difficulty: QuestionDifficulty.INTERMEDIAIRE,
		category: QuestionCategory.CONJUGAISON,
		explanation:
			'La forme correcte de la phrase est "Nous avons fini le travail.". Cette construction utilise l\'auxiliaire "avoir" suivi du participe passé du verbe "finir". Ainsi, la réponse correcte est "Nous avons fini le travail.".',
	},
	{
		question: 'Quel est l\'antonyme du mot "modeste"?',
		options: ['simple', 'arrogant', 'humble', 'calme'],
		correctAnswer: 2,
		difficulty: QuestionDifficulty.INTERMEDIAIRE,
		category: QuestionCategory.ORTHOGRAPHE,
		explanation:
			'L\'antonyme du mot "modeste" est "arrogant", indiquant une attitude fière et orgueilleuse. Les autres options ne sont pas des antonymes de "modeste".',
	},
	{
		question:
			'Quel temps verbal est utilisé dans la phrase : "Elle chantera lors de la cérémonie."?',
		options: ['présent', 'passé composé', 'futur', 'imparfait'],
		correctAnswer: 3,
		difficulty: QuestionDifficulty.INTERMEDIAIRE,
		category: QuestionCategory.CONJUGAISON,
		explanation:
			'Le temps verbal utilisé dans la phrase est le "futur". Il indique une action qui se déroulera dans le futur. Ainsi, la réponse correcte est "futur".',
	},
	{
		question:
			'Quel est le pronom relatif dans la phrase : "La personne à qui j\'ai parlé est très gentille."?',
		options: ['La', 'à', 'personne', 'qui'],
		correctAnswer: 4,
		difficulty: QuestionDifficulty.INTERMEDIAIRE,
		category: QuestionCategory.GRAMMAIRE,
		explanation:
			'Le pronom relatif dans la phrase est "qui". Il relie la personne mentionnée à l\'action de parler. Dans ce contexte, "qui" remplace le complément d\'objet indirect et introduit la subordonnée relative. Ainsi, la réponse correcte est "qui".',
	},
	{
		question:
			'Quelle est la règle d\'accord du participe passé avec l\'auxiliaire "être" dans une phrase affirmative?',
		options: [
			"Il s'accorde avec le sujet en genre et en nombre.",
			'Il reste invariable.',
			"Il s'accorde seulement en genre avec le sujet.",
			"Il s'accorde seulement en nombre avec le sujet.",
		],
		correctAnswer: 1,
		difficulty: QuestionDifficulty.INTERMEDIAIRE,
		category: QuestionCategory.CONJUGAISON,
		explanation:
			"La règle d'accord du participe passé avec l'auxiliaire \"être\" dans une phrase affirmative est qu'il s'accorde avec le sujet en genre et en nombre. Ainsi, la réponse correcte est \"Il s'accorde avec le sujet en genre et en nombre.\".",
	},
	{
		question: 'Quel est le synonyme du mot "éloquent"?',
		options: ['muet', 'bruyant', 'parlant', 'silencieux'],
		correctAnswer: 3,
		difficulty: QuestionDifficulty.INTERMEDIAIRE,
		category: QuestionCategory.ORTHOGRAPHE,
		explanation:
			'Le synonyme du mot "éloquent" est "parlant", indiquant une capacité à s\'exprimer de manière persuasive. Les autres options ne sont pas des synonymes de "éloquent".',
	},
	{
		question:
			'Quelle est la nature du mot souligné dans la phrase : "Le film était vraiment <span style="text-decoration: underline">captivant</span>."?',
		options: ['adjectif', 'verbe', 'nom', 'adverbe'],
		correctAnswer: 1,
		difficulty: QuestionDifficulty.INTERMEDIAIRE,
		category: QuestionCategory.GRAMMAIRE,
		explanation:
			'Le mot souligné, "captivant", est un adjectif. Il qualifie le nom "film" en exprimant la qualité du film. Ainsi, la réponse correcte est "adjectif".',
	},
	{
		question:
			"Quel mot complète correctement la phrase : \"Il était tellement _____ qu'il n'a pas entendu l'alarme.\"?",
		options: ['fatigué', 'fatiguer', 'fatigue', 'fatigant'],
		correctAnswer: 1,
		difficulty: QuestionDifficulty.INTERMEDIAIRE,
		category: QuestionCategory.GRAMMAIRE,
		explanation:
			'Le mot qui complète correctement la phrase est "fatigué". La phrase correcte est : "Il était tellement fatigué qu\'il n\'a pas entendu l\'alarme.". Dans ce contexte, "fatigué" est utilisé comme un adjectif pour décrire l\'état de la personne. Ainsi, la réponse correcte est "fatigué".',
	},
	{
		question:
			'Conjuguez le verbe "aller" à la première personne du singulier au subjonctif présent.',
		options: ["j'aille", 'je allais', 'je vais', "j'allais"],
		correctAnswer: 1,
		difficulty: QuestionDifficulty.INTERMEDIAIRE,
		category: QuestionCategory.CONJUGAISON,
		explanation:
			'La conjugaison correcte du verbe "aller" à la première personne du singulier au subjonctif présent est "j\'aille". Cette forme exprime une action incertaine ou souhaitée. Ainsi, la réponse correcte est "j\'aille".',
	},
	{
		question: 'Quel est l\'antonyme du mot "joyeux"?',
		options: ['heureux', 'triste', 'agréable', 'radieux'],
		correctAnswer: 2,
		difficulty: QuestionDifficulty.INTERMEDIAIRE,
		category: QuestionCategory.ORTHOGRAPHE,
		explanation:
			'L\'antonyme du mot "joyeux" est "triste", indiquant une absence de joie. Les autres options ne sont pas des antonymes de "joyeux".',
	},
	{
		question:
			'Quelle est la forme correcte de la phrase : "Ils n\'ont pas encore terminé leurs devoirs."?',
		options: [
			"Ils n'ont pas encore terminés leurs devoirs.",
			"Ils n'ont pas encore terminé leur devoir.",
			"Ils n'ont pas encore terminé leurs devoir.",
			"Ils n'ont pas encore terminées leurs devoirs.",
		],
		correctAnswer: 2,
		difficulty: QuestionDifficulty.INTERMEDIAIRE,
		category: QuestionCategory.CONJUGAISON,
		explanation:
			'La forme correcte de la phrase est "Ils n\'ont pas encore terminé leur devoir.". Le possessif "leur" s\'accorde avec le singulier "devoir" dans ce contexte. Ainsi, la réponse correcte est "Ils n\'ont pas encore terminé leur devoir.".',
	},
	{
		question: 'Quel est le synonyme du mot "confiant"?',
		options: ['craintif', 'timide', 'sûr de soi', 'hésitant'],
		correctAnswer: 3,
		difficulty: QuestionDifficulty.INTERMEDIAIRE,
		category: QuestionCategory.ORTHOGRAPHE,
		explanation:
			'Le synonyme du mot "confiant" est "sûr de soi", indiquant une assurance ou une certitude en soi. Les autres options ne sont pas des synonymes de "confiant".',
	},
	{
		question:
			'Quel temps verbal est utilisé dans la phrase : "Il a mangé une pomme."?',
		options: ['présent', 'passé composé', 'futur', 'imparfait'],
		correctAnswer: 2,
		difficulty: QuestionDifficulty.INTERMEDIAIRE,
		category: QuestionCategory.CONJUGAISON,
		explanation:
			'Le temps verbal utilisé dans la phrase est le "passé composé". Il indique une action achevée dans le passé avec l\'emploi de l\'auxiliaire "avoir" suivi du participe passé du verbe "manger". Ainsi, la réponse correcte est "passé composé".',
	},
	{
		question:
			'Quel est le pronom relatif dans la phrase : "La personne avec laquelle j\'ai voyagé était très sympathique."?',
		options: ['La', 'avec', 'personne', 'laquelle'],
		correctAnswer: 4,
		difficulty: QuestionDifficulty.INTERMEDIAIRE,
		category: QuestionCategory.GRAMMAIRE,
		explanation:
			'Le pronom relatif dans la phrase est "laquelle". Il relie la personne mentionnée à l\'action de voyager. Dans ce contexte, "laquelle" remplace le complément d\'objet indirect et introduit la subordonnée relative. Ainsi, la réponse correcte est "laquelle".',
	},
	{
		question:
			'Quelle est la règle d\'accord du participe passé avec l\'auxiliaire "avoir" dans une phrase affirmative?',
		options: [
			"Il s'accorde avec le sujet en genre et en nombre.",
			'Il reste invariable.',
			"Il s'accorde seulement en genre avec le sujet.",
			"Il s'accorde seulement en nombre avec le sujet.",
		],
		correctAnswer: 4,
		difficulty: QuestionDifficulty.INTERMEDIAIRE,
		category: QuestionCategory.CONJUGAISON,
		explanation:
			'La règle d\'accord du participe passé avec l\'auxiliaire "avoir" dans une phrase affirmative est qu\'il reste invariable. Ainsi, la réponse correcte est "Il reste invariable".',
	},
	{
		question: 'Quel est le synonyme du mot "effrayant"?',
		options: ['efficace', 'terrifiant', 'calmant', 'étonnant'],
		correctAnswer: 2,
		difficulty: QuestionDifficulty.INTERMEDIAIRE,
		category: QuestionCategory.ORTHOGRAPHE,
		explanation:
			'Le synonyme du mot "effrayant" est "terrifiant", indiquant quelque chose qui provoque la peur ou l\'effroi. Les autres options ne sont pas des synonymes de "effrayant".',
	},
	{
		question:
			'Quelle est la nature du mot souligné dans la phrase : "La maison est très <span style="text-decoration: underline">grande</span>."?',
		options: ['adjectif', 'verbe', 'nom', 'adverbe'],
		correctAnswer: 1,
		difficulty: QuestionDifficulty.INTERMEDIAIRE,
		category: QuestionCategory.GRAMMAIRE,
		explanation:
			'Le mot souligné, "grande", est un adjectif. Il qualifie le nom "maison" en exprimant la taille de la maison. Ainsi, la réponse correcte est "adjectif".',
	},
	{
		question: 'Quel est le pluriel du mot "chat"?',
		options: ['chats', 'chatons', 'chateaux', 'chattes'],
		correctAnswer: 1,
		difficulty: QuestionDifficulty.DEBUTANT,
		category: QuestionCategory.ORTHOGRAPHE,
		explanation:
			'Le pluriel du mot "chat" est "chats". Il s\'agit d\'une simple transformation pour indiquer plus d\'un chat. Ainsi, la réponse correcte est "chats".',
	},
	{
		question:
			'Conjuguez le verbe "manger" à la première personne du singulier au présent de l\'indicatif.',
		options: ['je mangé', 'je mangeais', 'je mange', 'je mangerais'],
		correctAnswer: 3,
		difficulty: QuestionDifficulty.DEBUTANT,
		category: QuestionCategory.CONJUGAISON,
		explanation:
			'La conjugaison correcte du verbe "manger" à la première personne du singulier au présent de l\'indicatif est "je mange". Ainsi, la réponse correcte est "je mange".',
	},
	{
		question: 'Quel est l\'antonyme du mot "grand"?',
		options: ['petit', 'gros', 'long', 'large'],
		correctAnswer: 1,
		difficulty: QuestionDifficulty.DEBUTANT,
		category: QuestionCategory.ORTHOGRAPHE,
		explanation:
			'L\'antonyme du mot "grand" est "petit", indiquant une taille opposée à celle de grand. Ainsi, la réponse correcte est "petit".',
	},
	{
		question:
			'Quelle est la forme correcte de la phrase : "Tu _____ un livre."?',
		options: ['a', 'avoir', 'as', 'ai'],
		correctAnswer: 3,
		difficulty: QuestionDifficulty.DEBUTANT,
		category: QuestionCategory.CONJUGAISON,
		explanation:
			'La forme correcte de la phrase est "Tu as un livre.". Le verbe "avoir" est correctement conjugué à la deuxième personne du singulier. Ainsi, la réponse correcte est "as".',
	},
	{
		question: 'Quel est le synonyme du mot "content"?',
		options: ['triste', 'heureux', 'fatigué', 'en colère'],
		correctAnswer: 2,
		difficulty: QuestionDifficulty.DEBUTANT,
		category: QuestionCategory.ORTHOGRAPHE,
		explanation:
			'Le synonyme du mot "content" est "heureux", indiquant une émotion positive opposée à la tristesse. Ainsi, la réponse correcte est "heureux".',
	},
	{
		question:
			'Quel temps verbal est utilisé dans la phrase : "Elle chante une chanson."?',
		options: ['présent', 'passé composé', 'futur', 'imparfait'],
		correctAnswer: 1,
		difficulty: QuestionDifficulty.DEBUTANT,
		category: QuestionCategory.CONJUGAISON,
		explanation:
			'Le temps verbal utilisé dans la phrase est le "présent". Il indique une action qui se déroule au moment du discours. Ainsi, la réponse correcte est "présent".',
	},
	{
		question:
			'Quel est le pronom relatif dans la phrase : "La fille que j\'ai rencontrée est très gentille."?',
		options: ['La', 'que', "j'ai", 'est'],
		correctAnswer: 2,
		difficulty: QuestionDifficulty.DEBUTANT,
		category: QuestionCategory.GRAMMAIRE,
		explanation:
			'Le pronom relatif dans la phrase est "que". Il relie la fille mentionnée à l\'action de rencontrer. Dans ce contexte, "que" remplace le complément d\'objet direct et introduit la subordonnée relative. Ainsi, la réponse correcte est "que".',
	},
	{
		question:
			'Quelle est la règle d\'accord du participe passé avec l\'auxiliaire "avoir" dans une phrase affirmative?',
		options: [
			"Il s'accorde avec le sujet en genre et en nombre.",
			'Il reste invariable.',
			"Il s'accorde seulement en genre avec le sujet.",
			"Il s'accorde seulement en nombre avec le sujet.",
		],
		correctAnswer: 4,
		difficulty: QuestionDifficulty.DEBUTANT,
		category: QuestionCategory.CONJUGAISON,
		explanation:
			"La règle d'accord du participe passé avec l'auxiliaire \"avoir\" dans une phrase affirmative est qu'il s'accorde seulement en nombre avec le sujet. Ainsi, la réponse correcte est \"Il s'accorde seulement en nombre avec le sujet.\".",
	},
	{
		question: 'Quel est le synonyme du mot "rapide"?',
		options: ['lent', 'vite', 'long', 'court'],
		correctAnswer: 2,
		difficulty: QuestionDifficulty.DEBUTANT,
		category: QuestionCategory.ORTHOGRAPHE,
		explanation:
			'Le synonyme du mot "rapide" est "vite", indiquant une vitesse opposée à la lenteur. Ainsi, la réponse correcte est "vite".',
	},
	{
		question:
			'Quelle est la nature du mot souligné dans la phrase : "Le soleil <span style="text-decoration: underline">brille</span>."?',
		options: ['adjectif', 'verbe', 'nom', 'adverbe'],
		correctAnswer: 2,
		difficulty: QuestionDifficulty.DEBUTANT,
		category: QuestionCategory.GRAMMAIRE,
		explanation:
			'Le mot souligné, "brille", est un verbe. Il indique une action réalisée par le sujet "Le soleil". Ainsi, la réponse correcte est "verbe".',
	},
	{
		category: QuestionCategory.ORTHOGRAPHE,
		question: 'Quel est le pluriel du mot "école"?',
		options: ['écoles', 'écolons', 'écolier', 'écolière'],
		correctAnswer: 1,
		difficulty: QuestionDifficulty.DEBUTANT,
		explanation:
			'Le pluriel du mot "école" est "écoles". Il s\'agit d\'une simple transformation pour indiquer plus d\'une école. Ainsi, la réponse correcte est "écoles".',
	},
	{
		category: QuestionCategory.CONJUGAISON,
		question:
			'Conjuguez le verbe "regarder" à la première personne du singulier au présent de l\'indicatif.',
		options: [
			'je regarde',
			'je regardais',
			"j'ai regardé",
			'je regarderai',
		],
		correctAnswer: 1,
		difficulty: QuestionDifficulty.DEBUTANT,
		explanation:
			'La conjugaison correcte du verbe "regarder" à la première personne du singulier au présent de l\'indicatif est "je regarde". Ainsi, la réponse correcte est "je regarde".',
	},
	{
		category: QuestionCategory.ORTHOGRAPHE,
		question: 'Quel est l\'antonyme du mot "beau"?',
		options: ['joli', 'laid', 'grand', 'clair'],
		correctAnswer: 2,
		difficulty: QuestionDifficulty.DEBUTANT,
		explanation:
			'L\'antonyme du mot "beau" est "laid", indiquant une beauté opposée à la laideur. Ainsi, la réponse correcte est "laid".',
	},
	{
		category: QuestionCategory.CONJUGAISON,
		question:
			'Quelle est la forme correcte de la phrase : "Tu _____ un gâteau."?',
		options: ['avoir', 'a', 'es', 'as'],
		correctAnswer: 4,
		difficulty: QuestionDifficulty.DEBUTANT,
		explanation:
			'La forme correcte de la phrase est "Tu as un gâteau.". Le verbe "avoir" est correctement conjugué à la deuxième personne du singulier. Ainsi, la réponse correcte est "as".',
	},
	{
		category: QuestionCategory.ORTHOGRAPHE,
		question: 'Quel est le synonyme du mot "rapidement"?',
		options: ['lentement', 'vivement', 'légèrement', 'facilement'],
		correctAnswer: 2,
		difficulty: QuestionDifficulty.DEBUTANT,
		explanation:
			'Le synonyme du mot "rapidement" est "vivement", indiquant une action réalisée rapidement. Ainsi, la réponse correcte est "vivement".',
	},
	{
		category: QuestionCategory.CONJUGAISON,
		question:
			'Quel temps verbal est utilisé dans la phrase : "Il danse bien."?',
		options: ['présent', 'passé composé', 'futur', 'imparfait'],
		correctAnswer: 1,
		difficulty: QuestionDifficulty.DEBUTANT,
		explanation:
			'Le temps verbal utilisé dans la phrase est le "présent". Il indique une action qui se déroule au moment du discours. Ainsi, la réponse correcte est "présent".',
	},
	{
		category: QuestionCategory.GRAMMAIRE,
		question:
			'Quel est le pronom relatif dans la phrase : "Le livre que j\'ai lu était intéressant."?',
		options: ['La', 'que', "j'ai", 'lu'],
		correctAnswer: 2,
		difficulty: QuestionDifficulty.DEBUTANT,
		explanation:
			'Le pronom relatif dans la phrase est "que". Il relie le livre mentionné à l\'action de lire. Dans ce contexte, "que" remplace le complément d\'objet direct et introduit la subordonnée relative. Ainsi, la réponse correcte est "que".',
	},
	{
		category: QuestionCategory.GRAMMAIRE,
		question:
			'Quelle est la règle d\'accord du participe passé avec l\'auxiliaire "avoir" dans une phrase affirmative?',
		options: [
			"Il s'accorde avec le sujet en genre et en nombre.",
			'Il reste invariable.',
			"Il s'accorde seulement en genre avec le sujet.",
			"Il s'accorde seulement en nombre avec le sujet.",
		],
		correctAnswer: 4,
		difficulty: QuestionDifficulty.DEBUTANT,
		explanation:
			"La règle d'accord du participe passé avec l'auxiliaire \"avoir\" dans une phrase affirmative est qu'il s'accorde seulement en nombre avec le sujet. Ainsi, la réponse correcte est \"Il s'accorde seulement en nombre avec le sujet.\".",
	},
	{
		category: QuestionCategory.ORTHOGRAPHE,
		question: 'Quel est le synonyme du mot "facile"?',
		options: ['difficile', 'simple', 'complexe', 'accessible'],
		correctAnswer: 2,
		difficulty: QuestionDifficulty.DEBUTANT,
		explanation:
			'Le synonyme du mot "facile" est "simple", indiquant quelque chose qui n\'est pas difficile à accomplir. Ainsi, la réponse correcte est "simple".',
	},
	{
		category: QuestionCategory.GRAMMAIRE,
		question:
			'Quelle est la nature du mot souligné dans la phrase : "La pluie est <span style="text-decoration: underline">abondante</span>."?',
		options: ['adjectif', 'verbe', 'nom', 'adverbe'],
		correctAnswer: 3,
		difficulty: QuestionDifficulty.DEBUTANT,
		explanation:
			'Le mot souligné, "abondante", est un nom. Il qualifie la quantité de pluie en exprimant l\'abondance. Ainsi, la réponse correcte est "nom".',
	},
	{
		category: QuestionCategory.ORTHOGRAPHE,
		question: 'Quel est le pluriel du mot "cheval"?',
		options: ['chevals', 'chevaux', 'chevalons', 'chevalière'],
		correctAnswer: 2,
		difficulty: QuestionDifficulty.DEBUTANT,
		explanation:
			'Le pluriel du mot "cheval" est "chevaux". Il s\'agit de la forme correcte pour indiquer plus d\'un cheval. Ainsi, la réponse correcte est "chevaux".',
	},
	{
		category: QuestionCategory.CONJUGAISON,
		question:
			'Conjuguez le verbe "prendre" à la première personne du singulier au futur simple.',
		options: ['je prends', 'je prenais', 'je prendrai', "j'ai pris"],
		correctAnswer: 3,
		difficulty: QuestionDifficulty.DEBUTANT,
		explanation:
			'La conjugaison correcte du verbe "prendre" à la première personne du singulier au futur simple est "je prendrai". Ainsi, la réponse correcte est "je prendrai".',
	},
	{
		category: QuestionCategory.ORTHOGRAPHE,
		question: 'Quel est l\'antonyme du mot "froid"?',
		options: ['chaud', 'gelé', 'glacial', 'tiède'],
		correctAnswer: 1,
		difficulty: QuestionDifficulty.DEBUTANT,
		explanation:
			'L\'antonyme du mot "froid" est "chaud", indiquant une température opposée à celle du froid. Ainsi, la réponse correcte est "chaud".',
	},
	{
		category: QuestionCategory.CONJUGAISON,
		question:
			'Quelle est la forme correcte de la phrase : "Nous _____ une pizza."?',
		options: ['avoir', 'es', 'suis', 'avons'],
		correctAnswer: 4,
		difficulty: QuestionDifficulty.DEBUTANT,
		explanation:
			'La forme correcte de la phrase est "Nous avons une pizza.". Le verbe "avoir" est correctement conjugué à la première personne du pluriel. Ainsi, la réponse correcte est "avons".',
	},
	{
		category: QuestionCategory.ORTHOGRAPHE,
		question: 'Quel est le synonyme du mot "soudainement"?',
		options: ['lentement', 'rapidement', 'graduellement', 'brusquement'],
		correctAnswer: 4,
		difficulty: QuestionDifficulty.DEBUTANT,
		explanation:
			'Le synonyme du mot "soudainement" est "brusquement", indiquant une action réalisée de manière subite. Ainsi, la réponse correcte est "brusquement".',
	},
	{
		category: QuestionCategory.CONJUGAISON,
		question:
			'Quel temps verbal est utilisé dans la phrase : "Ils étudient pour leurs examens."?',
		options: ['présent', 'passé composé', 'futur', 'imparfait'],
		correctAnswer: 1,
		difficulty: QuestionDifficulty.DEBUTANT,
		explanation:
			'Le temps verbal utilisé dans la phrase est le "présent". Il indique une action qui se déroule au moment du discours. Ainsi, la réponse correcte est "présent".',
	},
	{
		category: QuestionCategory.GRAMMAIRE,
		question:
			'Quel est le pronom relatif dans la phrase : "Le film que nous avons vu était excellent."?',
		options: ['La', 'que', 'nous', 'vu'],
		correctAnswer: 2,
		difficulty: QuestionDifficulty.DEBUTANT,
		explanation:
			'Le pronom relatif dans la phrase est "que". Il relie le film mentionné à l\'action de voir. Dans ce contexte, "que" remplace le complément d\'objet direct et introduit la subordonnée relative. Ainsi, la réponse correcte est "que".',
	},
	{
		category: QuestionCategory.GRAMMAIRE,
		question:
			'Quelle est la règle d\'accord du participe passé avec l\'auxiliaire "être" dans une phrase affirmative?',
		options: [
			"Il s'accorde avec le sujet en genre et en nombre.",
			'Il reste invariable.',
			"Il s'accorde seulement en genre avec le sujet.",
			"Il s'accorde seulement en nombre avec le sujet.",
		],
		correctAnswer: 1,
		difficulty: QuestionDifficulty.DEBUTANT,
		explanation:
			"La règle d'accord du participe passé avec l'auxiliaire \"être\" dans une phrase affirmative est qu'il s'accorde avec le sujet en genre et en nombre. Ainsi, la réponse correcte est \"Il s'accorde avec le sujet en genre et en nombre.\".",
	},
	{
		category: QuestionCategory.ORTHOGRAPHE,
		question: 'Quel est le synonyme du mot "petit"?',
		options: ['grand', 'minuscule', 'immense', 'microscopique'],
		correctAnswer: 2,
		difficulty: QuestionDifficulty.DEBUTANT,
		explanation:
			'Le synonyme du mot "petit" est "minuscule", indiquant quelque chose de petite taille. Ainsi, la réponse correcte est "minuscule".',
	},
	{
		category: QuestionCategory.GRAMMAIRE,
		question:
			'Quelle est la nature du mot souligné dans la phrase : "Les oiseaux <span style="text-decoration: underline">chantent</span>."?',
		options: ['adjectif', 'verbe', 'nom', 'adverbe'],
		correctAnswer: 2,
		difficulty: QuestionDifficulty.DEBUTANT,
		explanation:
			'Le mot souligné, "chantent", est un verbe. Il indique une action réalisée par le sujet "Les oiseaux". Ainsi, la réponse correcte est "verbe".',
	},
	{
		category: QuestionCategory.ORTHOGRAPHE,
		question: 'Quel est le pluriel du mot "journal"?',
		options: ['journaux', 'journeaux', 'journeaux', 'journaux'],
		correctAnswer: 4,
		difficulty: QuestionDifficulty.DEBUTANT,
		explanation:
			'Le pluriel du mot "journal" est "journaux". C\'est la forme correcte pour indiquer plus d\'un journal. Ainsi, la réponse correcte est "journaux".',
	},
	{
		category: QuestionCategory.CONJUGAISON,
		question:
			'Conjuguez le verbe "venir" à la troisième personne du singulier au passé composé.',
		options: ['il venait', 'il vient', 'il viendra', 'il est venu'],
		correctAnswer: 4,
		difficulty: QuestionDifficulty.DEBUTANT,
		explanation:
			'La conjugaison correcte du verbe "venir" à la troisième personne du singulier au passé composé est "il est venu". Cette forme utilise l\'auxiliaire "être" suivi du participe passé du verbe "venir". Ainsi, la réponse correcte est "il est venu".',
	},
	{
		category: QuestionCategory.GRAMMAIRE,
		question: 'Quel est l\'antonyme du mot "lent"?',
		options: ['rapide', 'calme', 'long', 'court'],
		correctAnswer: 1,
		difficulty: QuestionDifficulty.DEBUTANT,
		explanation:
			'L\'antonyme du mot "lent" est "rapide", indiquant une vitesse opposée à la lenteur. Ainsi, la réponse correcte est "rapide".',
	},
	{
		category: QuestionCategory.CONJUGAISON,
		question:
			'Quelle est la forme correcte de la phrase : "Elle _____ un livre."?',
		options: ['a', 'avoir', 'es', 'suis'],
		correctAnswer: 1,
		difficulty: QuestionDifficulty.DEBUTANT,
		explanation:
			'La forme correcte de la phrase est "Elle a un livre.". Le verbe "avoir" est correctement conjugué à la troisième personne du singulier. Ainsi, la réponse correcte est "a".',
	},
	{
		category: QuestionCategory.ORTHOGRAPHE,
		question: 'Quel est le synonyme du mot "abondant"?',
		options: ['peu', 'beaucoup', 'suffisant', 'riche'],
		correctAnswer: 2,
		difficulty: QuestionDifficulty.DEBUTANT,
		explanation:
			'Le synonyme du mot "abondant" est "beaucoup", indiquant une grande quantité. Ainsi, la réponse correcte est "beaucoup".',
	},
	{
		category: QuestionCategory.CONJUGAISON,
		question:
			'Quel temps verbal est utilisé dans la phrase : "Tu chantes bien."?',
		options: ['présent', 'passé composé', 'futur', 'imparfait'],
		correctAnswer: 1,
		difficulty: QuestionDifficulty.DEBUTANT,
		explanation:
			'Le temps verbal utilisé dans la phrase est le "présent". Il indique une action qui se déroule au moment du discours. Ainsi, la réponse correcte est "présent".',
	},
	{
		category: QuestionCategory.GRAMMAIRE,
		question:
			'Quel est le pronom relatif dans la phrase : "La personne que j\'ai rencontrée était sympathique."?',
		options: ['La', 'que', "j'ai", 'sympathique'],
		correctAnswer: 2,
		difficulty: QuestionDifficulty.DEBUTANT,
		explanation:
			'Le pronom relatif dans la phrase est "que". Il relie la personne mentionnée à l\'action de rencontrer. Dans ce contexte, "que" remplace le complément d\'objet direct et introduit la subordonnée relative. Ainsi, la réponse correcte est "que".',
	},
	{
		category: QuestionCategory.GRAMMAIRE,
		question:
			'Quelle est la règle d\'accord du participe passé avec l\'auxiliaire "avoir" dans une phrase affirmative?',
		options: [
			"Il s'accorde avec le sujet en genre et en nombre.",
			'Il reste invariable.',
			"Il s'accorde seulement en genre avec le sujet.",
			"Il s'accorde seulement en nombre avec le sujet.",
		],
		correctAnswer: 4,
		difficulty: QuestionDifficulty.DEBUTANT,
		explanation:
			"La règle d'accord du participe passé avec l'auxiliaire \"avoir\" dans une phrase affirmative est qu'il s'accorde seulement en nombre avec le sujet. Ainsi, la réponse correcte est \"Il s'accorde seulement en nombre avec le sujet.\".",
	},
	{
		category: QuestionCategory.ORTHOGRAPHE,
		question: 'Quel est le synonyme du mot "intelligent"?',
		options: ['stupide', 'brillant', 'ingénieux', 'simple'],
		correctAnswer: 3,
		difficulty: QuestionDifficulty.DEBUTANT,
		explanation:
			'Le synonyme du mot "intelligent" est "ingénieux", indiquant une grande intelligence et créativité. Ainsi, la réponse correcte est "ingénieux".',
	},
	{
		category: QuestionCategory.GRAMMAIRE,
		question:
			'Quelle est la nature du mot souligné dans la phrase : "Les enfants <span style="text-decoration: underline">jouent</span>."?',
		options: ['adjectif', 'verbe', 'nom', 'adverbe'],
		correctAnswer: 2,
		difficulty: QuestionDifficulty.DEBUTANT,
		explanation:
			'Le mot souligné, "jouent", est un verbe. Il indique une action réalisée par le sujet "Les enfants". Ainsi, la réponse correcte est "verbe".',
	},
]
