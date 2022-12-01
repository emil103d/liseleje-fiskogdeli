<script>
	import { cart } from '../stores/cart.js';

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

	$: total = $cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
</script>

<section>
	<h2 class="text-white">Mit tapasfad<b class="text-yellowdot">.</b></h2>
	<p>Til 2 personer</p>
	<p>Der er {$cart.length} retter</p>
	<div class="h-[2px] w-20 bg-white mb-6 mt-2" />

	<div class="border-lightblue border-t-2 " />
	<h3>TapasRetter</h3>
	<div class="cart-list">
		{#each $cart as item}
			{#if item.quantity > 0}
				<div class="cart-item">
					<img width="50" src={item.image} alt={item.name} />
					<div>
						<button on:click={() => minusItem(item)}>-</button>
						{item.quantity}
						<button on:click={() => plusItem(item)}>+</button>
					</div>
					<p>{item.price * item.quantity}</p>
				</div>
			{/if}
		{/each}
		<div class="total">
			<h4>Total: {total}</h4>
		</div>
	</div>
</section>

<style>
	.cart-item {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
	}

	.total {
		text-align: right;
	}
</style>
