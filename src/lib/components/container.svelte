<script lang="ts">
	const { children } = $props();
</script>

<div class="container">
	<div class="content">
		{@render children()}
	</div>
</div>

<style lang="scss">
	.container {
		--container-width: 1099px;
		--spacing-s: 16px;
		display: grid;
		grid-template-columns:
			minmax(var(--spacing-s), 1fr)
			minmax(0, var(--container-width))
			minmax(var(--spacing-s), 1fr);
		width: 100%;
		max-width: 100%;

		.content {
			grid-column: 2/2;
		}
	}
</style>
