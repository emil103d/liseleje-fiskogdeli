<script>
	import { cart } from '../stores/cart.js';

	const addToCart = (product) => {
		for (let item of $cart) {
			if (item.id === product.id) {
				product.quantity += 1;
				$cart = $cart;
				return;
			}
		}
		$cart = [...$cart, product];
	};
</script>

<section>
	<p>There are {$cart.length} items in your cart</p>
</section>

<style>
</style>
