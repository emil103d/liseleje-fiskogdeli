<script>
	/** @type {import('./$types').PageData} */
	import '/src/app.css';
	import Button from '/src/lib/uielements/Button.svelte';
	import Numericbutton from '/src/lib/uielements/Numericinputs.svelte';
	import Maengdeguide from '/src/lib/components/Maengdeguide.svelte';
</script>

<main class="py-32 md:py-44 px-10">

	
	<div class="grid lg:max-w-[1024px] lg:m-auto">
		<h2 class="font-bold ">Bland selv fisketapas <b class="text-yellowdot"> . </b></h2>
		<div class="h-[2px] w-20 bg-darkblue mb-6 mt-2" />


		<section class="">

			<Maengdeguide class="grid" />

			<div class="">
				<h2>Hvor mange personer bliver I?</h2>
				<Numericbutton />
				<Button type="primary"><a href="/blandselvtapas/vaelgfisketapas">Vælg Tapasretter</a></Button>
			</div>
		</section>

	</div>
</main>

<style>
	main {
		background-color: #f8fcfe;
	}

</style>
