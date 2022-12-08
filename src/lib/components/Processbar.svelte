<script>
	/** @type {import('./$types').LayoutData} */
	export let data;
	let current = '1';

	function handleClick(string) {
		alert(string);
	}
</script>

<nav class="bg-darkblue px-5 md:px-10 bottom-0 w-full h-[105px] md:h-[120px] pt-3 md:pt-5 fixed grid z-50">
	<div class="wrapper"> 
		<div class="flex lg:max-w-[1024px] lg:m-auto justify-between relative">

		<div class="h-[3px] w-[90%] top-7 absolute left-[5%] bg-white">
		</div>		

		<div class="flex justify-between w-full">
			<div class="hover:scale-110">
				<a
				class={current === '1' ? 'selected' : ''}
				on:click={() => (current = '1')}
				href="/blandselvtapas/"
					><div class="">
						<div
							class="h-14 w-14 rounded-full border-[3px] border-yellowdot bg-white grid place-content-center justify-center align-middle m-auto items-center "
						>
							<img class="w-[70%] h-auto place-self-center logo" src="logo.png" alt="" />
						</div>
						<p class="text-white lilletekst text-center pt-2">Antal</p>
					</div>
				</a>
			</div>

			<div class="hover:scale-110">
				<a
				class={current === '2' ? 'selected' : ''}
				on:click={() => (current = '2')}
				href="/blandselvtapas/vaelgfisketapas">
					<div class="grid justify-center place-items-center text-center">
						<div
							class="h-14 w-14 rounded-full border-[3px] border-yellowdot bg-white grid place-content-center justify-center align-middle m-auto items-center "
						>
							<img class="w-[70%] h-auto place-self-center logo" src="logo.png" alt="" />
						</div>
						<p class="text-white lilletekst pt-2">Tapasretter</p>
					</div>
				</a>
			</div>

			<div class="hover:scale-110">
				<a
				class={current === '3' ? 'selected' : ''}
				on:click={() => (current = '3')}
				href="/blandselvtapas/tilkoeb">
				
					<div class="grid justify-center place-items-center text-center">
						<div
							class="h-14 w-14 rounded-full border-[3px] border-yellowdot bg-white grid place-content-center justify-center align-middle m-auto items-center "
						>
							<img class="w-[70%] h-auto place-self-center logo" src="logo.png" alt="" />
						</div>
						<p class="text-white lilletekst pt-2">Tilkøb</p>
					</div>
				</a>
			</div>

			<div class="hover:scale-110">
				<a
				class={current === '4' ? 'selected' : ''}
				on:click={() => (current = '4')}
				href="/blandselvtapas/afslut">
					<div class="grid justify-center place-items-center text-center">
						<div
							class="h-14 w-14 rounded-full border-[3px] border-yellowdot bg-white grid place-content-center justify-center align-middle m-auto items-center "
						>
							<img class="w-[70%] h-auto place-self-center logo" src="logo.png" alt="" />
						</div>
						<p class="text-white lilletekst pt-2">Bestil</p>
					</div>	
				</a>
			</div>
		</div>


		</div>
	</div>
</nav>



<style>
	.selected {
		font-weight: 600;
	}

	a {
		color: white;
	}
	
	.logo {
		transform: rotatey(180deg);
	}

</style>

