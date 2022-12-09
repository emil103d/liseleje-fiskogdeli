<script>
	import { cart, count, modal } from '../stores/cart.js';
	import Button from './uielements/Button.svelte';
	import KoebContent from '/src/lib/popup/KoebContent.svelte';
	import Modal from '/src/lib/popup/Modal.svelte';

	console.log('HEJ MED DIG');
	let countValue;
	console.log(countValue);

	count.subscribe((value) => {
		countValue = value;
	});
</script>

<article class="p-4 w-full grid content h-[40vh]">
	<h3 class="text-darkblue font-bold pb-26">Opsummering</h3>

	<div>
		<p class="font-semibold">
			Bland selv tapas fad: {$cart.reduce((total, cartItem) => {
				const item = $cart.find((i) => i.type === cartItem.type);
				if (item.type === 'p') {
					return total + (item.price || 0) * cartItem.quantity * countValue;
				}

				return total;
			}, 0)};
		</p>
		<p class="font-semibold">
			Tilkøbsvarer: {$cart.reduce((total, cartItem) => {
				const item = $cart.find((i) => i.type === cartItem.type);
				if (item.type === 't') {
					return total + (item.price || 0) * cartItem.quantity;
				}
				return total;
			}, 0)};
		</p>
		<p class="font-semibold">
			Total: {$cart.reduce((total, cartItem) => {
				const item = $cart.find((i) => i.type === cartItem.type);
				return total + (item.price || 0) * cartItem.quantity * countValue;
			}, 0)};
		</p>
	</div>

	<div class=" border-shadowblue border-t-2 py-2 " />
	<div>
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

		<div>
			<Modal show={$modal}>
				<KoebContent />
			</Modal>
		</div>
	</div>
</article>

<style>
	.content {
		background-color: white;
		box-shadow: 7px 7px 0px 2px #e5f1f9;
	}
</style>
