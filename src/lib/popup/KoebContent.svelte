<script>
	import { getContext } from 'svelte';
	import { fly } from 'svelte/transition';

	import Button from '../uielements/Button.svelte';
	import KoebPopUp from './KoebPopUp.svelte';

	const { open } = getContext('simple-modal');

	const showKoebPopUp = () => {
		console.log(showKoebPopUp);
		open(KoebPopUp);
	};
</script>

<section>
	<Button on:click={showKoebPopUp}>Tilføj tapas til kurven</Button>
</section>

<style>
	section {
		padding-top: 0.5em;
	}
</style>
