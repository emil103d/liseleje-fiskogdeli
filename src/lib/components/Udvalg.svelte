<script>
	import Cards from './Cards.svelte';
</script>

<section class="py-32 md:py-44 px-10">
	<div class="lg:max-w-[1024px] lg:m-auto">
		<div class="text-textcolor">
			<h2>Fisk, Tapas & meget mere <b class="text-yellowdot">.</b></h2>
			<div class="h-[2px] w-20 bg-darkblue mb-6 mt-2" />
		</div>
		<div class="grid md:flex gap-12 md:justify-between">
			<Cards
				image="udvalg_fiskskaldyr.webp"
				alt="Lys fisk præsenteret på sort fad"
				kategori="Fisk & Skaldyr"
				beskrivelse="Alt godt fra havet - friskfanget i kattegat."
			/>
			<Cards
				image="udvalg_fisketapas.webp"
				alt="Lyst brød med røget laks og citronskive"
				kategori="Fisketapas"
				beskrivelse="Bland selv eller vælg et fra vores menu"
			/>
			<Cards
				image="udvalg_tilbehør.webp"
				alt="Frisktbagt surdejsbrød"
				kategori="Delikatesser "
				beskrivelse="Vin, tilbehør og meget mere"
			/>
		</div>
	</div>
</section>
