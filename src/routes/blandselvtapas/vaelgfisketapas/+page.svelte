<script>
	/** @type {import('./$types').PageData} */
	import { onMount } from 'svelte';
	import { products, cart } from '/src/stores/cart.js';
	import Menu from '/src/lib/Menu.svelte';
	import Tapas from '/src/lib/tapas.svelte';

	let kategories = [];
	let selectedKat = ''; //  menu selection
	$: console.log(kategories);

	const getKategory = () => {
		for (let productObj of $products) {
			if (!kategories.includes(productObj.kategory)) {
				kategories = [...kategories, productObj.kategory];
			}
		}
		kategories = kategories.sort();
	};

	onMount(() => getKategory());

	// Query results
	let filteredProducts = [];

	// For Select Menu
	$: if (selectedKat) getOpholdByKat(); //Svelte reaktiv condition -> if selected varighed er sand kald funktion
	$: console.log(filteredProducts, selectedKat);

	const getOpholdByKat = () => {
		if (selectedKat === 'alle') {
			// Hvis der er blevet valgt se alle valgmuligheder knappen
			return (filteredProducts = []); // Er det ligmed et tomt array da den så vil kalde else sektion med alle opholdende
		}
		return (filteredProducts = $products.filter(
			(product) => product.kategory === selectedKat // Filter ud de ophold der matcher den valgte varighed
		));
	};

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

	<Menu {kategories} bind:selectedKat />

	<section>
		<div class="product_list">
			{#if filteredProducts.length > 0}
				{#each filteredProducts as product}
					<div>
						<h4>{product.title}</h4>
						<p>{product.price} kr.</p>
						<button on:click={() => addToCart(product)}>Tilføj til kurven</button>
					</div>
				{/each}
			{:else}
				{#each $products as product}
					<div>
						<h4>{product.title}</h4>
						<p>{product.price} kr.</p>
						<button on:click={() => addToCart(product)}>Tilføj til kurven</button>
					</div>
				{/each}
			{/if}
		</div>
		<Tapas />
	</section>
</main>

<style>
	main {
		background-color: #f8fcfe;
	}

	.product_list {
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
