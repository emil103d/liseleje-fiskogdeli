<script>
	/** @type {import('./$types').PageData} */
	import '/src/app.css';
	import { products, cart, count } from '/src/stores/cart.js';
	import { categories } from '/src/stores/cart.js';
	import Tapas from '/src/lib/tapas.svelte';
	import ButtonContainer from '/src/lib/ButtonContainer.svelte';
	import Button from '../../../../lib/uielements/Button.svelte';
	import SecondaryButton from '../../../../lib/uielements/SecondaryButton.svelte';
	import GuidePopup from '/src/lib/popup/GuidePopUp.svelte';

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

	function toggleMenu() {
		if (document.getElementById('mobile').style.bottom == '100px') {
			document.getElementById('mobile').style.bottom = '0px';
			document.getElementById('roter').style.transform = 'rotate(180deg)';
		} else {
			document.getElementById('mobile').style.bottom = '100px';
			document.getElementById('roter').style.transform = 'rotate(0deg)';
		}
	}
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

		<div class="flex grid md:grid-cols gap-10 lg:gap-16 md:grid-cols-[minmax(auto,_1fr)_250px] py-4">
			
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
				<div class="hidden md:block">
					<GuidePopup />
				</div>
			</div>
		</div>

		

		<div>
			<section
				class="grid md:grid-cols gap-10 lg:gap-16 md:grid-cols-[minmax(auto,_1fr)_250px] scrollstyling md:h-[40vh]"
			>
				<div
					class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-8 overflow-y-scroll"
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
												{product.price} kr
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
											<p class="lilletekst font-semibold">{product.price} kr</p>
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

				<!-- <div id="mobile" class=" w-full md:relative md:bottom-0">
					
					<button class=" p-4 float-right md:hidden" on:click={toggleMenu}
						><svg
							id="roter"
							width="16"
							height="9"
							viewBox="0 0 16 9"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M7.69717 0.983701L14.7468 8.3227L15.3948 7.561L8.13185 0L7.69714 0.511046L7.2624 4.82916e-05L0 7.56165L0.647986 8.32331L7.69717 0.983701Z"
								fill="#1F425F"
							/>
						</svg>
					</button>

					<div class="hidden md:block">
						<Tapas />
					</div>
				</div> -->
				

				<div class="absolute md:block bottom-0 md:relative w-full z-30" id="mobile">
					<button class="pr-3 pt-3 float-right md:hidden" on:click={toggleMenu}
						><svg
							id="roter"
							width="16"
							height="9"
							viewBox="0 0 16 9"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M7.69717 0.983701L14.7468 8.3227L15.3948 7.561L8.13185 0L7.69714 0.511046L7.2624 4.82916e-05L0 7.56165L0.647986 8.32331L7.69717 0.983701Z"
								fill="#1F425F"
							/>
						</svg>
					</button>
					<div class="h-full">
					<Tapas />
					</div>
				</div>

				<div class="flex justify-between place-items-center md:hidden">
					<SecondaryButton><a href="/blandselvtapas">Tilbage</a></SecondaryButton>
					<Button type="primary"><a href="/blandselvtapas/tilkoeb">Næste</a></Button>
				</div>

			</section>
			

			<div class="grid md:grid-cols-[minmax(auto,_1fr)_calc(250px+2.5rem)] lg:grid-cols-[minmax(auto,_1fr)_calc(250px+5rem)] md:pt-6">
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

	@media only screen and (max-width: 768px) {
		/* For mobile phones: */
		#mobile {
			position: fixed;
			left: 0;
			transition: bottom 0.5s;
			overflow-y: hidden;
			max-height: 500px;
		}
	}
</style>
