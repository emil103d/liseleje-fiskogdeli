<script>
	import { getContext } from 'svelte';
	import { fly } from 'svelte/transition';

	import PopUp from './Popup.svelte';

	const { open } = getContext('simple-modal');

	const showPopup = () => {
		open(PopUp);
	};
</script>

<section>
	<button on:click={showPopup}>Mængdeguide +</button>
</section>

<style>
	section {
		padding-top: 0.5em;
	}
</style>
