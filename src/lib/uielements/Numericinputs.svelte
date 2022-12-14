<script>
	import { count } from '../../stores/cart.js';

	let increaseNum = () => {
		count.update((n) => n + 1);
	};
	let decreaseNum = () => {
		count.update((n) => n - 1);
	};

	let countValue;

	count.subscribe((value) => {
		countValue = value;
	});
</script>

<!-- the function will be called on click -->
<div class="flex justify-center	">
	<button class=" grid place-self-center place-content-center " on:click={() => decreaseNum(count)}> <p class="h-12 w-12 border-2 border-lightblue  rounded-full grid place-content-center stortekst font-normal"> - </p> </button>
	<label> <input type="number" class="stortekst grid h-full max-w-[4rem] place-self-center" value={countValue} min="0" max="10" /></label>
	<button class="grid place-self-center place-content-center" on:click={() => increaseNum(count)}> <p class="h-12	 w-12 border-2 border-lightblue  rounded-full grid place-content-center stortekst font-normal"> + </p> </button>
</div>

<style>
	label {
		font-family: 'Montserrat';
		font-style: normal;
		font-weight: 400;
		font-size: 45px;
		text-align: center;
		color: #1f425f;
	}

	input {
		text-align: center;
		background: #f8fcfe;
		width: 100%;
		-moz-appearance: textfield;
		-webkit-appearance: none;
	}

	button {
		background: #ffffff;
		border: 1px solid #e9f4fc;
		border-radius: 100%;
		font-family: 'Montserrat';
		font-style: normal;
		font-weight: 600;
		font-size: 25px;
		text-align: center;
		color: #1f425f;
		flex-shrink: 0;
	}

	/* hide arrows
	Chrome, Safari, Edge, Opera */
	input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button {
		-webkit-appearance: none !important;
		margin: 0 !important;
	}

	/* Firefox */
	input[type='number'] {
		-moz-appearance: textfield !important;
	}



</style>
