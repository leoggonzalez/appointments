<script lang="ts">
	let { children, gap = 0 } = $props();
</script>

<div class="stack" style={`--stack-gap: ${gap}px;`}>
	{@render children()}
</div>

<style lang="scss">
	.stack {
		display: flex;
		flex-direction: column;
		gap: var(--stack-gap);
	}
</style>
