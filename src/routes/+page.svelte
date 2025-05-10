<script lang="ts">
	import { enhance } from '$app/forms'

	let { data, form } = $props()

	let users = $derived(data.users)
</script>

<svelte:head>
	<title>Neon Database Example</title>
</svelte:head>

<h1>Neon Database Example</h1>

<section>
	<h2>Add User</h2>

	<form action="?/add" method="POST" use:enhance>
		<label for="name">Name</label>
		<input type="text" id="name" name="name" required />
		<p>
			<button>Add</button>
		</p>
	</form>
</section>

<section>
	<h2>List of Users</h2>

	{#if users.length === 0}
		<p>No users found.</p>
	{:else}
		<ul>
			{#each users as user (user.id)}
				<li>
					<form action="?/remove" method="POST" use:enhance>
						<input type="hidden" name="user_id" value={user.id} />
						{user.name}
						&nbsp;
						<button>Delete</button>
					</form>
				</li>
			{/each}
		</ul>
	{/if}
</section>

{#if form?.error}
	<p>{form.error}</p>
{/if}
