<script>
	/** @type {import('./$types').LayoutData} */
	import Tapas from '/src/lib/tapas.svelte';
	export let data;
</script>

<div class=" grid h-auto w-full lg:flex lg:max-w-[1024px] lg:m-auto">
	<div>
		<slot  />
	</div>

	<div>
		<!-- <Tapas /> -->
	</div>
</div>

<style>

/* @media only screen and (max-width: 768px) {
	.tapas {
		position: fixed;
		width: 100%;
		bottom: 40px;
	}
}
	
	 */
	
	
</style>