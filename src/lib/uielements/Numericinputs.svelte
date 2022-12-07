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
<div class="flex justify-between">
	<button on:click={() => decreaseNum(count)}>-</button>
	<label> <input type="number" value={countValue} min="0" max="10" /></label>
	<button on:click={() => increaseNum(count)}>+</button>
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
		width: 4.5rem;
		height: 4.5rem;
		background: #ffffff;
		border: 1px solid #e9f4fc;
		border-radius: 100%;
		font-family: 'Montserrat';
		font-style: normal;
		font-weight: 600;
		font-size: 25px;
		text-align: center;
		color: #1f425f;
		padding: 1rem;
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
