<script lang="ts">
	import Stack from '$lib/components/base/stack.svelte';
	import Container from '../lib/components/container.svelte';

	let appointments = [
		{
			id: 1,
			name: 'John Doe',
			date: '2021-10-01',
			time: '10:00'
		},
		{
			id: 2,
			name: 'Jane Doe',
			date: '2021-10-02',
			time: '11:00'
		}
	];
</script>

<Container>
	<Stack gap={32}>
		<h1>Appointments</h1>

		<Stack gap={24}>
			<a href="/appointments/new">New Appointment</a>
			<table border="1" width="100%">
				<thead>
					<tr>
						<th>Name</th>
						<th>Date</th>
						<th>Time</th>
					</tr>
				</thead>
				<tbody>
					{#each appointments as appointment}
						<tr>
							<td>{appointment.name}</td>
							<td>{appointment.date}</td>
							<td>{appointment.time}</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</Stack>
	</Stack>
</Container>
