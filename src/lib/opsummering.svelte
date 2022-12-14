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

<article class="p-4 w-full content h-[40vh] flex flex-col justify-between gap-2">
	<div>
		<div class="pb-4">
			<h3 class="text-darkblue font-bold pb-4">Opsummering</h3>
			<div class="flex justify-between gap-2">
			<p class="mellemtekst"> Bland selv tapas fad:</p> 
				<p class="mellemtekst">  {$cart.reduce((total, cartItem) => {
					const item = $cart.find((i) => i.type === cartItem.type);
					if (item.type === 'p') {
						return total + (item.price || 0) * cartItem.quantity * countValue;
					}
					return total;
				}, 0)} kr.
				</p>
			</div>


			<div class="flex justify-between gap-2">
			<p class=" mellemtekst">
				Tilkøbsvarer:</p> 
				<p class="mellemtekst">
					{$cart.reduce((total, cartItem) => {
						const item = $cart.find((i) => i.type === cartItem.type);
						if (item.type === 't') {
							return total + (item.price || 0) * cartItem.quantity;
						}
						return total;
					}, 0)} kr.
				
				</p>
			</div>
				
				




			<p class="font-semibold mellemtekst pt-4 grid place-content-end">
				<!-- Total: {$cart.reduce((total, cartItem) => {
					const item = $cart.find((i) => i.type === cartItem.type);
					return total + (item.price || 0) * cartItem.quantity * countValue;
				}, 0)}; -->

				Total: {$cart.reduce((total, cartItem) => {
					let item = $cart.find((i) => i.type === cartItem.type);
					if (item.type === 'p') {
						return total + (item.price || 0) * cartItem.quantity * countValue;
					} else if (item.type === 't') {
						return total + (item.price || 0) * cartItem.quantity;
					}
				}, 0)} kr.
			</p>
		</div>
		<div class=" border-shadowblue border-t-2" />

	</div>

	
	<div>
		<div class="">
			<div>
				<form>
					<label class="block mb-2 text-sm font-medium" for="title">Tilføj Rabatkode:</label>
					<div class="flex gap-2 pb-5">
						<input
							class=" border border-shadowblue focus:border-yellowdot block w-full"
							placeholder="fx. Gladefisk22"
							type="text"
							id="title"
							name="title"
						/>
						<input class="font-medium" type="submit" value="" />
					</div>
				</form>
			</div>

			<div>
				<Modal show={$modal}>
					<KoebContent />
				</Modal>
			</div>
		</div>
	</div>
</article>

<style>
	.content {
		background-color: white;
		box-shadow: 7px 7px 0px 2px #e5f1f9;
	}
</style>
