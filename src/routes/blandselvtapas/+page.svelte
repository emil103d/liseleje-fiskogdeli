<script>
	/** @type {import('./$types').PageData} */
	import '/src/app.css';
	import Button from '/src/lib/uielements/Button.svelte';
	import Numericbutton from '/src/lib/uielements/Numericinputs.svelte';
	import Maengdeguide from '/src/lib/components/Maengdeguide.svelte';
</script>

<main class="pt-[150px] pb-[150px] md:py-32 lg:py-44 md:h-[100vh] px-5 place-content-center w-full grid overflow-y-hidden ">
	<div class="grid lg:max-w-[1024px] lg:m-auto">
		<h2 class="font-bold text-darkblue">
			Bland selv fisketapas <b class="text-yellowdot"> . </b>
		</h2>
		<div class="h-[2px] w-20 bg-darkblue mb-6 mt-2" />

		<section class="md:grid grid-cols-2">
			<Maengdeguide class="" />

			<div class="pt-12 md:pt-0 grid justify-center">
				<div class="max-w-[15rem] md:m-auto grid gap-6">
					<h3 class="text-center">Hvor mange personer bliver I?</h3>
					<Numericbutton />
					<div class="m-auto">
						<Button type="primary" class="m-auto"
							><a href="/blandselvtapas/vaelgfisketapas">Næste</a></Button
						>
					</div>
				</div>
			</div>
		</section>
	</div>
</main>

<style>
	main {
		background-color: #f8fcfe;
	}
</style>
