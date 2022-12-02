<script>
	import Button from '../uielements/Button.svelte';
</script>

<section class="bg-darkblue py-32 md:py-44 px-10">
	<div class="lg:max-w-[1024px] lg:grid m-auto lg:align-middle gap-6">
		<div class="md:text-left">
			<h2 class="text-white">Fra havet til bordet <b class="text-yellowdot">.</b></h2>
			<div class="h-[2px] w-20 bg-white mb-6 mt-2" />
			<!-- <p class="text-lightblue">Fra mobil til frisk fisk på bordet</p> -->
		</div>

		<div class="grid justify-center pb-8 text-center gap-12 md:flex md:justify-between">
			<div class="grid">
				<img src="howto_1.png" class="pb-4 h-40 md:h-52 w-auto place-self-center" alt="">
				<p class="text-lightblue font-semibold">1. Vælg dine yndlingsvarer</p>
			</div>

			<div class="grid">
				<img src="howto_2.png" class="pb-4 h-40 md:h-52 w-auto  place-self-center" alt="">
				<p class="text-lightblue font-semibold">2. Tilføj til kurv & betal </p>
			</div>

			<div class="grid">
				<img src="howto_3.png" class="pb-4 h-40 md:h-52 w-auto place-self-center" alt="">
				<p class="text-lightblue font-semibold">3. Afhent i butik </p>
			</div>
		</div>

		<div class="grid justify-center pt-6 md:pt-12">
			<Button type="primary">Kom igang</Button>
		</div>
	</div>
</section>
