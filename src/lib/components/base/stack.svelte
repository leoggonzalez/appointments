<script lang="ts">
	let { children, gap = 0, component = 'div' } = $props();
</script>

<svelte:element this={component} class="stack" style={`--stack-gap: ${gap}px;`}>
	{@render children()}
</svelte:element>

<style lang="scss">
	.stack {
		display: flex;
		flex-direction: column;
		gap: var(--stack-gap);
	}
</style>
