<script>
	/** @type {import('./$types').PageData} */
	import Opsummering from '/src/lib/opsummering.svelte';
	import { cart } from '/src/stores/cart.js';
	import Tapas from '../../../../lib/tapas.svelte';
	import Button from '../../../../lib/uielements/Button.svelte';
	console.log($cart);
</script>

<main>
	<div
		class="grid lg:max-w-[1024px] lg:px-0 py-[150px] md:py-32 lg:py-44  lg:py-0 lg:m-auto place-content-center w-[100vw] md:h-[100vh] "
	>
		<div class="w-[100vw] px-5 md:px-10 lg:px-0 lg:max-w-[1024px]">
			<div class="w-full">
				<div class="pb-4">
					<h2 class="text-darkblue pb-2">Bland Selv Fisketapas <b class="text-yellowdot">.</b></h2>
					<div class="h-[2px] w-20 bg-darkblue mb-6" />
					<p>Gennemse dine valg</p>
				</div>
			</div>

			<div class="md:grid md:grid-cols-3 gap-6">
				<div class="col-start-1 col-span-2">
					<Tapas />
				</div>

				<div>
					<Opsummering />
				</div>
			</div>
			<div class="grid w-fit md:w-full pt-6 col-start-3">
				<Button><a href="/blandselvtapas/tilkoeb">Tilbage</a></Button>
			</div>
		</div>
	</div>
</main>

<style>
	main {
		background-color: #f8fcfe;
	}

	.content {
		background-color: white;
		box-shadow: 7px 7px 0px 2px #e5f1f9;
	}
</style>
