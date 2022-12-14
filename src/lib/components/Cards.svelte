<script>
	import Button from '/src/lib/uielements/Button.svelte';
	export let kategori;
	export let beskrivelse;
	export let image;
	export let alt;
	export let linktilcard;
</script>

<div class="w-full md:justify-center z-10">

	<a href="{linktilcard}" class="bg-white z-10">
		<div class="skygge">
			<div class="overflow-hidden ">
				<img
					class="w-full h-64 md:h-auto object-cover aspect-[4/5] hover:scale-110"
					src={image}
					{alt}
				/>
			</div>

			<div class="px-2 py-4">
				<h3 class="text-gray-900 text-l font-semibold mb-1">{kategori}</h3>
				<p class="text-gray-700 text-sm tekst">
					{beskrivelse}
				</p>
			</div>
	</div>
	</a>

<!-- 
	<div class="bg-white w-full skygge">
		<a href="{linktilcard}">
			<div class="overflow-hidden">
				<img
					class="w-full h-64 md:h-auto object-cover aspect-[4/5] hover:scale-110"
					src={image}
					{alt}
				/>
			</div>
			<div class="px-2 py-4">
				<h5 class="text-gray-900 text-l font-semibold mb-1">{kategori}</h5>
				<p class="text-gray-700 text-sm mb-4 tekst">
					{beskrivelse}
				</p>

		</div> -->
</div>

<style>
	.skygge {
		box-shadow: 6px 6px #e5f1f9;
	}
	img {
		transition: all 0.2s ease-in-out;
	}
</style>
