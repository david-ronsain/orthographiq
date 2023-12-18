<script setup lang="ts">
	defineProps({
		title: {
			type: String,
			required: true,
		},
		pctGoodAnswers: {
			type: Number,
			required: true,
		},
		color: {
			type: String,
			required: true,
		},
	})
</script>

<template>
	<div>
		<div class="title">&#8227; {{ title }}</div>
		<v-progress-linear
			class="text-body-2 text-amber-darken-1"
			:model-value="pctGoodAnswers"
			rounded
			:color="color"
			height="15">
			<template v-slot:default="{ value }">
				<strong style="font-size: 12px">{{ Math.ceil(value) }}%</strong>
			</template>
		</v-progress-linear>
	</div>
</template>

<style scoped lang="scss">
	.title {
		text-transform: capitalize;
	}
</style>
