<script>
	import Container from './container.svelte';

	const routes = [
		{
			href: '/',
			label: 'Home'
		},
		{
			href: '/appointments',
			label: 'Appointments'
		},
		{
			href: '/users',
			label: 'Users'
		}
	];
</script>

<div class="navbar">
	<Container>
		<ul class="links">
			{#each routes as { href, label }}
				<li><a {href} class="link">{label}</a></li>
			{/each}
		</ul>
	</Container>
</div>

<style lang="scss">
	.navbar {
		background-color: #999;
		padding: 16px 0px;
	}
	.links {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
		gap: 16px;
	}
	.link {
		color: white;
		text-decoration: none;
	}
</style>
