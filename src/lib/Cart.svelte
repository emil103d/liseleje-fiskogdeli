<script>
	import { cart, count } from '../stores/cart';
	import { fly, fade } from 'svelte/transition';

	console.log(count);

	const minusItem = (product) => {
		for (let item of $cart) {
			if (item.id === product.id) {
				product.quantity -= 1;
				$cart = $cart;
				return;
			}
		}
		$cart = [...$cart, product];
	};

	const plusItem = (product) => {
		for (let item of $cart) {
			if (item.id === product.id) {
				item.quantity += 1;
				$cart = $cart;
				return;
			}
		}
		$cart = [...$cart, product];
	};

	// console.log(subtotal);

	console.log($cart);

	let countValue;

	count.subscribe((value) => {
		countValue = value;
	});

	$: total = $cart.reduce((total, item) => total + item.price * item.quantity, 0); // $= “re-run this code whenever any of the referenced values change”.

	// $: total = $cart.reduce((total, item) => total + item.price * item.quantity, 0) * countValue;
</script>

<section class=" pt-6 bg-white h-full skygge p-4 md:flex md:justify-between md:flex-col">
	<div>
		<div class="pb-2 flex justify-between align-bottom">

			<div class="">
				<h3 class="text-darkblue font-bold">Mit tapasfad<b class="text-yellowdot">.</b></h3>
				<p>Til {countValue} personer</p>
			</div>
			<div class="total grid place-self-end md:hidden">
				<h4 class="font-bold">Total: {total} DKK</h4>
			</div>
		</div>

		

		<!-- <p>Der er {$cart.length} retter</p> -->
		<div class="h-[2px] w-20" />

		<div class="border-lightblue border-t-2 py-2" />
		<p class="font-semibold pb-2">TapasRetter</p>

		<div class="cart-list md:grid md:grid-rows gap-2 justify-between">
			{#each $cart as item}
				{#if item.quantity > 0 && item.type == 'p'}
					<div class="cart-item gap-2 pt-2 md:pt-0">
						<img class="w-full h-full aspect-square" width="" src={item.image} alt={item.name} />
						<p class="grid items-center">{item.title}</p>
						<div class="flex gap-1 justify-end items-center">
							<button
								class="place-content-center grid justify-center items-center"
								on:click={() => minusItem(item)}>-</button
							>
							{item.quantity}
							<button
								class="place-content-center grid justify-center items-center"
								on:click={() => plusItem(item)}>+</button
							>
						</div>
						<div class="w-full h-full grid justify-center items-center">
							<p>{item.price * item.quantity}</p>
						</div>
					</div>
				{/if}
			{/each}
		</div>

		<div class="border-lightblue border-t-2" />
		<p class="font-semibold pb-2">Tilkøb</p>
		<div class="md:grid md:grid-rows gap-2 justify-between">
			{#each $cart as item}
				{#if item.quantity > 0 && item.type == 't'}
					<div class="cart-item gap-2 pt-2 md:pt-0">
						<img class="w-full h-full aspect-square" width="50" src={item.image} alt={item.name} />
						<p class="grid items-center">{item.title}</p>
						<div class="flex gap-1 justify-end items-center">
							<button
								class="place-content-center grid justify-center items-center"
								on:click={() => minusItem(item)}>-</button
							>
							{item.quantity}
							<button
								class="place-content-center grid justify-center items-center"
								on:click={() => plusItem(item)}>+</button
							>
						</div>
						<div class="w-full h-full grid justify-center items-center">
							<p>{item.price * item.quantity}</p>
						</div>
					</div>
				{/if}
			{/each}
		</div>
	</div>

	<div class="total hidden md:block">
		<h4 class="font-bold">Total: {total} DKK</h4>
	</div>
</section>

<style>
	.cart-item {
		display: grid;
		grid-template-columns: 40px 1fr 1fr 20px;
		justify-content: space-between;
	}

	.total {
		text-align: right;
	}

	.skygge {
		box-shadow: 7px 7px 0px 2px #e5f1f9;
	}
</style>
