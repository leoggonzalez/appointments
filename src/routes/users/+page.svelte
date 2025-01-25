<script lang="ts">
	import Container from '../../lib/components/container.svelte';

	let { data } = $props();
</script>

<Container>
	<table border="1" width="100%">
		<thead>
			<tr>
				<th>Name</th>
				<th>Email</th>
				<th>Created</th>
			</tr>
		</thead>

		<tbody>
			{#each data.users as user}
				<tr>
					<td>{user.name}</td>
					<td>{user.email}</td>
					<td>{user.createdAt}</td>
				</tr>
			{/each}
		</tbody>
	</table>
</Container>
