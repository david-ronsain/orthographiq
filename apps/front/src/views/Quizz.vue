<script setup lang="ts">
	import { onMounted, watch } from 'vue'
	import { useStore } from '../store/store'
	import { storeToRefs } from 'pinia'
	import { useRouter } from 'vue-router'
	import QuizzPresentation from '../components/quizz/QuizzPrensentationCard.vue'
	import QuizzCard from '../components/quizz/QuizzCard.vue'

	const store = useStore()
	const router = useRouter()

	const { getCurrentQuestion, isQuizzFinished, hasQuizzStarted } =
		storeToRefs(store)
	watch(isQuizzFinished, () => {
		const sessionId = store.prepareResults()
		router.push({
			name: 'results',
			params: { sessionId },
		})
	})
	onMounted(() => store.loadQuestions())
</script>

<template>
	<div>
		<QuizzPresentation v-if="!hasQuizzStarted" />

		<QuizzCard v-else-if="!isQuizzFinished && getCurrentQuestion" />
	</div>
</template>
