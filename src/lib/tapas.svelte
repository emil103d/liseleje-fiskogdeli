<script>
	import { products, cart } from '../stores/cart.js';
	import Cart from './Cart.svelte';
	import CartLength from './CartLength.svelte';
	import Products from './Products.svelte';
	console.log($products);
</script>

<CartLength />
<Products />
<Cart />

<style>
</style>
