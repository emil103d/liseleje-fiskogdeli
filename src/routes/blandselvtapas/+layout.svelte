<script>
	/** @type {import('./$types').LayoutData} */
	export let data;
	import Header from '/src/lib/components/Header.svelte';
	let current = '1';

	function handleClick(string) {
		alert(string);
	}
</script>

<Header />

<slot />

<!-- <nav class="bg-darkblue fixed bottom-0 w-full">
	<div class="wrapper py-10 px-10">
		<div class="flex lg:max-w-[1024px] lg:m-auto justify-between relative">
			<div class="grid justify-center place-items-center text-center gap-4 w-[123px] relative">
				<div class="absolute right-0 w-[50%] h-[3px] bg-white z-0" />
				<div class="h-14 w-14 rounded-full border-[3px] border-yellowdot bg-white grid z-20">
					<img class="w-[70%] h-auto place-self-center logo " src="logo.png" alt="" />
				</div>
			</div>

			<div class="connector" />

			<div class="grid justify-center place-items-center text-center w-[134px] relative">
				<div class="absolute right-0 w-[100%] h-[3px] bg-white z-0" />
				<div
					class="h-14 w-14 rounded-full border-[3px] border-yellowdot bg-white grid place-content-center justify-center align-middle m-auto items-center z-30"
				>
					<img class="w-[70%] h-auto place-self-center logo" src="logo.png" alt="" />
				</div>
			</div>

			<div class="connector" />

			<div class="grid justify-center place-items-center text-center w-[48px]">
				<div
					class="h-14 w-14 rounded-full border-[3px] border-yellowdot bg-white grid place-content-center justify-center align-middle m-auto items-center "
				>
					<img class="w-[70%] h-auto place-self-center logo" src="logo.png" alt="" />
				</div>
			</div>

			<div class="connector" />

			<div class="grid justify-center place-items-center text-center w-[124px] relative">
				<div class="absolute left-0 w-[50%] h-[3px] bg-white z-0" />
				<div
					class="h-14 w-14 rounded-full border-[3px] border-yellowdot bg-white grid place-content-center justify-center align-middle m-auto items-center z-30 "
				>
					<img class="w-[70%] h-auto place-self-center logo" src="logo.png" alt="" />
				</div>
			</div>
		</div>

		<div class="flex justify-between lg:max-w-[1024px] lg:m-auto pt-2">
			<div class="w-[123px]">
				<a
					class={current === '1' ? 'selected' : ''}
					on:click={() => (current = '1')}
					href="/blandselvtapas/"
					>Antal Personer
				</a>
			</div>

			<div class="">
				<a
					class={current === '2' ? 'selected' : ''}
					on:click={() => (current = '2')}
					href="/blandselvtapas/vaelgfisketapas">Vælg tapasretter</a
				>
			</div>

			<div>
				<a
					class={current === '3' ? 'selected' : ''}
					on:click={() => (current = '3')}
					href="/blandselvtapas/tilkoeb">Tilkøb</a
				>
			</div>

			<div>
				<a
					class={current === '4' ? 'selected' : ''}
					on:click={() => (current = '4')}
					href="/blandselvtapas/afslut">Afslut bestilling</a
				>
			</div>
		</div>
	</div>
</nav> -->



<nav class="bg-darkblue fixed bottom-0 w-full h-44 grid content-center">
	<div class="wrapper py-10 px-10"> 
		<div class="flex lg:max-w-[1024px] lg:m-auto justify-between relative">

		<div class="h-[3px] w-full place-self-center justify-center place-content-center place-content-center items-center bg-white">
		
				<div class="relative flex justify-between top-[-26px]">
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
							<p class="text-white font-semibold pt-2">Antal personer</p>
						</div>
					</a>

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
							<p class="text-white font-semibold pt-2">Vælg tapasretter</p>
						</div>
					</a>
					
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
							<p class="text-white font-semibold pt-2">Tilkøb</p>
						</div>
					</a>
					
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
							<p class="text-white font-semibold pt-2">Afslut bestilling</p>
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

</style>
