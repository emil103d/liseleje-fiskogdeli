<script>
	import { getContext } from 'svelte';
	import { fly } from 'svelte/transition';

	import PopUp from './Popup.svelte';

	const { open } = getContext('simple-modal');

	const showPopup = () => {
		open(PopUp);
	};
</script>

<section class="p-2">
	<button class="flex place-items-center gap-2 lilletekst" on:click={showPopup}>Mængdeguide <div>
		<div>
			<svg width="15" height="15" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M0.0899817 9.73762C1.19998 -4.00238 21.29 -2.84238 20.79 10.9476C20.27 17.5276 15.39 20.6976 10.5 20.6976C5.16998 20.6976 -0.170019 16.9376 0.0799814 9.73762H0.0899817ZM9.07153 16.4998C9.06528 16.9998 9.57153 17.4998 10.0715 17.4998C10.4757 17.4998 11.0615 17.2998 11.0715 16.4998C11.076 16.1396 10.8615 15.4998 10.0715 15.4998C9.28153 15.4998 9.07778 15.9998 9.07153 16.4998Z" fill="#1F435F"/>
				<path d="M7 6.70407C7.03807 6.28225 7.8653 5.63788 8.23368 5.40172C8.79497 5.04189 9.53112 4.93833 10.1913 5.03334C10.6743 5.10286 11.2548 5.48374 11.5506 5.86685C11.9622 6.40001 12.0417 6.92549 11.9827 7.60827C11.927 8.25346 11.6302 8.80439 11.1886 9.24923C10.8523 9.58804 10.5302 9.95387 10.376 10.4027C10.0922 11.2285 10.1913 12.1301 10.1913 13" stroke="#F8FCFE" stroke-width="2" stroke-linecap="round"/>
				</svg>
				
			</div> 
		</div>
	</button>
</section>

<style>
	section {
		background-color: white;
		box-shadow: 4px 4px 0px 2px #e5f1f9;
	}

	button {
		letter-spacing: 0.5px;
	}
</style>
