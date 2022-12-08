<script>
	import { getContext } from 'svelte';
	import { fly } from 'svelte/transition';

	import Maengdeguide from '../lib/components/Maengdeguide.svelte';
	import CloseButton from '../lib/popup/Closebutton.svelte';

	const { open } = getContext('simple-modal');

	let opening = false;
	let opened = false;
	let closing = false;
	let closed = false;

	const showPopup = () => {
		open({ Maengdeguide });
	};
</script>

<section>
	<button on:click={showPopup}>Show a popup!</button>
</section>

<style>
	section {
		padding-top: 0.5em;
	}

	#state {
		position: absolute;
		top: 0;
		right: 0;
		opacity: 0.33;
		font-size: 0.8em;
	}
</style>
