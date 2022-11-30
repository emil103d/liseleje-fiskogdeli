<script>
	/** @type {import('./$types').PageData} */
	import Button from '/src/lib/uielements/Button.svelte';
	import Numericbutton from '/src/lib/uielements/Numericinputs.svelte';
	import Maengdeguide from '/src/lib/components/Maengdeguide.svelte';
</script>

<main>
	<div>
		<h1>Vælg fiske tapas</h1>
		<div class="bg-background p-2" />
	</div>

	<section class="lg:max-w-[1024px] lg:grid m-auto lg:align-middle gap-6 grid grid-cols-3 gap-12">
		<Maengdeguide class="grid" />
		<div class="col-span-2">
			<h2>Hvor mange personer bliver I?</h2>
			<Numericbutton />
			<Button type="primary"><a href="/blandselvtapas/vaelgfisketapas">Vælg Tapasretter</a></Button>
		</div>
	</section>
</main>

<style>
	main {
		background-color: #f8fcfe;
	}

	h2 {
		font-family: 'Montserrat';
		font-style: normal;
		font-weight: 400;
		font-size: 25px;
		line-height: 24px;
	}
</style>
