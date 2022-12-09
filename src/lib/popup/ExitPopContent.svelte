<script>
	import { getContext } from 'svelte';
	import { fly } from 'svelte/transition';

	import ExitPopUp from './ExitPopUp.svelte';

	const { open } = getContext('simple-modal');

	const showExitPopup = () => {
		open(ExitPopUp);
	};
</script>

<section>
	<button on:click={showExitPopup}>Mængdeguide</button>
</section>

<style>
	section {
		padding-top: 0.5em;
	}
</style>
