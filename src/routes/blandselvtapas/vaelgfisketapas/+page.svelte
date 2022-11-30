<script>
	/** @type {import('./$types').PageData} */
	import Menu from '/src/lib/Menu.svelte';
	import Tapas from '/src/lib/tapas.svelte';
</script>

<main>
	<section>
		<h1 class="text-darkblue">Bland Selv Fisketapas <b class="text-yellowdot">.</b></h1>
		<div class="h-[2px] w-20 bg-darkblue mb-6" />

		<h2>Udvælg dine fiske tapasretter</h2>
	</section>

	<section>
		<Tapas />
	</section>
</main>

<style>
	main {
		background-color: #f8fcfe;
	}
</style>
