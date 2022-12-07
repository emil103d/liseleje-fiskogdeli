<script>
	import { cart, count } from '../stores/cart';

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

<section class="pt-6 bg-white h-full skygge p-4 md:flex md:justify-between md:flex-col">
	<div>
		<h3 class="text-darkblue font-bold">Mit tapasfad<b class="text-yellowdot">.</b></h3>
		<p>Til {countValue} personer</p>

		<!-- <p>Der er {$cart.length} retter</p> -->
		<div class="h-[2px] w-20" />

		<div class="border-lightblue border-t-2" />
		<h3>TapasRetter</h3>

		<div class="cart-list md:grid md:grid-rows-[auto_30px]">
		
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
				{#each $cart as item}
					{#if item.quantity > 0 && item.type == 't'}
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
	</div>

	<div class="total">
		<h4 class="font-bold">Total: {total}</h4>
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
		box-shadow: 7px 7px 0px 2px #e5f1f9;
	}
</style>
