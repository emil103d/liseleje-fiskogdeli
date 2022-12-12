<script>
	/** @type {import('./$types').LayoutData} */
	import Tapas from '/src/lib/tapas.svelte';
	export let data;
</script>

<div>
	<slot />
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
