<script>
	import { products, tilkoebs, cart } from '../stores/cart.js';

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

	const minusTing = (tilkoeb) => {
		for (let ting of $cart) {
			if (ting.id === tilkoeb.id) {
				tilkoeb.quantity -= 1;
				$cart = $cart;
				return;
			}
		}
		$cart = [...$cart, tilkoeb];
	};

	const plusTing = (tilkoeb) => {
		for (let ting of $cart) {
			if (ting.id === tilkoeb.id) {
				ting.quantity += 1;
				$cart = $cart;
				return;
			}
		}
		$cart = [...$cart, tilkoeb];
	};

	$: total = $cart.reduce((sum, item, ting) => sum + item.price * item.quantity, 0);
</script>

<section class="pt-6 bg-white h-full skygge p-4">
	<h3 class="text-darkblue font-bold">Mit tapasfad<b class="text-yellowdot">.</b></h3>
	<p>Til 2 personer</p>
	<p>Der er {$cart.length} retter</p>
	<div class="h-[2px] w-20" />

	<div class="border-lightblue border-t-2" />
	<h3>TapasRetter</h3>

	<div class="cart-list md:grid md:grid-rows-[auto_30px]">
		<div>
			{#each $cart as item}
				{#if item.quantity > 0 && item.type == 'p'}
					<div class="cart-item">
						<img width="50" src={item.image} alt={item.name} />
						<p>{item.title}</p>
						<div>
							<button on:click={() => minusItem(item)}>-</button>
							{item.quantity}
							<button on:click={() => plusItem(item)}>+</button>
						</div>
						<p>{item.price * item.quantity}</p>
					</div>
				{/if}
			{/each}
		</div>

		<div class="border-lightblue border-t-2" />
		<h3>Tilkøb</h3>
		<div>
			{#each $cart as ting}
				{#if ting.quantity > 0 && ting.type == 't'}
					<div class="cart-item">
						<img width="50" src={ting.image} alt={ting.name} />
						<p>{ting.title}</p>
						<div>
							<button on:click={() => minusTing(ting)}>-</button>
							{ting.quantity}
							<button on:click={() => plusTing(ting)}>+</button>
						</div>
						<p>{ting.price * ting.quantity}</p>
					</div>
				{/if}
			{/each}
		</div>

		<div class="total">
			<h4 class="font-bold">Total: {total}</h4>
		</div>
	</div>
</section>

<style>
	.cart-item {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
	}

	.total {
		text-align: right;
	}

	.skygge {
		box-shadow: 10px 10px #b9ddf6;
	}
</style>
