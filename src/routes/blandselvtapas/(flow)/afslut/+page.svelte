<script>
	/** @type {import('./$types').PageData} */
	import Opsummering from '/src/lib/Opsummering.svelte';
	import { cart } from '/src/stores/cart.js';
	console.log($cart);
</script>

<main>
	<div
		class="grid lg:max-w-[1024px] px-5 lg:px-0 py-[150px] lg:py-0 lg:m-auto place-content-center w-full md:h-[100vh] ">
		<div class="">
			<div class="">
				<h2 class="text-darkblue pb-2">Bland Selv Fisketapas <b class="text-yellowdot">.</b></h2>
				<div class="h-[2px] w-20 bg-darkblue mb-6" />
				<p>Gennemse dine valg</p>
			</div>

			<Opsummering />
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
