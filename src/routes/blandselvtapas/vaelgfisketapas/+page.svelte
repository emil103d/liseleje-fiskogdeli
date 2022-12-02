<script>
	/** @type {import('./$types').PageData} */
	import { products, cart } from '/src/stores/cart.js';
	import { categories } from '/src/stores/cart.js';
	import Tapas from '/src/lib/tapas.svelte';
	import ButtonContainer from '/src/lib/ButtonContainer.svelte';

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

	let selected = 'alle';
	const filterSelection = (e) => (selected = e.target.dataset.name);
	console.log(filterSelection);
</script>

<main class="lg:max-w-[1024px]">
	<section>
		<h1 class="text-darkblue">Bland Selv Fisketapas <b class="text-yellowdot">.</b></h1>
		<div class="h-[2px] w-20 bg-darkblue mb-6" />

		<h2>Udvælg dine fiske tapasretter</h2>
	</section>

	<ButtonContainer>
		{#each categories as category}
			<button
				class:active={selected === category}
				class="btn"
				data-name={category}
				on:click={filterSelection}
			>
				{category}
			</button>
		{/each}
	</ButtonContainer>

	<section class="grid grid-cols-2">
		<div class="product_list ">
			{#each $products as product}
				{#if selected === 'alle'}
					<div>
						<div class="content">
							<img src={product.image} alt={product.title} class="h-full w-full" />
							<h4>{product.title}</h4>
							<p>{product.price} kr.</p>
							<button on:click={() => addToCart(product)}>Tilføj til kurven</button>
						</div>
					</div>
				{:else}
					<div class:show={selected === product.kategory} class="column">
						<div class="content">
							<img src={product.image} alt={product.title} class="h-full w-full" />
							<h4>{product.title}</h4>
							<p>{product.price} kr.</p>
							<button on:click={() => addToCart(product)}>Tilføj til tapasfad</button>
						</div>
					</div>
				{/if}
			{/each}
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
		background-size: contain;
		background-position: center;
		background-repeat: no-repeat;
	}

	/* Create three equal columns */
	.column {
		display: none;
		justify-content: center;
		margin: 10px 0;
	}

	/* Content */
	.content {
		background-color: white;
		margin: 5px;
		padding: 10px;
		box-shadow: 1px 1px 5px black;
	}

	img {
		min-height: 200px;
	}

	/* The "show" class is added to the filtered elements */
	.show {
		display: flex;
	}

	/* Style the buttons */
	.btn {
		width: 150px;
		text-transform: uppercase;
		font-weight: 200;
		font-size: 1.2rem;
		letter-spacing: 1px;
		border: none;
		outline: none;
		margin: 5px;
		padding: 14px 16px 12px;
		background-color: white;
		border: 1px solid black;
		cursor: pointer;
		transition: 0.1s ease-in-out;
	}

	/* Add a dark background color to the active button */
	.btn:active,
	.active {
		background-color: #000;
		color: white;
	}
</style>
