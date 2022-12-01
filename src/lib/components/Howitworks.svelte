<script>
	import Button from '../uielements/Button.svelte';
</script>

<section class="bg-darkblue py-20 px-10">
	<div class="lg:max-w-[1024px] lg:grid m-auto lg:align-middle gap-6">
		<div class="pb-6  md:text-left">
			<h2 class="text-white">Fra havet til bordet <b class="text-yellowdot">.</b></h2>
			<div class="h-[2px] w-20 bg-white mb-6" />
			<p class="text-lightblue">Fra mobil til frisk fisk på bordet</p>
		</div>

		<div class="grid justify-center text-center gap-6 md:flex md:justify-between">
			<div class="">
				<img src="howto_1.png" class="pb-4 h-48 w-auto md:h-64 md:w-full" alt="">
				<p class="text-lightblue">1. Vælg dine yndlingsvarer <b class="text-yellowdot">.</b></p>
			</div>

			<div class="">
				<img src="howto_2.png" class="pb-4 h-48 w-auto md:h-64 md:w-full" alt="">
				<p class="text-lightblue">2. Tilføj til kurv & betal <b class="text-yellowdot">.</b></p>
			</div>

			<div class="">
				<img src="howto_3.png" class="pb-4 h-48 w-auto md:h-64 md:w-full" alt="">
				<p class="text-lightblue">3. Afhent i butik <b class="text-yellowdot">.</b></p>
			</div>
		</div>

		<div class="grid justify-center pt-6 md:pt-12">
			<Button type="primary">Kom igang</Button>
		</div>
	</div>
</section>
