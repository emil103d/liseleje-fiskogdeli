<script>
	/** @type {import('./$types').PageData} */
	import '/src/app.css';
	import { products, cart, count, modal } from '/src/stores/cart.js';
	import { categories } from '/src/stores/cart.js';
	import Tapas from '/src/lib/tapas.svelte';
	import ButtonContainer from '/src/lib/ButtonContainer.svelte';
	import Button from '../../../../lib/uielements/Button.svelte';
	import SecondaryButton from '../../../../lib/uielements/SecondaryButton.svelte';
	import Content from '/src/lib/popup/Content.svelte';
	import Modal from '/src/lib/popup/Modal.svelte';

	const addToCart = (product) => {
		console.log('addToCart tapasretter');
		for (let item of $cart) {
			// for hvert produkt i kurven
			if (item.id === product.id) {
				// sammenligner hvad der er i kurven med produkt.id
				product.quantity += 1; // så det eneste der ændre sig er qunatity
				$cart = $cart;
				return;
			}
		}
		$cart = [...$cart, product]; //for at gøre reaktivt skal sveltekit have en assignment, så man bruger spreadopreatoren (...) beholdeeksisterende produkter men tilføje nye.
	};

	let selected = 'alle';
	const filterSelection = (e) => (selected = e.target.dataset.name);
	console.log(filterSelection);

	let countValue;

	count.subscribe((value) => {
		countValue = value;
	});

	// const produktTotal = (product) => {
	// 	product.reduce((total, product) => total + product.price, 0) * countValue;
	// };

	// function toggleMenu() {
	// 	if (document.getElementById('mobile').style.height == '11vh') {
	// 		document.getElementById('mobile').style.height = '11vh';
	// 		document.getElementById('mobile').style.bottom = '26vh';
	// 		document.getElementById('roter').style.transform = 'rotate(180deg)';
	// 	} else {
	// 		document.getElementById('mobile').style.height = '24vh';
	// 		document.getElementById('mobile').style.bottom = '11vh';
	// 		document.getElementById('roter').style.transform = 'rotate(0deg)';
	// 	}
	// }

	//$: produktPris = $products.reduce((total, produkt) => produkt.price * countValue, 0);
</script>

<main>
	<div
		class="grid lg:max-w-[1024px] px-5 md:px-10 lg:px-0  pt-[150px] pb-[200px] md:pb-[150px] lg:py-0 lg:m-auto place-content-center w-full md:h-[100vh]"
	>
		<div>
			<h2 class="text-darkblue pb-2">Bland selv fisketapas <b class="text-yellowdot">.</b></h2>
			<div class="h-[2px] w-20 bg-darkblue mb-6" />
			<p>Vælg dine fiske tapasretter</p>
		</div>

		<div
			class="flex grid md:grid-cols gap-10 lg:gap-16 md:grid-cols-[minmax(auto,_1fr)_250px] py-4"
		>
			<div class="flex justify-between place-items-center">
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
				<div class="">
					<Modal show={$modal}>
						<Content />
					</Modal>
				</div>
			</div>
		</div>

		<div>
			<section
				class="grid md:grid-cols gap-10 lg:gap-16  md:grid-cols-[minmax(auto,_1fr)_250px] scrollstyling h-[40vh] "
			>
				<div
					class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-8 overflow-y-scroll shadow"
				>
					{#each $products as product}
						<!-- Viser alle produkter -->
						{#if selected === 'alle'}
							<div>
								<div class="content grid w-auto">
									<img
										src={product.image}
										alt={product.title}
										class="h-full w-full aspect-square"
									/>
									<div class="p-2">
										<div class="grid py-2">
											<h4 class="font-semibold text-darkblue">{product.title}</h4>
											<div class="flex justify-between pt-1">
												<p class="lilletekst pb-2">Til {countValue} personer</p>
												<p class="lilletekst font-semibold">
													{product.price * countValue} kr
												</p>
											</div>
										</div>
										<div class="grid justify-center pb-2 pt-2">
											<button class="font-semibold mellemtekst" on:click={() => addToCart(product)}
												>Tilføj til tapasfad</button
											>
										</div>
									</div>
								</div>
							</div>
						{:else}
							<!-- Viser de filtreret produkter -->

							<div class:show={selected === product.kategory} class="column content grid w-auto">
								<img src={product.image} alt={product.title} class="h-full aspect-square" />
								<div class="p-2">
									<div class="grid py-2">
										<h4 class="font-semibold text-darkblue">{product.title}</h4>
										<div class="flex justify-between pt-1">
											<p class="lilletekst pb-2">Til {countValue} personer</p>
											<p class="lilletekst font-semibold">{product.price * countValue} kr</p>
										</div>
									</div>
									<div class="grid justify-center pb-2 pt-2">
										<button class="font-semibold mellemtekst" on:click={() => addToCart(product)}
											>Tilføj til tapasfad</button
										>
									</div>
								</div>
							</div>
						{/if}
					{/each}
				</div>

				<div class="md:block md:bottom-0 md:relative w-full z-30" id="mobile">
					<div>
						<Tapas />
					</div>
				</div>

				<div class="flex justify-between place-items-center md:hidden">
					<SecondaryButton><a href="/blandselvtapas">Tilbage</a></SecondaryButton>
					<Button type="primary"><a href="/blandselvtapas/tilkoeb">Næste</a></Button>
				</div>
			</section>

			<div
				class="grid md:grid-cols-[minmax(auto,_1fr)_calc(250px+2.5rem)] lg:grid-cols-[minmax(auto,_1fr)_calc(250px+4rem)] md:pt-6"
			>
				<div class="hidden md:flex justify-between place-items-center">
					<SecondaryButton><a href="/blandselvtapas">Tilbage</a></SecondaryButton>
					<Button type="primary"><a href="/blandselvtapas/tilkoeb">Næste</a></Button>
				</div>
				<div />
			</div>
		</div>
	</div>
</main>

<style>
	main {
		background-color: #f8fcfe;
	}

	/* Create three equal columns */
	.column {
		display: none;
		justify-content: center;
	}

	/* Content */
	.content {
		background-color: white;
		box-shadow: 7px 7px 0px 2px #e5f1f9;
	}
	/* 
	img {
		min-height: 200px;
	} */

	/* The "show" class is added to the filtered elements */
	.show {
		display: grid;
	}

	/* Style the buttons */
	.btn {
		text-transform: capitalize;
		letter-spacing: 1px;
		border: none;
		outline: none;
		cursor: pointer;
		transition: 0.1s ease-in-out;
		font-weight: 400;
	}

	.shadow {
		box-shadow: 2px #e5f1f9;
	}

	/* Add a dark background color to the active button */
	.btn:active,
	.active {
		font-weight: 800;
	}
	.scrollstyling {
		scrollbar-color: #e5c72e #f8fcfe;
	}

	/* #mobile button svg {
		transform: rotate(-0deg);
	}

	#mobile button:focus svg {
		transform: rotate(180deg);
	} */

	.pil {
		position: absolute;
		bottom: 8vh;
		z-index: 200;
		left: 0;
	}

	@media only screen and (max-width: 768px) {
		/* For mobile phones: */
		/* #mobile {
			 position: fixed;
			left: 0;
			bottom: 10vh;
			transition: bottom 0.5s;
			width: 100vw; 
			 overflow-y: scroll;
			position: absolute;
			bottom: 2vh;
			left: 0vh;
			width: 97vw;
			height: 11vh;
			transition: 300ms; 
		} */
	}
</style>
