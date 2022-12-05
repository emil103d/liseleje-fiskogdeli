<script>
	/** @type {import('./$types').PageData} */
	import '/src/app.css';
	import { products, cart } from '/src/stores/cart.js';
	import { categories } from '/src/stores/cart.js';
	import Tapas from '/src/lib/tapas.svelte';
	import ButtonContainer from '/src/lib/ButtonContainer.svelte';
	import Cart from '../../../../lib/Cart.svelte';

	const addToCart = (product) => {
		console.log('addToCart tapasretter');
		for (let item of $cart) {
			// for hvert produkt i kurven
			if (item.id === product.id) {
				// sammenligner hvad der er i kurven med produkt.id
				product.quantity += 1; // så det eneste der ændre sig er qunatity
				return;
			}
		}
		$cart = [...$cart, product]; //for at gøre reaktivt skal sveltekit have en assignment, så man bruger spreadopreatoren (...) derefter bliver produktet tilføjet til kurven
	};

	let selected = 'alle';
	const filterSelection = (e) => (selected = e.target.dataset.name);
	console.log(filterSelection);
</script>

<main class="md:py-32 md:py-44 px-10 h-[100vh] place-content-center w-full grid">
	<div class="lg:max-w-[1024px] lg:m-auto place-items-center">
		<section class="">
			<h2 class="text-darkblue">Bland Selv Fisketapas <b class="text-yellowdot">.</b></h2>
			<div class="h-[2px] w-20 bg-darkblue mb-6" />

			<h3>Udvælg dine fiske tapasretter</h3>
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

		<section class="grid md:grid-cols-[auto_250px] gap-10 lg:gap-20">
			<div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-4">
				{#each $products as product}
					<!-- Viser alle produkter -->
					{#if selected === 'alle'}
						<div>
							<div class="content">
								<img src={product.image} alt={product.title} class="h-auto w-full aspect-square" />
								<div class="p-2">
									<div class="grid py-2">
										<h4 class="font-semibold">{product.title}</h4>
										<p>{product.price} kr.</p>
									</div>
									<div class="grid justify-center pb-2 pt-2">
										<button class="font-semibold" on:click={() => addToCart(product)}
											>Tilføj til kurven</button
										>
									</div>
								</div>
							</div>
						</div>
					{:else}
						<!-- Viser de filtreret produkter -->
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
		</section>
	</div>
</main>

<style>
	main {
		background-color: #f8fcfe;
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
