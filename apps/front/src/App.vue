<script setup lang="ts">
	import { storeToRefs } from 'pinia'
	import { useStore } from './store/store'
	import { useRoute } from 'vue-router'

	const store = useStore()
	const route = useRoute()

	const { countQuestionsAnswered, hasQuizzStarted } = storeToRefs(store)
</script>

<template>
	<v-app class="bg-blue-lighten-5">
		<div
			v-if="route.name === 'quizz' && hasQuizzStarted"
			class="progress-wrapper bg-white">
			<v-progress-linear
				color="blue-darken-2"
				height="8"
				striped
				:model-value="
					Math.round((countQuestionsAnswered * 100) / 40)
				" />
		</div>
		<v-container fluid>
			<router-view></router-view>
		</v-container>
	</v-app>
</template>

<style scoped lang="scss">
	.progress-wrapper {
		height: 8px;
		width: 100%;
		position: sticky;
		top: 0px;
		z-index: 2;

		.v-progress-linear {
			position: sticky !important;
			left: 0 !important;
			transform: none !important;
			z-index: 3;
		}
	}
</style>
