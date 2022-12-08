<script>
	/** @type {import('./$types').LayoutData} */
	export let data;
	import Processbar from '../../lib/components/Processbar.svelte';
	import Header from '/src/lib/components/Header.svelte';
	let current = '1';

	function handleClick(string) {
		alert(string);
	}
</script>

<Header />
<slot />
<Processbar />