<script lang="ts">
	import './global.scss';
	import Stack from '$lib/components/base/stack.svelte';
	import Navbar from '../lib/components/navbar.svelte';
	const { children } = $props();
</script>

<Stack gap={24}>
	<Navbar />
	{@render children()}
</Stack>
