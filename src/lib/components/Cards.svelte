<script>
	import Button from '/src/lib/uielements/Button.svelte';
	export let kategori;
	export let beskrivelse;
	export let image;
	export let alt;
	export let linktilcard;
</script>

<div class="flex justify-center">
	<div class="bg-white w-full skygge">
		<a href="#!">
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
				<div class="w-full">
					<Button type="primary"><a href={linktilcard}>Se Udvalg</a></Button>
				</div>
			</div>
		</a>
	</div>
</div>

<style>
	.skygge {
		box-shadow: 6px 6px #e5f1f9;
	}
	img {
		transition: all 0.2s ease-in-out;
	}
</style>
