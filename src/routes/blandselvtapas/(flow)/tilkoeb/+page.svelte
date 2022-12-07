<script>
	/** @type {import('./$types').PageData} */
	import '/src/app.css';
	import { tilkoebs, cart } from '/src/stores/cart.js';
	import { kategorier } from '/src/stores/cart.js';
	import Tapas from '/src/lib/tapas.svelte';
	import ButtonContainer from '/src/lib/ButtonContainer.svelte';
	import Button from '../../../../lib/uielements/Button.svelte';
	import SecondaryButton from '../../../../lib/uielements/SecondaryButton.svelte';

	const addToCart = (tilkoeb) => {
		console.log('addToCart tilkoeb');
		for (let ting of $cart) {
			if (ting.id === tilkoeb.id) {
				tilkoeb.quantity += 1;
				// $cart = $cart;
				return;
			}
		}
		$cart = [...$cart, tilkoeb];
	};

	let selected = 'alle';
	const filterSelection = (e) => (selected = e.target.dataset.tilkoeb);
	console.log(filterSelection);
</script>

<!-- <main class="md:py-32 md:py-44 px-10 h-[100vh] place-content-center w-full grid">
	<div class="lg:max-w-[1024px] lg:m-auto place-items-center">
		<section class="">
			<h2 class="text-darkblue">Bland Selv Fisketapas <b class="text-yellowdot">.</b></h2>
			<div class="h-[2px] w-20 bg-darkblue mb-6" />

			<h3>Udvælg dine tilkøbsretter</h3>
		</section>

		<ButtonContainer>
			{#each kategorier as kategori}
				<button
					class:active={selected === kategori}
					class="btn"
					data-tilkoeb={kategori}
					on:click={filterSelection}
				>
					{kategori}
				</button>
			{/each}
		</ButtonContainer>

		<section class="grid md:grid-cols-[auto_250px] gap-10 lg:gap-20">
			<div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-4">
				{#each $tilkoebs as tilkoeb}
					{#if selected === 'alle'}
						<div>
							<div class="content">
								<img src={tilkoeb.image} alt={tilkoeb.title} class="h-auto w-full aspect-square" />
								<div class="p-2">
									<div class="grid py-2">
										<h4 class="font-semibold">{tilkoeb.title}</h4>
										<p>{tilkoeb.price} kr.</p>
									</div>
									<div class="grid justify-center pb-2 pt-2">
										<button class="font-semibold" on:click={() => addToCart(tilkoeb)}
											>Tilføj til kurven</button
										>
									</div>
								</div>
							</div>
						</div>
					{:else}
						<div class:show={selected === tilkoeb.kategory} class="column">
							<div class="content">
								<img src={tilkoeb.image} alt={tilkoeb.title} class="h-full w-full" />
								<h4>{tilkoeb.title}</h4>
								<p>{tilkoeb.price} kr.</p>
								<button on:click={() => addToCart(tilkoeb)}>Tilføj til tapasfad</button>
							</div>
						</div>
					{/if}
				{/each}
			</div>
			<div>
				<Tapas />
			</div>
		</section>
	</div>
</main> -->


<main>

	<div class="grid lg:max-w-[1024px] px-5 lg:px-0 py-[150px] lg:py-0 lg:m-auto place-content-center w-full md:h-[100vh]">

		<div>
			<h2 class="text-darkblue pb-2">Bland Selv Fisketapas <b class="text-yellowdot">.</b></h2>
			<div class="h-[2px] w-20 bg-darkblue mb-6" />
			<p>Vælg dit tilbehør</p>
		</div>
		

		<div class="">
			<ButtonContainer>
				{#each kategorier as kategori}
					<button
						class:active={selected === kategori}
						class="btn pt-4 pr-6"
						data-tilkoeb={kategori}
						on:click={filterSelection}
					>
						{kategori}
					</button>
				{/each}
			</ButtonContainer>
		</div>

		<section class="grid md:grid-cols gap-10 lg:gap-16  md:grid-cols-[minmax(auto,_1fr)_250px] scrollstyling h-[40vh]">
			<div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-8 overflow-y-scroll">
				{#each $tilkoebs as tilkoeb}
					{#if selected === 'alle'}
						<div>
							<div class="content grid w-auto">
								<img src={tilkoeb.image} alt={tilkoeb.title} class="h-full w-full aspect-square"  />
								<div class="p-2">
									<div class="grid py-2">
										<h4 class="font-semibold">{tilkoeb.title}</h4>
										<p>Pr. styk</p>
										<p>{tilkoeb.price} kr.</p>
									</div>
									<div class="grid justify-center pb-2 pt-2">
										<button class="font-medium" on:click={() => addToCart(tilkoeb)}
											>Tilføj til tapasfad</button
										>
									</div>
								</div>
							</div>
						</div>
					{:else}
						<div class:show={selected === tilkoeb.kategory} class="column content grid w-auto">
								<img src={tilkoeb.image} alt={tilkoeb.title} class="h-full aspect-square" />
								<div class="p-2">
									<div class="grid py-2">
										<h4 class="font-semibold text-darkblue">{tilkoeb.title}</h4>
										<p>Pr. styk</p>
										<p>{tilkoeb.price} kr.</p>
									</div>
								<div class="grid justify-center pb-2 pt-2">
								<button class="font-medium" on:click={() => addToCart(tilkoeb)}>Tilføj til tapasfad</button>
								</div>
					
								
							</div>
						</div>
					{/if}
				{/each}
			</div>

			<div class="fixed bottom-[140px] w-full left-0 md:relative md:bottom-0">
				<Tapas />
			</div>
				
		</section>

		<div class="grid md:grid-cols-[minmax(auto,_1fr)_calc(250px+2.5rem)] lg:grid-cols-[minmax(auto,_1fr)_calc(250px+5rem)] md:pt-6">
			<div class="flex justify-between place-items-center">
				<SecondaryButton><a href="/blandselvtapas/tilkoeb">Tilbage</a></SecondaryButton>
					<Button type="primary"> <a href="/blandselvtapas/afslut">Næste</a></Button
						>
			</div>
			<div/>
		</div>

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
	}

	/* Content */
	.content {
		background-color: white;
		box-shadow: 7px 7px 0px 2px #e5f1f9;
	}

	/* img {
		min-height: 200px;
	} */

	/* The "show" class is added to the filtered elements */
	.show {
		display: grid;
	}

	/* Style the buttons */
	.btn {
		text-transform: uppercase;
		font-weight: 200;
		font-size: 1rem;
		letter-spacing: 1px;
		border: none;
		outline: none;
		cursor: pointer;
		transition: 0.1s ease-in-out;
	}

	/* Add a dark background color to the active button */
	.btn:active,
	.active {
		font-weight: 600;
	}

	.scrollstyling {
		scrollbar-color: #e5c72e #f8fcfe;
	}
</style>
