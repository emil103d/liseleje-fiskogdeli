<script>
	let count = 1;
	let increaseNum = () => (count += 1);
	let decreaseNum = () => (count -= 1);
</script>

<!-- the function will be called on click -->
<div class="flex items-center">
	<button on:click={() => decreaseNum(count)}>-</button>
	<label> <input type="number" bind:value={count} min="0" max="10" /></label>
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
	}

	button {
		width: 5rem;
		height: 5rem;
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
	}
</style>
