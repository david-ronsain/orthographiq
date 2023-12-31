<script setup lang="ts">
	import { mdiPlay } from '@mdi/js'
	import { useStore } from '../../store/store'

	const store = useStore()
</script>

<template>
	<v-row>
		<v-col
			cols="12"
			class="pa-1 pa-lg-3">
			<div class="quizz presentation d-flex align-center justify-center">
				<v-card
					color="grey-lighten-5"
					border
					rounded
					elevation="1">
					<v-card-title>
						Bienvenue dans notre test de français
					</v-card-title>

					<v-card-text class="pb-0 text-body-1">
						<h2>
							Ce test a pour but d'évaluer votre niveau actuel et
							vos axes de progression
						</h2>
						<h2 class="mt-2">
							Dès que vous êtes prêt, appuyez sur le bouton
						</h2>
					</v-card-text>

					<v-card-actions>
						<v-btn
							variant="outlined"
							color="blue-darken-2"
							class="mx-auto"
							@click="store.startQuizz">
							<v-icon
								class="mr-2"
								:icon="mdiPlay"
								:size="16"
								color="blue-darken-2" />
							Commencer le test
						</v-btn>
					</v-card-actions>
				</v-card>
			</div>
		</v-col>
	</v-row>
</template>
