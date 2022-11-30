<script>
	/** @type {import('./$types').PageData} */
	import { onMount } from 'svelte';
	import { products, cart } from '/src/stores/cart.js';
	import Menu from '/src/lib/Menu.svelte';
	import Tapas from '/src/lib/tapas.svelte';

	let kategory = [];
	let selectedKat = ''; //  menu selection
	$: console.log(kategory);

	const getKategory = () => {
		for (let productObj of $products) {
			if (!kategory.includes(productObj.kat)) {
				kategory = [...kategory, productObj.kat];
			}
		}
		kategory = kategory.sort();
	};

	onMount(() => getKategory());

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

<main>
	<section>
		<h1 class="text-darkblue">Bland Selv Fisketapas <b class="text-yellowdot">.</b></h1>
		<div class="h-[2px] w-20 bg-darkblue mb-6" />

		<h2>Udvælg dine fiske tapasretter</h2>
	</section>

	<section>
		<Menu {kategory} bind:selectedKat />
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
		<Tapas />
	</section>
</main>

<style>
	main {
		background-color: #f8fcfe;
	}

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
</style>
