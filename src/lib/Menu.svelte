<script>
	export let kategories;
	export let selectedKat;
	$: console.log(kategories);
</script>

<!-- svelte-ignore a11y-no-onchange -->
<section class="menu-cont">
	<select size="3" class="menu" name="menu" id="menu" bind:value={selectedKat}>
		<option value="alle">Alle Retter</option>
		{#each kategories as kategory}
			<option value={kategory}>{kategory}</option>
		{/each}
	</select>
</section>

<style>
	.menu-cont {
		width: 40%;
		display: flex;
		margin: 0 10px 0 0;
	}

	select {
		margin: 0;
		font-size: 1.18rem;
		border: 1px solid gray;
		border-radius: 5px;
	}

	.menu {
		width: 100%;
	}
</style>
