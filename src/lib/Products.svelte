<!-- <script>
	import { products, cart } from '../stores/cart.js';

	const addToCart = (product) => {
		for (let item of $cart) {
			if (item.id === product.id) {
				product.quantity += 1;
				$cart = $cart;
				return ;
			} else {
				$cart = [...$cart, product];
			}
		}
	};
</script>

<div class="product-list">
	{#each $products as product}
		<div>
			<div class="image" style="background-image: url({product.image})" />
			<h4>{product.title}</h4>
			<p>{product.price} kr.</p>
			<button on:click={() => addToCart(product)}>Tilføj til kurven</button>
		</div>
	{/each}
</div>

<style>
	.product-list {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
	}

	.image {
		height: 150px;
		width: 150px;
		background-size: contain;
		background-position: center;
		background-repeat: no-repeat;
	}
</style> -->
