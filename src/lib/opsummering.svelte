<script>
	import { cart } from '../stores/cart.js';
	import Button from './uielements/Button.svelte';

	$: totalp = $cart.reduce((sum, product) => sum + product.price * product.quantity, 0);
	$: total = $cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
</script>

<article class="p-6 w-full grid skygge">
	<h3 class="text-darkblue font-bold pb-2">Opsummering</h3>

	<div>
		<p>Bland selv tapas fad: {totalp}</p>
		<p>Tilkøbsvarer: {totalp}</p>
		<p>Total: {total}</p>
	</div>
	<div class=" border-shadowblue border-t-2 py-2 " />
	<div>
		<form>
			<label class="block mb-2 text-sm font-medium " for="title">Tilføj Rabatkode:</label>
			<input
				class=" border border-shadowblue focus:border-yellowdot block"
				placeholder="fx. Gladfiske20"
				type="text"
				id="title"
				name="title"
			/>
			<input type="submit" value="Submit" />
		</form>
	</div>
	<Button type="primary">Tilføj tapas til kurven</Button>
</article>

<style>
	.skygge {
		box-shadow: 6px 6px #b9ddf6;
	}
</style>
